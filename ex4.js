const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getComputerChoice() {
    const choices = ['pedra', 'papel', 'tesoura'];
    const randomIndex = Math.floor(Math.random() * 3);  
    return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'Empate!';
    }

    if (
        (userChoice === 'pedra' && computerChoice === 'tesoura') ||
        (userChoice === 'tesoura' && computerChoice === 'papel') ||
        (userChoice === 'papel' && computerChoice === 'pedra'))
     {
        return 'Você ganhou!';
    }

    return 'O computador ganhou!';
}

function playGame() {
    rl.question('Escolha entre pedra, papel ou tesoura: ', (userChoice) => {
        
        userChoice = userChoice.toLowerCase();

        if (!['pedra', 'papel', 'tesoura'].includes(userChoice)) {
            console.log('Escolha inválida. Por favor, escolha entre "pedra", "papel" ou "tesoura".');
            return playGame();  
        }

                const computerChoice = getComputerChoice();
        console.log(`O computador escolheu: ${computerChoice}`);

        
        const result = determineWinner(userChoice, computerChoice);
        console.log(result);

        
        rl.question('Quer jogar novamente? (sim/não): ', (playAgain) => {
            if (playAgain.toLowerCase() === 'sim') {
                playGame();  
            } else {
                console.log('Obrigado por jogar!');
                rl.close();  
            }
        });
    });
}


playGame();
