var path = require('path');
var XLSX = require('xlsx');

function readFile(path){
  var workbookA = XLSX.readFile(path, {})
  console.log('Processing the sheet:', workbookA.SheetNames)

  var sheetA = workbookA.Sheets[workbookA.SheetNames[0]] // get first sheet
  var obj = XLSX.utils.sheet_to_json(sheetA)

  return obj
}

module.exports = readFile
