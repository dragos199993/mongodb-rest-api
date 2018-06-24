const { mongoose } = require("./../server/db/mongoose");

//Models
const { Todo } = require("./../server/models/Todo");
const { User } = require("./../server/models/User");
const { ObjectID } = require("mongodb");

var id = '5b2fe73809fac9419004076b1';
var userId = '5b2fc02a867e740708f6c503';
// Check if ObjectID is invalid
// if(!ObjectID.isValid(id)){
//     console.log('ID not valid');
// } 

// Query all - returns an array
// Todo.find({
//     _id: id
// }).then( todos => {
//     if(todos.length === 0) return console.log("ID not found.");
//     console.log(todos);
// }).catch( err => console.log(err));

// // Query one
// Todo.findOne({
//     _id: id
// }).then( todos => {
//     if(!todos) return console.log("ID not found.");
//     console.log(todos);
// }).catch( err => console.log(err));

// // Query by id
// Todo.findById(id).then( todos => {
//     if(!todos) return console.log("ID not found.");
//     console.log(todos);
// }).catch( err => console.log(err));


User.findById(userId).then( user => {
    if(!user) return console.log("unable to find user");
    console.log(user);
}).catch( err => console.log(err));