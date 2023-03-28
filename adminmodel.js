var mongoose=require("mongoose");
var AdminSchema= mongoose.Schema({
     Studentname:{
        type:String
    },
    Payment_due:{
        type:Number
    },
   Book_Details:{
    type:String
    },
   Status:{
    type:String,
    default:"Active"
  },
},
{
timestamps:{
    createdAt:"Create_date",
    updateAt:"Update_date"
}
})
module.exports=mongoose.model("adminmodel",AdminSchema)
