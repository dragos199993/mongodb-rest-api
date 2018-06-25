const express = require("express");
const bodyParser = require("body-parser");
const _ = require("lodash");

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
  let id = req.params.id;
  if (!ObjectID.isValid(id)) {
    res.status(404).send("Id was formatted incorrectly");
  }
  Todo.findById(id)
    .then(todo => {
      if (!todo) return res.send("Id not found");
      res.send(todo);
    })
    .catch(err => res.status(404).send("ObjectID not valid"));
});

app.delete("/todos", (req, res) => {
  Todo.remove({})
    .then(todo => {
      if (!todo) return res.send("Id not found");
      res.send(todo);
    })
    .catch(err => res.status(404).send("ObjectID.not valid"));
});

app.delete("/todos/:id", (req, res) => {
  let id = req.params.id;
  if (!ObjectID.isValid(id)) {
    res.status(404).send("Id was formatted incorrectly");
  }
  Todo.findByIdAndRemove(id)
    .then(todo => {
      if (!todo) return res.send("Id not found");
      res.send(todo);
    })
    .catch(err => res.status(404).send("ObjectID not validO"));
});

app.patch("/todos/:id", (req, res) => {
  let id = req.params.id;
  let body = _.pick(req.body, ["text", "completed"]);

  if (!ObjectID.isValid(id)) {
    res.status(404).send("Id was formatted incorrectly");
  }

  if (_.isBoolean(body.completed)) {
    body.completedAt = new Date().getTime();
  } else {
    body.completed = false;
    body.completedAt = null;
  }

  Todo.findByIdAndUpdate(
    id,
    {
      $set: body
    },
    { new: true }
  )
    .then(todo => {
      if (!todo) res.status(404).send("Id not found");
      res.send({todo});
    })
    .catch(err => res.status(404).send("Id was badly formatted"));
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
  console.log(`Access: http://localhost:${port}`);
});
