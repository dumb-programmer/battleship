import hitSound from "./zapsplat_sound_design_cinematic_whoosh_into_impact_missle_like_explosion_001_29904.mp3";
import missSound from "./zapsplat_warfare_missile_hit_water_bomb_splash_large_003_43731.mp3";

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

  function playSoundEffect(hit_state) {
    const audio = document.createElement("audio");
    audio.style.display = "none";
    if (hit_state == "hit") {
      audio.src = hitSound;
    } else {
      audio.src = missSound;
    }
    audio.play();
  }

  function playerBoardReRender() {
    const playerBoard = document.querySelector("#playerboard");
    playerBoard.innerHTML = "";
    renderPlayerGameBoard();
  }

  function computerPlay() {
    const hitState = game.computer.attack(game.getPlayerBoard());
    playSoundEffect(hitState);
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
    const hitState = computerBoard.receiveAttack(row, col);
    playSoundEffect(hitState);
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
    console.log(playerBoard);
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
