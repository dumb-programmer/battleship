import PlayerGameBoardDOM from "./Player_GameBoard_DOM";

class DOM {
  constructor(playerBoard){
    this.playerBoard = playerBoard;
  }
  render() {
    let playerGameBoardDom = PlayerGameBoardDOM(this.playerBoard);
    playerGameBoardDom.render();
  }
}

export default DOM;