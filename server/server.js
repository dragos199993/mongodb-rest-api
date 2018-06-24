const express = require("express");
const bodyParser = require("body-parser");

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

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
  console.log(`Access: http://localhost:${port}`);
});
