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
    
    activedb.collection('Users').find({name: 'Dragos'}).toArray().then(res => {
        console.log(res);
    }).catch(err => console.log(err));


    database.close();
  }
);
