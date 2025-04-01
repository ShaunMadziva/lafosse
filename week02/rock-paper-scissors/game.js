// This class represents the rock-paper-scissors game.
// It manages the game logic and player interactions.
// It imports the Player class and the ComputerPlayer class.
const { ComputerPlayer } = require("./computerPlayer");
const { HumanPlayer } = require("./humanPlayer");
// The Game class is the main class for the rock-paper-scissors game.
// It manages the game flow, including player choices and determining the winner.
class Game {
  constructor() {
    this.human = null;
    this.computer = null;
  }

  getWinner(human, computer) {
    let winner;
    if (
      (human.getChoice() === "rock" && computer.getChoice() === "paper") ||
      (human.getChoice() === "paper" && computer.getChoice() === "scissors") ||
      (human.getChoice() === "scissors" && computer.getChoice() === "rock")
    ) {
      computer.addPoints();
      winner = computer;
    } else if (
      (computer.getChoice() === "rock" && human.getChoice() === "paper") ||
      (computer.getChoice() === "paper" && human.getChoice() === "scissors") ||
      (computer.getChoice() === "scissors" && human.getChoice() === "rock")
    ) {
      human.addPoints();
      winner = human;
    } else {
      winner = "draw";
    }
    return winner;
  }
}

//
const human = new HumanPlayer("Human", 0);
const computer = new ComputerPlayer("Computer", 0);
const game = new Game();
game.human = human;
game.computer = computer;

//play the game
game.human.setChoice("scissors");
game.computer.getChoice();
const winner = game.getWinner(game.human, game.computer);

if (winner === "draw") {
  console.log("It's a draw!");
} else {
  console.log(winner.getName() + " wins!");
}
console.log("Human Score: " + game.human.getScore());
console.log("Computer Score: " + game.computer.getScore());
console.log("Human Choice: " + game.human.getChoice());
console.log("Computer Choice: " + game.computer.getChoice());
console.log("Game Over!");

module.exports = {
  Game,
};
