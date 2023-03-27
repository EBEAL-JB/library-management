var express=require("express").Router
var router=express()
var libraryModel = require("../models/librarymodel");
const bcrypt=require("bcryptjs");
var librarySchema=require("../models/librarymodel");
const { findOne } = require("../models/librarymodel");
const jwt=require("jsonwebtoken");
const { response } = require("express");
router.post('/user',async(req,res)=>{
    try{
   var{Username,password, Admin_No,Book_No, Email,Date_of_return,Date_of_issue,Row_no,Due_amount,subject}=req.body;
   if(Username===null||Username===undefined){
    res.status(200).json({
        status:false,
        msg:"Username is undefined or null"
    })
    return;
}
if(password===null||password===undefined){
    res.status(200).json({
        status:false,
        msg:"password is undefined or null"
    })
    return;
}
if(Admin_No===null||Admin_No===undefined){
    res.status(200).json({
        status:false,
        msg:"Admin_No is undefined or null"
    })
    return;
}
if(Book_No===null||Book_No===undefined){
    res.status(200).json({
        status:false,
        msg:"Book_No is undefined or null"
    })
    return;
}
if(Email===null||Email===undefined){
    res.status(200).json({
        status:false,
        msg:"Email is undefined or null"
    })
    return;
}
if(Date_of_return===null||Date_of_return===undefined){
    res.status(200).json({
        status:false,
        msg:"Date_of_return is undefined or null"
    })
    return;
}
if(Date_of_issue===null||Date_of_issue===undefined){
    res.status(200).json({
        status:false,
        msg:"Date_of_return is undefined or null"
    })
    return;
}
if(Due_amount===null||Due_amount===undefined){
    res.status(200).json({
        status:false,
        msg:"Date_of_issue is undefined or null"
    })
    return;
}
if(subject===null||subject===undefined){
    res.status(200).json({
        status:false,
        msg:"subject is undefined or null"
    })
    return;
}
var hash=await bcrypt.hash(password,10);
var datalib=new libraryModel()
datalib.Username=Username;
datalib.password=password;
datalib.Admin_No=Admin_No;
datalib.Book_No=Book_No;
datalib.Email=Email;
datalib.Date_of_return=Date_of_return;
datalib.Date_of_issue=Date_of_issue;
datalib.Row_no=Row_no;
datalib.Due_amount=Due_amount;
datalib.subject=subject;
await datalib.save()
console.log(datalib)
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





