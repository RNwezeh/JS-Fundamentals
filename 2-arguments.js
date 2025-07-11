const argv = process.argv.slice(2);

argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});
if (argv.length === 0) {
  console.log("No argument");
} else if (argv.length === 1) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}