const express = require("express");
const bodyParser = require("body-parser");
const { ObjectID } = require("mongodb");
// Db info
const { mongoose } = require("./db/mongoose");

// Models
const { User } = require("./models/User");
const { Todo } = require("./models/Todo");

const app = express();

//Check for env port
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Set up post route
app.post("/todos", (req, res) => {
  let todo = new Todo({
    text: req.body.text
  });

  todo
    .save()
    .then(response => {
      res.send(response);
    })
    .catch(err => {
      res.status(400).send(err);
    });
});

app.get("/todos", (req, res) => {
  Todo.find()
    .then(todos => {
      res.send({ todos });
    })
    .catch(err => {
        res.status(400).send(err);
    });
});

app.get("/todos/:id", (req, res) => {
    if(!ObjectID.isValid(req.params.id)){
        res.status(404).send('Id was formatted incorrectly')
    }
    Todo.findById(req.params.id).then( todo => {
        if(!todo)  return res.send("Id not found");
        res.send(todo);
    }).catch( err => res.status(404).send("ObjectID not valid"));
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
  console.log(`Access: http://localhost:${port}`);
});
