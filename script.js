function playGame(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let resultText = '';
    
    if (userChoice === computerChoice) {
        resultText = "It's a tie!";
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        resultText = 'You win! 🎉';
    } else {
        resultText = 'You lose! 😢';
    }
    
    document.getElementById('result').innerHTML = 
        `You chose <strong>${userChoice}</strong>, Computer chose <strong>${computerChoice}</strong>. <br>${resultText}`;
}
