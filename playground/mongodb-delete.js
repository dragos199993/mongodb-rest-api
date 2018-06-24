const { MongoClient, ObjectID } = require("mongodb");

// let obj = new ObjectID; // This creates a unieuq id every time

MongoClient.connect(
  "mongodb://localhost:27017",
  (err, database) => {
    const activedb = database.db("TodosApp");
    if (err) {
      return console.log(err);
    }
    //deleteMany
    // activedb
    //   .collection("Users")
    //   .deleteMany({ name: "Dragos" })
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(err => console.log(err));
    //, deleteOne
    // activedb
    // .collection("Users")
    // .deleteOne({ name: "Dragos" })
    // .then(res => {
    //   console.log(res);
    // })
    // .catch(err => console.log(err));
    //, findOneAndDelete
    activedb
    .collection("Users")
    .findOneAndDelete({ name: "Dragos" })
    .then(res => {
      console.log(res);
    })
    .catch(err => console.log(err));
    database.close();
  }
);
