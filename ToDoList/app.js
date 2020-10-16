const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

var toDoItems = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    
    var today = new Date();

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long",
    }

    var day = today.toLocaleDateString("en-US", options);

    res.render('list', {kindOfDay: day, newlistItem: toDoItems});
});

app.post("/", function(req, res) {
    var toDoItem = req.body.toDoItem;

    toDoItems.push(toDoItem);
    // toDoItems.push("<li>" + toDoItem + "</li>");
    res.redirect("/");
});

app.listen(3000, function() {
    console.log("Server is running on Port 3000.");
})
