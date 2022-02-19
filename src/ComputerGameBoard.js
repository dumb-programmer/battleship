import GameBoard from "./GameBoard";
import Ship from "./Ship";

class ComputerGameBoard {
  constructor() {
    this.gameBoard = GameBoard();
    this.init();
  }
  init() {
    let shipSize = 5;
    while (shipSize > 0) {
      let axis = Math.round(Math.random()) ? "x" : "y";
      let row = Math.round(Math.random() * 9);
      let col = Math.round(Math.random() * 9);
      let error = this.gameBoard.place(new Ship(shipSize), axis, row, col);
      while (error != 0) {
        let row = Math.round(Math.random() * 9);
        let col = Math.round(Math.random() * 9);
        error = this.gameBoard.place(new Ship(shipSize), axis, row, col);
      }
      shipSize--;
    }
  }

  getBoard() {
    return this.gameBoard;
  }
}

export default ComputerGameBoard;
