const express = require("express");
const https = require("https");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

// const toDoItems = ["Buy Food", "Cook Food", "Eat Food"];
// const workItems = [];
// const weekend = "";

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb+srv://lindae:adnil789@cluster0.0za49.mongodb.net/todolistDB",  { useUnifiedTopology: true, useNewUrlParser: true });

const itemsSchema = new mongoose.Schema ({
    name: String
});

const Item = mongoose.model("Item", itemsSchema);

const item1 = new Item ({
    name: "Welcome to your tosolist!"
});
const item2 = new Item ({
    name: "Hit the + button to add new item."
});
const item3 = new Item ({
    name: "<-- Hit this to delete."
});

const defaultItems = [item1, item2, item3];

Item.insertMany(defaultItemns, function(err){
    if (err) {
        console.log(err);
    } else {
        console.log("Yaay!!");
    }
}) 


app.get("/", function(req, res) {
    
    res.render('list', {listTitle: "Today", newlistItems: toDoItems, weekend: weekend});
});

app.post("/", function(req, res) {

    console.log(req.body);

    const toDoItem = req.body.toDoItem;

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
    const item = req.body.toDoItem;
    workItems.push(item);
    res.redirect("/work");
});

app.listen(3000, function() {
    console.log("Server is running on Port 3000.");
});