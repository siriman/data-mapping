/* let MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017', function(err, client){
  if(err) throw err;
  let db = client.db('medicis');
  db.collection('patient').find({_id:94}).toArray(function(err, result){
    if(err) throw err;
    //result[0]['_id'] = 999994;
    //console.log(Object.keys(result[0]));
    client.close();
    });
 }); */

//patient = {"telecom":{"name":"", "email":""}}
var jp = require('jsonpath');
const fs = require('fs')
fs.readFile('./patient.json', 'utf8', function(err, resource) {
  if (err) throw err;
  patient = JSON.parse(resource)
  //console.log(patient.telecom[1].value)
//});

medicisobject = {"name":"Siri", "email":"siri@gmail.com"}
 file =[ {"attribute":"patient.name", "alias":"patient.telecom[1].value"}]

  dicts = []
  var names = jp.query(file, '$..alias');
  //z = names[0].split("."),
  console.log(names)
  ll = Object.keys(medicisobject);
  //console.log(ll[0])
  for (var i = 0; i < ll.length; i++) {
    x = ll[i]
    //console.log(medicisobject[x])
    file.forEach(function myFunction(item) {
      //console.log(item.attribute)
      w="patient"+"."+x
       if (item["attribute"]==w){
         //console.log(item["attribute"])
         //patient.telecom.name=medicisobject[x]
         //console.log(w)
       } 

        
          }
      );
  }
});



