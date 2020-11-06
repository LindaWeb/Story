const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://lindae:adnil789@cluster0.0za49.mongodb.net/fruitsDB",  { useUnifiedTopology: true, useNewUrlParser: true });


const fruitSchema = new mongoose.Schema ({
    // name: { type: String, required: [true, 'is missing, grrr :( ']},
    name: String,
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({
    name: "Pineapple",
    rating: 9,
    review: "Prickely sweet!"
});

fruit.save();

const peopleSchema = new mongoose.Schema ({
    name: String,
    age: Number,
    favoriteFruit: fruitSchema
});

const Person = mongoose.model("Person", peopleSchema);

const person = new Person ({
    name: "Sally",
    age: "15",
    favoriteFruit: Pineapple
});

person.save();

const kiwi = new Fruit ({
    name: "Kiwi",
    rating: 10,
    review: "The best"
});

const orange = new Fruit ({
    name: "Orange",
    rating: 8,
    review: "Full of C."
});

const banana = new Fruit ({
    name: "Banana",
    rating: 7,
    review: "It's just crooked."
});

// Fruit.insertMany([kiwi, orange, banana], function(err){
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Sucessfully inserted")
//     }
// });


Fruit.find(function(err, fruits){
    if (err) {
        console.log(err);
    } else {
        // console.log(fruits)
        // mongoose.connection.close();

        fruits.forEach(function(fruit){
            // console.log(fruit.name)
            console.log(fruits)
        });
    }
});

Fruit.updateOne({_id: "5fa3395ee2af370708f84e3a"}, {name: "Peach2"}, function(err){
    if (err){
        console.log(err);
    } else {
        console.log("Success! Updated.");
    }
});