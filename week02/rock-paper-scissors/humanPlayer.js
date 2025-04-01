const { Player } = require("./player.js");

class HumanPlayer extends Player {
  constructor(name, score, choice) {
    super(name, score);
    this.choice = choice; // Initialize the player's choice
  }

  // Method to set the player's choice
  setChoice(choice) {
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
        "Invalid choice! Please choose rock, paper, or scissors."
      );
    }
    // Set the player's choice
    this.choice = choice;
  }
  // Method to get the player's choice
  getChoice() {
    return this.choice;
  }

  // Method to add points to the player's score
  addPoints() {
    this.score += 1; // Increment the score
  }
}

module.exports = {
  HumanPlayer,
};
