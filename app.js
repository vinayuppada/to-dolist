const bodyParser = require('body-parser');
const { render } = require('ejs');
const express = require('express')
constbodyParser =require("body-parser");
const date =require(__dirname + "/date.js");



const app = express()
var items=[ "buy food","cook food","eat food"];
let workItems=[];
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine','ejs')

app.get('/',function(req,res){

let day =date.getDate();   
   
    res.render("index",{listTitle : day,newListItems: items})

});
    app.post("/",function(req,res){
        
        var item =req.body.newItem;
        
        if(req.body.button === "Work"){
            workItems.push(item);
            res.redirect("/work");
        }else{
            items.push(item);

            res.redirect("/");
        }
        
    });
    
    app.get("/work",function(req,res){
        res.render("index",{listTitle:"Work List", newListItems:workItems});
    });
    
app.post("/work",function(req,res){
    let item =req.body.newItem;
    worrkItems.push(item);
    res.redirect("/work");
});
app.get("/about",function(req,res){
    res.render("about");
});
app.listen(process.env.PORT || 5000,function(){
    console.log("server started on port 5000");
});
