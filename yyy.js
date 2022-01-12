const fs = require('fs')
/* const fs = require('fs')
var jp = require('jsonpath');


fs.readFile('./correspondance_file.json', 'utf8', function(err, data) {
    if (err) throw err;
    dataJson = JSON.parse(data)
    var dict = [];
    var names = jp.query(dataJson, '$..Tranferts');

    
   /*  Object.keys(dataJson).forEach(function myFunction(item) {
        dict.push( item);
        
          }
      ); */

     // console.log(names)
      //dicts = []
     /*  for (var i = 0; i < dict.length; i++) {

        Object.keys(dataJson[dict[i]]).forEach(function myFunction(item) {
           dicts.push({
            "attribute" : dict[i] + "." + item,
            "alias" : ""
          });
            
              }
          );

    } */

    //var myJSON = JSON.stringify(dicts);

    /* fs.writeFile('correspondance.json', myJSON, (err) => {
        if (err) {
            throw err;
        }
        console.log("Correspondance doc is saved.");
    }); */
    
//});

 //*/


var Fhir = require('fhir').Fhir;
var resource = {
    resourceType: 'Patient'
  };
  var fhir = new Fhir();
  var xml = fhir.objToXml(resource);
  var json = fhir.xmlToJson(xml);
  var obj = fhir.xmlToObj(xml);
  var results = fhir.validate(xml, { errorOnUnexpected: true });
  results = fhir.validate(obj, {});
  //fhir.generateSnapshot(SnapshotGenerator.createBundle(sd1, sd2, sd3));

  var newResources = JSON.parse(fs.readFileSync('patient.json').toString());

  console.log(newResources)