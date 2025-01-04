const userModel = require('../models/user.model')
const userService = require('../services/user.service')
const { validationResult } = require('express-validator')
const blackListTokenModel = require("../models/blackListToken.model")

module.exports.registerUser = async (req, res, next) => {
    console.log(req.body);  // Log the entire request body here
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        console.log(errors.array());  // Log the validation errors
        return res.status(400).json({ errors: errors.array() });
    }

    const { fullName, email, password } = req.body;
    // Check if required fields are present
    if (!fullName || !email) {
        return res.status(400).json({ message: 'Full Name and Email are required' });
    }
    try {
        //checking if User already exists
        const isUserAlreadyExist = await userModel.findOne({ email })
        if (isUserAlreadyExist) {
            return res.status(400).json({ message: 'User Already Exists' })
        }
        const hashedPassword = await userModel.hashPassword(password);

        //creating user
        const user = await userService.createUser({
            firstName: fullName.firstName,
            lastName: fullName.lastName,
            email,
            password: hashedPassword
        })

        const token = user.generateAuthToken();
        res.status(201).json({ token, user })
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }

}

module.exports.loginUser = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { email, password } = req.body;
    const user = await userModel.findOne({ email }).select('+password');

    //if user not present
    if (!user) {
        return res.status(401).json({ message: 'Invalid Email or Password' })
    }
    // check if password matches
    const isMatch = await user.comparePassword(password);

    // if password does not match
    if (!isMatch) {
        return res.status(401).json({ message: 'Invalid Email or Password' })
    }

    //generating token
    const token = user.generateAuthToken();
    res.cookie('token', token)
    res.status(200).json({ token, user });
}

module.exports.getUserProfile = async (req, res, next) => {
    res.status(200).json(req.user);
}

module.exports.logoutUser = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    await blackListTokenModel.create({ token });
    res.clearCookie('token');
    res.status(200).json({ message: "Logged Out Successfully" });
}