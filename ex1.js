const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculateSum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (isNaN(numbers[i]) || numbers[i] === '') {
            console.log('Há valores inválidos, por favor digite apenas números.');
            rl.close();  
            return;
        } else {
            sum += Number(numbers[i]);
        }
    }

    console.log('A soma dos números é: ' + sum);
    rl.close(); 
}


rl.question('Insira os números separados por vírgula: ', (input) => {
    let numbers = input.split(',').map(item => item.trim());
    calculateSum(numbers);
});
