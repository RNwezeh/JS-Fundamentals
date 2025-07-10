const { argv } = require('node:process');
// print process.argv
if (args[0] === undefined) {
  console.log("No argument");
} else {
  console.log(args[0]);
}