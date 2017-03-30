const argv = require('minimist')(process.argv.slice(2))
const path = require('path')
const _ = require('lodash')
const readXls = require('./lib/readXls')

require('./lib/logo')()

if (!argv.c || !argv._.length) throw Error('-c <column> param and filenames required.')
if (argv._.length === 1) throw Error('Please provide 2 files at least.')

var files = {}
argv._.forEach(function(file){
  files[file] = readXls(file)
})
console.log(Object.keys(files).length, 'files fetched')


for (var sheetName in files){
  var sheet = files[sheetName]
  // sheet[row][col]
  var header = _.pullAt(sheet, [0]);
  /* sheet has no header now */
  
  /* loop the rows */
  //sheet.forEach(function(row, idx) { console.log(idx, row); })
}



//console.log('Rows:')
//console.log(fileA.length)
//console.log(fileB.length)

//var finalSheet = fileA.concat(fileB)

//console.log('Final Sheet # rows:', finalSheet.length)
