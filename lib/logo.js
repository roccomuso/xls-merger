var chalk = require('chalk')
var pkg = require('../package.json')
var figlet = require('figlet')

module.exports = function () {
  var logo = figlet.textSync('    '+pkg.name, {
    font: 'Standard'
  })
  var credits = chalk.yellow('     === Merge XLS files and order by column (' + chalk.red('xls-merger v' + pkg.version) + ') ===\n') + chalk.yellow('     === Made with', chalk.red('\u2764'), 'for', chalk.blue('Christine'), ' ===')
  console.log(chalk.magenta(logo) + '\n' + credits + '\n\n') // then print logo con console

}

