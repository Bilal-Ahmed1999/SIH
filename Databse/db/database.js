const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Hackathon',{})
.then(()=>{
    console.log('connection sucessfull');
}).catch((e)=>{
    console.log(e);
})