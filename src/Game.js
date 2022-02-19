import GameBoard from "./GameBoard";
import ComputerGameBoard from "./ComputerGameBoard";
import Player from "./Player";
import Computer from "./Computer";

class Game {
  constructor() {
    this.player = new Player("Test");
    this.playerGameBoard = GameBoard();
    this.computer = new Computer();
    this.computerGameBoard = new ComputerGameBoard();
    this.winner = "";
  }

  win() {
    let computerWin = this.playerGameBoard.allSunk();
    let playerWin = this.computerGameBoard.getBoard().allSunk();
    if (computerWin) {
      this.winner = "Computer";
      return 1;
    } else if (playerWin) {
      this.winner = this.player.getName();
      return 1;
    } else {
      return 0;
    }
  }

  getWinner() {
    return this.winner;
  }

  getPlayerBoard() {
    return this.playerGameBoard;
  }

  getComputerBoard() {
    return this.computerGameBoard;
  }
}

export default Game;
