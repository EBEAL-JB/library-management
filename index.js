var express=require("express")
var useragent=require("express-useragent")
var bodyParser=require("body-parser");
const mongoose=require("mongoose");
const { json } = require("body-parser");
var port=process.env.PORT||4000
var app=express();
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use(bodyParser.urlencoded({
    extended: true, limit: '150mb'
}));
app.use(bodyParser.json({ limit: '150mb' }));
const myusr=require("../library management/route/libraryroute")
const myout=require("../library management/route/libraryroute")
mongoose.connect(process.env.MONGOURL || 'mongodb+srv://8075441380:8075441380@cluster0.qhdp35w.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    // if(data)
    //     console.log("db success", data)
    // if(error)
    //     console.log("db error", error)
    console.log("Db connected")
}).catch((ex) => {
    console.log("Db connection error")
    console.log(ex)
});
var db=mongoose.connection
app.use(useragent.express());
app.use((req, res, next) => {
    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    console.log(fullUrl)
    next();
})

    // app.get('/health', async (req, res) => {
    //     res.status(200).json({
    //         status: true,
    //         d: (new Date()).toString()
    //     });
    // });
    app.use(myusr)
    app.use(myout)
    app.listen(port,function(){});
    console.log("listening on 4000");