import GameBoard from "./GameBoard";

class Game {
  constructor() {
    this.playerGameBoard = GameBoard();
    this.computerGameBoard = GameBoard();
  }

  getPlayerBoard() {
    return this.playerGameBoard;
  }

  getComputerBoard() {
    return this.computerGameBoard;
  }
}

export default Game;
