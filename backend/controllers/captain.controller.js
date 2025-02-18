const blackListTokenModel = require("../models/blackListToken.model");
const captainModel = require("../models/captain.model")
const captainService = require("../services/captain.service")
const { validationResult } = require('express-validator')

module.exports.registerCaptain = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { fullName, email, password, vehicle } = req.body;

    //checking if captain already exists
    const isCaptainAlreadyExist = await captainModel.findOne({ email })
    if (isCaptainAlreadyExist) {
        return res.status(400).json({ message: 'Captain Already Exists' })
    }


    //hashing the password first
    const hashedPassword = await captainModel.hashPassword(password);

    //creating the captain
    const captain = await captainService.createCaptain({
        firstName: fullName.firstName,
        lastName: fullName.lastName,
        email,
        password: hashedPassword,
        color: vehicle.color,
        plate: vehicle.plate,
        capacity: vehicle.capacity,
        vehicleType: vehicle.vehicleType
    })

    //generating the token

    const token = captain.generateAuthToken();
    res.status(201).json({ token, captain });
}

module.exports.loginCaptain=async (req,res,next)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }

    const {email,password}=req.body;
    const captain=await captainModel.findOne({email}).select('+password');
    //if captain not present
    if(!captain){
        return res.status(401).json({message:'Invalid Email or Password'})
    }
   //checking if password matches or not
    const isMatch=await captain.comparePassword(password);
    if(!isMatch){
        return res.status(401).json({message:'Invalid Email or Password'})
    }
 // generating a token
 const token=captain.generateAuthToken();
 res.cookie('token',token);
 res.status(200).json({token,captain});

}

module.exports.getCaptainProfile=async (req,res,next)=>{
    res.status(200).json({captain:req.captain});
}
module.exports.logoutCaptain = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    
    if (!token) {
        return res.status(400).json({ message: "No token provided" });
    }

    await blackListTokenModel.create({ token });
    res.clearCookie('token');
    res.status(200).json({ message: "Logged Out Successfully" });
};
