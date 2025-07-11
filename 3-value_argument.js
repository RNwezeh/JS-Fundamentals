const argv = process.argv.slice(2);
// print process.argv
if (argv[0] === undefined) {
  console.log("No argument");
} else {
  console.log(argv[0]);
}
