const express = require('express');
const router=express.Router();
const User =require('../models/user');


router.get('/',(req,res)=>{
    console.log(req.body);
    obj={
        a:"hello",
    };
    res.json(obj);
    // res.send('hello');
    
})

module.exports=router;