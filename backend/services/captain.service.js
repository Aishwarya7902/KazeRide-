const captainModel=require("../models/captain.model");

module.exports.createCaptain=async ({firstName,lastName,email,password,color,plate,capacity,vehicleType})=>{
    if(!firstName || !email || !password || !color || !plate || !capacity || !vehicleType){
        throw new Error('All field are required')
    }
 // creating a new captain

  const captain=captainModel.create({
    fullName:{
        firstName,
        lastName
    },
    email,
    password,
    vehicle:{
        color,
        plate,
        capacity,
        vehicleType
    }
  })

  return captain;

}