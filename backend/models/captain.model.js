const mongoose=require('mongoose');
const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')

const captainSchema=new mongoose.Schema({
    fullName:{
        firstName:{
            type:String,
            required:true,
            minlength:[3,'firstName must be at least 3 characters long']
        },
        lastName:{
            type:String,
            minlength:[3,'laststName must be at least 3 characters long']
        }

    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        match: [ /^\S+@\S+\.\S+$/, 'Please enter a valid email' ]

    },
    password:{
        type:String,
        required:true,
        select:false
    },
    socketId:{
        type:String
    },
    status:{
        type:String,
        enum:['active','inactive'],
        default:'inactive'
    },
    vehicle:{
        color:{
            type:String,
            required:true,
            minlength:[3,'color must be at least 3 characters long'] 
        },
        plate:{
            type:String,
            required:true,
            minlength:[3,'plate must be at least 3 characters long']
        },
        capacity:{
            type:Number,
            required:true,
            min:[1,'Capacity must be at least 1']
        },
        vehicleType:{
            type:String,
            required:true,
            enum:['car','motocycle','auto']
        }
    },
    location:{
        latitude:{
            type:Number
        },
        longitude:{
            type:Number
        }
    }
})


captainSchema.methods.generateAuthToken= function () {
    const token=jwt.sign({_id:this._id},process.env.JWT_SECRET,{expiresIn:'24h'});
    return token;
}

captainSchema.methods.comparePassword=async function(password){
    return await bcrypt.compare(password,this.password);
}

captainSchema.statics.hashPassword=async function(password){
    return await bcrypt.hash(password,10);
}
const captainModel=mongoose.model('captain',captainSchema)
module.exports=captainModel;