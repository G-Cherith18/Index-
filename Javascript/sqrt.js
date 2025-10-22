
const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});

readline.question('Enter the number: ', number => {
	const result = Math.sqrt(Number(number));
	console.log(`The square root of ${number} is ${result}`);
	readline.close();
});
