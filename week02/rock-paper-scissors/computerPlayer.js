const { Player } = require("./player.js");

//console.log(Player);

class ComputerPlayer extends Player {
  constructor(name, score) {
    super(name, score);
    this.choice = null;
    this.score = 0;
  }

  // Method to randomly select a choice
  getChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    this.choice = choices[randomIndex]; // Set the computer's choice
    return this.choice;
  }

  addPoints() {
    this.score += 1;
  }
}

module.exports = {
  ComputerPlayer,
};
