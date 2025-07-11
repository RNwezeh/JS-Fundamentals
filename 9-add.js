function add(a, b) {
  console.log(a + b);
}

const firstArg = parseInt(process.argv[2], 10);
const secondArg = parseInt(process.argv[3], 10);

add(firstArg, secondArg);