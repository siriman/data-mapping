const shell = require('shelljs')
const fs = require('fs')

shell.exec('./extr.sh')


fs.readFile('./schema.json', 'utf8', function(err, data) {
    if (err) throw err;
    dataJson = JSON.parse(data)
    var dict = [];
    
    Object.keys(dataJson).forEach(function myFunction(item) {
        dict.push( item);
        
          }
      );
      dicts = []
      for (var i = 0; i < dict.length; i++) {

        Object.keys(dataJson[dict[i]]).forEach(function myFunction(item) {
           dicts.push({
            "attribute" : dict[i] + "." + item,
            "alias" : ""
          });
            
              }
          );

    }

    var myJSON = JSON.stringify(dicts);

    fs.writeFile('correspondance_file.json', myJSON, (err) => {
        if (err) {
            throw err;
        }
        console.log("Correspondance doc is saved.");
    });
    
});
