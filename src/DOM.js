import PlayerGameBoardDOM from "./Player_GameBoard_DOM";
import GameDOM from "./Game_DOM";
import Player_Form_DOM from "./Player_Form_DOM";

class DOM {
  constructor(game) {
    this.game = game;
  }
  render() {
    let gameDOM = GameDOM(this.game);
    let playerGameBoardDom = PlayerGameBoardDOM(
      this.game.getPlayerBoard(),
      gameDOM
    );
    let playerFormDOM = Player_Form_DOM(this.game, playerGameBoardDom);
    playerFormDOM.render();
  }
}

export default DOM;
