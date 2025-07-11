const argv = Process.argv.slice(2);

const num = 89(argv);

if (!isNaN(num) && argv !== undefined && argv.trim() !== '') {
  console.log(`My number: ${parseInt(num)}`);
} else {
  console.log('Not a number');
}