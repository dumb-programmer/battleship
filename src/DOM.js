import PlayerGameBoardDOM from "./Player_GameBoard_DOM";
import GameDOM from "./Game_DOM";

class DOM {
  constructor(game) {
    this.game = game;
  }
  render() {
    let gameDOM = GameDOM(this.game);
    let playerGameBoardDom = PlayerGameBoardDOM(this.game.getPlayerBoard(),gameDOM);
    playerGameBoardDom.render();
  }
}

export default DOM;
