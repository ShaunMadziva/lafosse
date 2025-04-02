const { ComputerPlayer } = require("./computerPlayer");
const { HumanPlayer } = require("./humanPlayer");

class Game {
  constructor() {
    this.human = null;
    this.computer = null;
  }

  getWinner(human, computer) {
    const humanChoice = human.getChoice();
    const computerChoice = computer.getChoice();
    let winner;

    // switch case instead of if-else ... faster more readable
    switch (humanChoice + "-" + computerChoice) {
      case "paper-rock":
      case "scissors-paper":
      case "rock-scissors":
        computer.addPoints();
        winner = computer;
        break;

      case "rock-paper":
      case "paper-scissors":
      case "scissors-rock":
        human.addPoints();
        winner = human;
        break;

      default:
        winner = "draw";
        break;
    }

    return winner;
  }
}
// Make the players
// Create instances of the HumanPlayer and ComputerPlayer classes
// and ready the game.
const human = new HumanPlayer("Human", 0);
const computer = new ComputerPlayer("Computer", 0);
const game = new Game();
game.human = human;
game.computer = computer;

// Play the game
game.human.setChoice("Scissors");
game.computer.getChoice();
const winner = game.getWinner(game.human, game.computer);

if (winner === "draw") {
  console.log("It's a draw!");
} else {
  console.log(winner.getName() + " wins!");
}
// Show the game outputs
console.log("Human Score: " + game.human.getScore());
console.log("Computer Score: " + game.computer.getScore());
console.log("Human Choice: " + game.human.getChoice());
console.log("Computer Choice: " + game.computer.getChoice());
console.log("Game Over!");

module.exports = {
  Game,
};
