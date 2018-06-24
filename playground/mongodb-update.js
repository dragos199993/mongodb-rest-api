const { MongoClient, ObjectID } = require("mongodb");

// let obj = new ObjectID; // This creates a unieuq id every time

MongoClient.connect(
  "mongodb://localhost:27017",
  (err, database) => {
    const activedb = database.db("TodosApp");
    if (err) {
      return console.log(err);
    }
    // activedb.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5b2f8d402d81f2286c709897')
    // }, {
    //     $set: {
    //         text: 'This text was modified'
    //     }
    // }, {
    //     returnOriginal: false
    // }).then( res => console.log(res)).catch( err => console.log(err));
    activedb.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5b2fa17f718c97184086334f')
    }, {
        $set: {
            name: 'Madalina'
        },
        $inc: {
            age: 1
        }
    },{
        returnOriginal: false
    }).then( res => {
        console.log(res);
    }).catch( err => console.log(err));
    database.close();
  }
);
