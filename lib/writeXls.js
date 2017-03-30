var XLSX = require('xlsx');


module.exports = function(aoa){
  // TO TEST ...
  var wb = aoa_to_workbook(aoa); // wb will be a workbook with one sheet
  XLSX.writeFile(wb, "test.xls"); // save to test.xls

}

function sheet_to_workbook(sheet/*:Worksheet*/, opts)/*:Workbook*/ {
	var n = opts && opts.sheet ? opts.sheet : "Sheet1";
	var sheets = {}; sheets[n] = sheet;
	return { SheetNames: [n], Sheets: sheets };
}

function aoa_to_workbook(data/*:Array<Array<any> >*/, opts)/*:Workbook*/ {
	return sheet_to_workbook(XLSX.utils.aoa_to_sheet(data, opts), opts);
}


//var output = XLSX.write(wb, {bookType:"xlsx", type:"buffer"});
//XLSX.writeFile(workbook, 'newfile.xlsx');
