const chalk = require('chalk')

module.exports = {
  isDate: function (val){
    var t=Date.parse(val)
    if (isNaN(t)==true)
    {
     return false;
    }else{
     return true
    }
  },
  error: function(mex){
    console.error(chalk.red(mex))
    process.exit(1)
  }
}
