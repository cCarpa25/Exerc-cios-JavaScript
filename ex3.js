//Pede input no Node
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isPalindrome(str) {
    //Coloca todas as letras inseridas em minúsculo
    str = str.replace(/\s+/g, '').toLowerCase();

    //Verifica a string de trás pra frente
    let reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}
//Criando a função Input para não precisar rodar o script novamente
function askForInput() {
    rl.question('Digite uma palavra ou frase para verificar se é um palíndromo (ou "sair" para encerrar): ', (input) => {
        if (input.toLowerCase() === 'sair') {
            console.log('Programa encerrado.');
            rl.close(); 
            return;
        }
        if (isPalindrome(input)) {
        console.log(`'${input}' É um palíndromo!'`);
    } else {
        console.log(`'${input}' Não é um palíndromo.'`);
    }

    askForInput(); 
});

}
//Chama novamente a função Input para o usuário sem precisar rodar o script novamente
askForInput();