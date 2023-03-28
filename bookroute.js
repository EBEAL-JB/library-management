var express=require("express").Router
var router=express()
var bookmodel = require("../models/bookmodel");
const bcrypt=require("bcryptjs");
var BookSchema=require("../models//bookmodel");
const { findOne } = require("../models/bookmodel");
const jwt=require("jsonwebtoken");
const { response } = require("express");
router.post('/Book/details',async(req,res)=>{
    try{
   var{BookID,Book_name,Author,Date_of_return,Date_of_issue,Row_no,payment,subject}=req.body;
   if(BookID===null||BookID===undefined){
    res.status(200).json({
        status:false,
        msg:"Bookid is undefined or null"
    })
    return;
}
if(Author===null||Author===undefined){
    res.status(200).json({
        status:false,
        msg:"Author is undefined or null"
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
        msg:"Date_of_issue is undefined or null"
    })
    return;
}
if(Row_no===null||Row_no===undefined){
    res.status(200).json({
        status:false,
        msg:"row is undefined or null"
    })
    return;
}
if(payment===null||payment===undefined){
    res.status(200).json({
        status:false,
        msg:"payment is undefined or null"
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
var book=new bookmodel()
book.BookID=BookID;
book.Book_name=Book_name;
book.Author=Author;
book.Date_of_return=Date_of_return;
book.Date_of_issue=Date_of_issue;
book.Row_no=Row_no;
book.payment=payment;
book.subject=subject;
await book.save()
console.log(book)
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





