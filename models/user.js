const mongoose = require('mongoose');
const User = new mongoose.Schema({
    nom:{
        type:String,
        required:true, 
    },
    mail:{
        type:String,
        required:true,
        Minlength:10,
       
    },
    age:{
        type:String ,
        required :true,
    }
},{collection:'users'})
const  model = mongoose.model('User',User)
module.exports=model;