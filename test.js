//const { MongoClient } = require("mongodb");
//const uri = "mongodb://localhost:27017/";

//const client = new MongoClient(uri);

/* async function run() {
  try {
    await client.connect();

    const database = client.db("medicis");
    //const movies = database.listCollections()
    const movies = database.collection("client");

    const cursor = movies.find();

    // replace console.dir with your callback to access individual elements
    await cursor.forEach(console.dir);
  } finally {
    await client.close();
  }
}
run().catch(console.dir); */

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("medicis");
    dbo.collection("client").findOne({}, function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
    /* dbo.listCollections().toArray(function (err, collectionInfos) {
        //console.log(collectionInfos.name);
        for(const n of collectionInfos) {
          var x = n.name;
          const movies = dbo.collection(n.name).find({})
          //console.log(movies)
          console.log(x)
      }
        db.close();
    }); */
});
