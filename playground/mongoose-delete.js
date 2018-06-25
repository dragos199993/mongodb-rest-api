const { mongoose } = require("./../server/db/mongoose");

//Models
const { Todo } = require("./../server/models/Todo");
const { User } = require("./../server/models/User");
const { ObjectID } = require("mongodb");

var id = "5b2ff532f625be43d8267f38";
var userId = "5b2fc3f32321580f30656fc8";
// Check if ObjectID is invalid
// if(!ObjectID.isValid(id)){
//     console.log('ID not valid');
// }

// Remove one - returns an array
// Todo.deleteOne({
//     _id: id
// }).then( todos => {
//     if(todos.length === 0) return console.log("ID not found.");
//     console.log(todos);
// }).catch( err => console.log(err));

// Remove all
Todo.remove({})
  .then(todos => {
    if (!todos) return console.log("ID not found.");
    console.log(todos);
  })
  .catch(err => console.log(err));

// // Query by id
// Todo.findById(id).then( todos => {
//     if(!todos) return console.log("ID not found.");
//     console.log(todos);
// }).catch( err => console.log(err));

// Find one and remove
// User.findOneAndRemove(userId).then( user => {
//     if(!user) return console.log("unable to find user");
//     console.log(user);
// }).catch( err => console.log(err));


//Find by id and remove
// User.findByIdAndRemove.....