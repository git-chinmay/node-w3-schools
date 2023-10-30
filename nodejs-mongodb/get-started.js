const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://127.0.0.1:27017";
// const url = "mongodb://localhost:27017/"; 

// Creating mongodb
// const url = "mongodb://localhost:27017/node-w3-schools";
// const url = "mongodb://localhost:27017/?authMechanism=DEFAULT"

// MongoClient.connect(url, (err, db)=> {
//   if (err) throw err;
//   console.log("Database created!");
//   db.close();
// });

// The DB will not be created until a collection added to it

// CREATING A COLLECTION

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   const dbo = db.db("node-w3-schools");
//   dbo.createCollection("customers", function(err, res) {
//     if (err) throw err;
//     console.log("Collection created!");
//     db.close();
//   });
// });

// A collection will not be created until a document inserted into it

// Inserting a document to the colelction
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    const dbo = db.db("node-w3-schools");
    const myobj = { name: "Company Inc", address: "Highway 37" };
    dbo.collection("customers").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  });