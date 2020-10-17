const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

var toDoItems = ["Buy Food", "Cook Food", "Eat Food"];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res) {
    
    var today = new Date();

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long",
    }
    var optionsWeekend  = {
        weekday: "long",
    }

    var day = today.toLocaleDateString("en-US", options);
    var weekend = today.toLocaleDateString("en-US", optionsWeekend);

    res.render('list', {kindOfDay: day, newlistItems: toDoItems, weekend: weekend});
});

app.post("/", function(req, res) {
    var toDoItem = req.body.toDoItem;

    toDoItems.push(toDoItem);
    res.redirect("/");
});

app.listen(3000, function() {
    console.log("Server is running on Port 3000.");
})