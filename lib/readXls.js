var path = require('path');
var XLSX = require('xlsx');

function readFile(path){
  var workbookA = XLSX.readFile(path, {})
  console.log('Processing the sheet:', workbookA.SheetNames)

  /* get the first sheet */
  var sheetA = workbookA.Sheets[workbookA.SheetNames[0]]
  /* generate array of arrays */
  var obj = XLSX.utils.sheet_to_json(sheetA, {raw:true, header:1});

  return obj
}

module.exports = readFile
