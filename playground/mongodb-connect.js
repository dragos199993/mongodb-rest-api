const {MongoClient, ObjectID} = require("mongodb");

// let obj = new ObjectID; // This creates a unieuq id every time


MongoClient.connect(
  "mongodb://localhost:27017",
  (err, database) => {
    const activedb = database.db('TodosApp')
    if (err) {
      return console.log(err);
    }
    
    console.log(`Connected to mongodb server`);

    activedb.collection('Todos').insertOne({
      text: 'Here is a example2',
      completed: true
    }, (err, result) => {
      if(err) return console.log(err);
      console.log(JSON.stringify(result.ops, undefined, 2));
    });

    activedb.collection("Users").insertOne({
      name: "Dragos2",
      age: "26",
      role: "Web Designer"
    }, (err, result) => {
      if(err) return console.log(err);
      console.log(JSON.stringify(result.ops, undefined, 2));
      console.log(result.ops[0]._id.getTimestamp());
    })



    database.close();
  }
);
