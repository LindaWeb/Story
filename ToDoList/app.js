const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');


app.get("/", function(req, res) {
    
    res.render('index', {foo: 'FOO'});
    
    var today = new Date();

    if (today.getDay() === 6 || today.getDay() === 0) {
        res.send("Yay it's the weekend, I have to work!");
    } else {
        res.send("Hmm, I have to work!");
    }
});




app.listen(3000, function() {
    console.log("Server is running on Port 3000.");
})
