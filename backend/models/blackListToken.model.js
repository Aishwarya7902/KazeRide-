const mongoose=require('mongoose');
const blackListTokenSchema= new mongoose.Schema({
    token:{
        type:String,
        required:true,
        unique:true
    },
    createdAt:{
        type:Date,
        default:Date.now,
        expires:86400 //since there are 86400 sec in 24 hours
    }
});

module.exports=mongoose.model('blackListToken',blackListTokenSchema);