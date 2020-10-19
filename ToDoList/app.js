const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

let toDoItems = ["Buy Food", "Cook Food", "Eat Food"];
let workItems = [];
let weekend = "";

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res) {
    
    let day = date.getDate();
    let weekend = date.getDay();

    res.render('list', {listTitle: day, newlistItems: toDoItems, weekend: weekend});
});

app.post("/", function(req, res) {

    console.log(req.body);

    var toDoItem = req.body.toDoItem;

    if (req.body.list === "Work\ List" ) {
        workItems.push(toDoItem);
        res.redirect("/work");        
    } else {
        toDoItems.push(toDoItem);
        res.redirect("/");
    }

});

app.get("/work", function(req, res){
    res.render("list", {listTitle: "Work List", newlistItems: workItems, weekend: weekend});
});

app.get("/about", function(req, res){
    res.render("about");
});

app.post("/work", function(req, res){
    let item = req.body.toDoItem;
    workItems.push(item);
    res.redirect("/work");
});

app.listen(3000, function() {
    console.log("Server is running on Port 3000.");
});