const rps = (p1, p2) => {
    if (p1 == p2 | p2 == p1) {
        return "Draw!";
    } else if (p1 == 'rock' && p2 == 'scissors' || p1 == 'paper' && p2 == 'rock' || p1 == 'scissors' && p2 == 'paper') {
        return "Player 1 won!";
    } else {
        return "Player 2 won!";
    }
};

console.log(rps('rock', 'scissors')) // Return "Player 1 won!"
console.log(rps('scissors','rock')) // Return "Player 2 won!"

console.log(rps('scissors','rock')) // Return "Player 2 won!"
console.log(rps('paper','scissors')) // Return "Player 2 won!"
console.log(rps('rock','paper')) // Return "Player 2 won!"

console.log(rps('paper','paper')) // Return "Draw!"
console.log(rps('stone','stone')) // Return "Draw!"