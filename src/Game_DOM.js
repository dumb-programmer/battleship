function GameDOM(game) {
  function renderPlayerGameBoard() {
    let board = game.getPlayerBoard().getBoard();
    const playerBoard = document.querySelector("#playerboard");

    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board.length; j++) {
        const box = document.createElement("div");
        box.classList.add("box");
        box.setAttribute("row", i);
        box.setAttribute("column", j);
        if (board[i][j].charAt(0) == "s") {
          box.classList.add("black");
        } else if (board[i][j] == "*") {
          box.classList.add("hit");
        } else if (board[i][j] == "!") {
          box.classList.add("miss");
        }
        playerBoard.appendChild(box);
      }
    }
  }

  function renderComputerGameBoard() {
    let board = game.getComputerBoard().getBoard().getBoard();
    const computerBoard = document.querySelector("#computerboard");

    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board.length; j++) {
        const box = document.createElement("div");
        box.classList.add("box");
        box.setAttribute("row", i);
        box.setAttribute("column", j);
        if (board[i][j] == "*") {
          box.classList.add("hit");
        } else if (board[i][j] == "!") {
          box.classList.add("miss");
        }
        computerBoard.appendChild(box);
      }
    }
  }

  function playerBoardReRender() {
    const playerBoard = document.querySelector("#playerboard");
    playerBoard.innerHTML = "";
    renderPlayerGameBoard();
  }

  function computerPlay() {
    game.computer.attack(game.getPlayerBoard());
    playerBoardReRender();
  }

  function computerBoardReRender() {
    const computerBoard = document.querySelector("#computerboard");
    computerBoard.innerHTML = "";
    renderComputerGameBoard();
    addEventListeners();
  }

  function announceWinner() {
    const main = document.querySelector("#main");
    main.innerHTML = "";
    const h1 = document.createElement("h1");
    h1.classList.add("announcement");
    h1.innerText = `Game Over! ${game.getWinner()} won`;
    main.appendChild(h1);
  }

  function playerClickEvent(event) {
    let row = +event.target.getAttribute("row");
    let col = +event.target.getAttribute("column");
    let computerBoard = game.getComputerBoard().getBoard();
    computerBoard.receiveAttack(row, col);
    let win = game.win();
    if (!win) {
      setTimeout(computerPlay, 100);
      event.target.removeEventListener("click", playerClickEvent);
      computerBoardReRender();
    } else {
      announceWinner();
    }
  }

  function addEventListeners() {
    const boxes = document.querySelectorAll("#computerboard>.box");
    boxes.forEach((box) => {
      if (box.classList[1] != "hit" && box.classList[1] != "miss") {
        box.addEventListener("click", playerClickEvent);
      }
    });
  }

  function render() {
    const playerBoard = document.createElement("div");
    playerBoard.classList.add("gameboard");
    playerBoard.setAttribute("id", "playerboard");

    const computerBoard = document.createElement("div");
    computerBoard.classList.add("gameboard");
    computerBoard.setAttribute("id", "computerboard");

    const gameBoards = document.createElement("div");
    gameBoards.classList.add("gameboards");

    gameBoards.appendChild(playerBoard);
    gameBoards.appendChild(computerBoard);

    const main = document.querySelector("#main");

    main.appendChild(gameBoards);
    renderPlayerGameBoard();
    renderComputerGameBoard();

    addEventListeners();
  }

  return { render };
}

export default GameDOM;
