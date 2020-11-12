const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

mongoose.connect("mongodb+srv://lindae:adnil789@cluster0.0za49.mongodb.net/wikiDB",  { useUnifiedTopology: true, useNewUrlParser: true });

const articleSchema = new mongoose.Schema ({
   title: String,
   content: String 
});

const Article = mongoose.model("Article", articleSchema);

///////////  Requests targeting all articles //////////////////

app.route("/articles")
.get(function(req, res){
    Article.find(function(err, foundArticles){
        if (!err) {
            console.log(foundArticles);
            res.send(foundArticles);
        } else {
            res.send(err);
        }

    });
})
.post(function(req, res){
    console.log(req.body.title);
    console.log(req.body.content);

    const newArticle = new Article ({
        title: req.body.title,
        content: req.body.connect
    });

    newArticle.save(function(err){
        if (!err) {
            res.send("Successfully added.");
        } else {
            res.send(err);
        }
    });
})
.delete(function(req,res){
    Article.deleteMany(function(err){
        if (!err){
            res.send("Deleted all articles!");
        } else {
            res.send(err);
        }
    });
});

// const newArticle = new Article ({
//     "title" : "Bootstrap",
//     "content" : "This is a framework developed by Twitter that contains pre-made front-end templates for web design"
// });
// newArticle.save(function(){
//     console.log("Successfully added.");
// });
// Article.deleteMany(function(){
//         console.log("Deleted all articles!");
// });

///////////  Requests targeting a speciffic article //////////////////

app.route("/articles/:articleTitle")
.get(function(req, res){

    Article.findOne({title: req.params.articleTitle},
    function(err, foundArticle) {
        if (!err) {
            console.log(foundArticle);
            res.send(foundArticle);
        } else {
            res.send(err);
        }
    });
});



app.listen(3000, function() {
  console.log("Server started on port 3000");
});