const argv = process.argv.slice(2);

if (argv.length < 2) {
    console.log(`${argv[0] || "undefined"} is undefined`);
} else {
    console.log(`${argv[0]} is ${argv[1]}`);
}