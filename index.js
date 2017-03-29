var argv = require('minimist')(process.argv.slice(2))
var path = require('path')
var readFile = require('./lib/readFile')

require('./lib/logo')()

if (!argv.c || !argv._.length) throw Error('-c <column> param and filenames required.')

// TODO.. parse from CLI

var fileA = readFile('test1.xls')
var fileB = readFile('test2.xls')

console.log('Rows:')
console.log(fileA.length)
console.log(fileB.length)

var finalSheet = fileA.concat(fileB)

console.log('Final Sheet # rows:', finalSheet.length)

//XLSX.writeFile(workbook, 'out.xlsx');
