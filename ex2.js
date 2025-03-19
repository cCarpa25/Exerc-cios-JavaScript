const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isPrime(number) {    
    if (isNaN(number) || number <= 1) {
        return 'Erro: Por favor, insira um número válido maior que 1.';
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false; 
        }
    }
    return true;  
}


rl.question('Digite um número para verificar se é primo: ', (input) => {
    
    let number = parseInt(input);
    const result = isPrime(number);
    if (result === true) {
        console.log(`${number} é um número primo!`);
    } else if (result === false) {
        console.log(`${number} não é um número primo.`);
    } else {
        console.log(result);  
    }
    
    rl.close(); 
});
