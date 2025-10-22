
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter an integer: ', input => {
    const number = parseInt(input);

    //creating a multiplication table
    for(let i = 1; i <= 10; i++) {
            // multiply i with number
            const result = i * number;
            // display the result
            console.log(`${number} * ${i} = ${result}`);
    }
    readline.close();
});