const mongoose = require('mongoose');
const film = new mongoose.Schema({
   
    movieID:{
        type:String,
        required:true, 
    },
    title:{
        type:String,
        required:true,
        Minlength:10,
       
    },
    date:{
        type:String ,
        required :true,
    }
},{collection:'film'})
const  model = mongoose.model('film',film)
module.exports=model;