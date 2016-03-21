var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views/';

router.use(function (req,res,next) {
    console.log("/" + req.method);
    next();
});

app.use(express.static('public'));

router.get("/",function(req,res){
    console.log("request address: " + req.connection.remoteAddress)
    res.sendFile(path + "index.html");
});

router.get("/posts",function(req,res){
    res.sendFile(path + "posts.html");
});

router.get("/post",function(req,res){
    res.sendFile(path + "post.html");
});

router.get("/levels",function(req,res){
    res.sendFile(path + "levels.html");
});

router.get("/about",function(req,res){
    res.sendFile(path + "about.html");
});

router.get("/contact",function(req,res){
    res.sendFile(path + "contact.html");
});

// router.get("/bootstrap.min.css",function(req,res){
//     res.sendFile(path + "bootstrap.min.css");
// });

app.use("/",router);

app.use("*",function(req,res){
    res.sendFile(path + "404.html");
});

app.listen(8080,function(){
    console.log("Live at Port 8080");
});
