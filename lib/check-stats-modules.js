'use strict'

const npm = require('npm-stat-api')
const moment = require('moment')
const yargs = require('yargs')
const pkg = require('../package.json')
const args = yargs.argv

/**
 * run function
 *
 * @param  void
 * @return void
 */
const run = () => {
   // 'help' is top priority option
   if (args.h) {
      show_help()
   } else if (args.v) {
      console.log(pkg.version)
   } else {
      const rank = show_stats()
   }
}

/**
 * show help
 *
 * @param  {String} help message if specifying a message
 * @return {String} full help message
 */
const show_help = (text) => {
   if (text) console.log(text);
   yargs.showHelp();
}

/**
 * show stats about modules
 *
 * @param  void
 * @return void
 */
const show_stats = () => {
   const from_check = args.f && args.f.match(/\d{4}-\d{1,2}-\d{1,2}/)
   
   const from = from_check && from_check[0] || moment().add(-1, 'days').format('YYYY-MM-DD')
   const today = moment().format('YYYY-MM-DD')
   
   for (let mod of args._) {
      if (from_check === null) show_help('Please enter the date correctly. \n')
      npm.stat(mod, from, today, (err, res) => {
         console.log(JSON.stringify(res) + "\n")
      })
   }
}

module.exports = {
   run: run
}
