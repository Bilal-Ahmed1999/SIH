const Routes = require('express').Router();
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose'); 
const Client = require('../Databse/model/user');



Routes.post('/Ragistration', async(req,res)=>{
    try{
        const Salt = await bcrypt.genSalt(10);
        const Pass = await bcrypt.hash(req.body.Password,Salt);

        const result = await new Client({
            Name:req.body.Name,
            Address:req.body.Address,
            phone_no:req.body.phone_no,
            Password:Pass
        })
      const ans = await result.save();
      res.send(ans).status(200);
    }catch(e){
        console.log(e);
    }
})

// app.post('/login',(req,res)=>{
//     try {
        

//     } catch (error) {
//         console.log(error);
//     }
// })

module.exports = Routes;