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