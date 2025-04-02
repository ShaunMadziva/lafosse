const { Player } = require("./player.js");

class HumanPlayer extends Player {
  constructor(name, score, choice) {
    super(name, score);
    this.choice = choice;
    this.score = 0;
  }

  // Method to set the player's choice
  setChoice(choice) {
    choice = choice.toLowerCase();
    console.log("!!!", choice);
    // Validate the choice
    const validChoices = [
      "rock",
      "paper",
      "scissors",
      //   "Rock",
      //   "Paper",
      //   "Scissors",
    ];
    if (!validChoices.includes(choice)) {
      throw new Error(
        `Invalid choice! ${choice}. Please choose rock, paper, or scissors`
      );
    }
    // Set the player's choice
    this.choice = choice;
  }

  getChoice() {
    return this.choice;
  }

  addPoints() {
    this.score += 1; // Increment the score
  }
}

module.exports = {
  HumanPlayer,
};
