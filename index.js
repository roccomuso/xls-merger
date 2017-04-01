const argv = require('minimist')(process.argv.slice(2))
const path = require('path')
const _ = require('lodash')
const isDate = require('./lib/util').isDate
const error = require('./lib/util').error
const readXls = require('./lib/readXls')
const writeXls = require('./lib/writeXls')

require('./lib/logo')()
var rawSheet = []

if (!argv.c || !argv._.length) error('-c <column> param and filenames required.')
if (argv._.length === 1) error('Please provide 2 files at least.')

var oColumn = argv.c
var oIndex = null

var files = {}
argv._.forEach(function(file){
  files[file] = readXls(file)
})
console.log(Object.keys(files).length, 'files fetched')

var headers = {}

for (var sheetName in files){
  var sheet = files[sheetName]
  // sheet[row][col]
  //console.log(sheet)
  var header = _.flatten(_.pullAt(sheet, 0))
  headers[sheetName] = header
  oIndex = header.indexOf(oColumn)
  /* sheet has no header now */
  rawSheet = rawSheet.concat(sheet)
  /* loop the rows */
  //rawSheet.forEach(function(row, idx) { console.log(idx, row); })
}

/* check wether headers are equal */
var header = null;

for (var sheetName in headers){
  header = header || headers[sheetName]
  if (!_.isEqual(headers[sheetName], header)) error('Files headers are not equal. Remember, Headers are case-sensitive!')
}

/* check if the column exists */
if (oIndex === -1) error('Column not found. NB. the field is case-sensitive')

/* order by the given Column */
var orderedSheet = _.sortBy(rawSheet, function(row){
  if (isDate(row[oIndex]))
    return new Date(row[oIndex])
  else return row[oIndex]
})

//console.log(orderedSheet)

/* add the header to the orderedSheet */
orderedSheet.unshift(header)


/* write to file */
console.log('Writing to file', orderedSheet.length, 'rows')
writeXls(orderedSheet, 'output.xls')
