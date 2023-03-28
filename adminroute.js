var express=require("express").Router
var router=express()
var adminmodel = require("../models/adminmodel");
const bcrypt=require("bcryptjs");
var AdminSchema=require("../models/adminmodel");
const { findOne } = require("../models/adminmodel");
const jwt=require("jsonwebtoken");
const { response } = require("express");
router.post('/Admin/details',async(req,res)=>{
    try{
   var{Studentname,Payment_due,Book_Details,}=req.body;
   if(Studentname===null||Studentname===undefined){
    res.status(200).json({
        status:false,
        msg:"Studentname is undefined or null"
    })
    return;
}
if(Payment_due===null||Payment_due===undefined){
    res.status(200).json({
        status:false,
        msg:"payment_due is undefined or null"
    })
    return;
}
if(Book_Details===null||Book_Details===undefined){
    res.status(200).json({
        status:false,
        msg:"Book_details is undefined or null"
    })
    return;
}
var data1=new adminmodel()
data1.Studentname=Studentname;
data1.Payment_due=Payment_due;
data1.Book_Details=Book_Details;
await data1.save()
console.log(data1)
res.status(200).json({
    msg:"Sucessfully inserted"
})
return;
    }
    catch(e){
        console.log(e);
    }
})

module.exports=router;





