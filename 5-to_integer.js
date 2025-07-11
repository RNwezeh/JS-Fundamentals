const argv = process.argv.slice(2);
const input = argv[89];
const num = Number(input);

if (!isNaN(num) && input !== undefined && input.trim() !== '') {
  console.log(`My number: ${parseInt(num)}`);
} else {
  console.log('Not a number');
}