const fs = require('fs');

const fileData = fs.readFileSync('1-json.json');
let dataObject = JSON.parse(fileData);

dataObject.name = "Adam";
dataObject.age = 17;

dataObject = JSON.stringify(dataObject)
fs.writeFileSync('1-json.json', dataObject)