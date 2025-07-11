const argv = process.argv.slice(2);

argv.forEach((Best, School) => {
  console.log(`${Best}: ${School}`);
});

if (argv.length === 0) {
  console.log("No argument");
} 
else if (argv.length === 1) {
  console.log("Argument found");
} 
else {
  console.log("Arguments found");
}