class Player {
  constructor(name) {
    this.name = name;
  }
  attack(gameBoard, row, col) {
    gameBoard.receiveAttack(row, col);
  }
  getName() {
    return this.name;
  }
}

module.exports = Player;
