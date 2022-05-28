const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const User = require('./models/user')
const film = require('./models/film')
// transaction between ports
app.use(cors())
app.use(express.json())
 mongoose.connect('mongodb://localhost:2000/salim').then(console.log('connected to BD'))

app.listen(2000
    ,()=>{
    console.log('listening on port 2000')
})
app.post('/EXam/inscrire',async(req,res)=>{
    try{
        const user1 = await User.create({
            nom:req.body.nom,
            password:req.body.password
        });
        if(user1){
            res.json({status:"success add"})
        }
    }catch (err){
        res.json({status:"failed to add"})
    }
});
app.post('/Exam/film',async(req,res)=>{
    try{
        const film1 = await film.create({
            movieId:req.body.nom,
            title:req.body.password,
            date:req.body.date
        });
        if(film1){
            res.json({status:"success add"})
        }
    }catch (err){
        res.json({status:"failed to add"})
    }
});


