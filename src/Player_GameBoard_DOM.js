import Ship from "./Ship";

function PlayerGameBoardDOM(playerBoard, gameDOM) {
  let shipNames = [
    "Carrier",
    "Battleship",
    "Destroyer",
    "Submarine",
    "Patrol Boat",
  ];
  let shipNo = 0;

  function clearScreen() {
    const main = document.querySelector("#main");
    main.innerHTML = "";
  }

  function renderComponents() {
    clearScreen();
    const flexContent = document.createElement("div");
    const gameBoard = document.createElement("div");
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        const box = document.createElement("div");
        box.classList.add("box");
        box.setAttribute("row", i);
        box.setAttribute("column", j);
        gameBoard.appendChild(box);
      }
    }
    gameBoard.classList.add("gameboard");
    flexContent.classList.add("flex-content");
    flexContent.appendChild(gameBoard);

    const content = document.createElement("div");
    content.classList.add("content");

    const p = document.createElement("p");
    p.textContent = "Place your ";
    const b = document.createElement("b");
    b.setAttribute("id", "ship-name");
    b.textContent = shipNames[shipNo];
    p.appendChild(b);

    const btn = document.createElement("button");
    btn.textContent = "Start Game";
    btn.setAttribute("disabled", "");
    btn.setAttribute("id", "start-game-btn");


    const select = document.createElement("select");
    select.name = "axis";
    const optionX = document.createElement("option");
    optionX.textContent = "X";
    optionX.value = "x";
    const optionY = document.createElement("option");
    optionY.textContent = "Y";
    optionY.value = "y";

    select.appendChild(optionX);
    select.appendChild(optionY);

    const label = document.createElement("label");
    label.textContent = "Axis : ";
    label.style.marginLeft = "10px";

    label.appendChild(select);

    content.appendChild(flexContent);
    content.appendChild(p);
    content.appendChild(btn);
    content.appendChild(label);

    const main = document.querySelector("#main");
    main.appendChild(content);
  }

  function makeGrid() {
    let boxesGrid = new Array(10).fill(0).map(() => new Array(10).fill(0));
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        boxesGrid[i][j] = document.querySelector(
          `div[row="${i}"][column="${j}"]`
        );
      }
    }
    return boxesGrid;
  }

  function addEventListeners() {
    let selectedBoxes = [];

    const boxes = document.querySelectorAll(".box");

    let boxesGrid = makeGrid();

    let currentshipSize = 5;

    function makeColorBlack() {
      this.classList.add("black");
      const axis = document.querySelector("select").value;
      let row = +this.getAttribute("row");
      let col = +this.getAttribute("column");
      if (axis == "x") {
        let length = col + currentshipSize;
        for (let i = col; i < length; i++) {
          if (!boxesGrid[row][length - 1]) {
            boxesGrid[row][col].classList.add("red");
          } else if (boxesGrid[row][i].classList[1] == "selected-box") {
            boxesGrid[row][col].classList.add("red");
          } else {
            boxesGrid[row][i].classList.add("black");
          }
        }
      } else {
        let length = row + currentshipSize;
        for (let i = row; i < length; i++) {
          if (!boxesGrid[length - 1]) {
            boxesGrid[row][col].classList.add("red");
          } else if (boxesGrid[i][col].classList[1] == "selected-box") {
            boxesGrid[row][col].classList.add("red");
          } else {
            boxesGrid[i][col].classList.add("black");
          }
        }
      }
    }

    function makeColorWhite() {
      let boxes = document.querySelectorAll(".box");
      boxes.forEach((box) => {
        box.classList.remove("black");
        box.classList.remove("red");
      });
    }

    function boxClickEvent() {
      const blackBoxes = document.querySelectorAll(`div[class="box black"]`);
      blackBoxes.forEach((box) => {
        if (blackBoxes.length == currentshipSize) {
          box.removeEventListener("mouseenter", makeColorBlack);
          box.removeEventListener("mouseleave", makeColorWhite);
          box.classList.add("selected-box");
          box.classList.remove("box");
        }
      });
      if (blackBoxes.length == currentshipSize) {
        const shipName = document.querySelector("#ship-name");
        shipNo++;
        shipName.textContent = shipNames[shipNo];
        const axis = document.querySelector("select").value;
        playerBoard.place(
          new Ship(currentshipSize),
          axis,
          +blackBoxes[0].getAttribute("row"),
          +blackBoxes[0].getAttribute("column")
        );

        currentshipSize--;

        if (currentshipSize == 0) {
          const p = document.querySelector("p");
          const content = document.querySelector(".content");
          content.removeChild(p);
          const label = document.querySelector("label");
          content.removeChild(label);
          boxes.forEach((box) => {
            box.removeEventListener("mouseenter", makeColorBlack);
            box.removeEventListener("mouseleave", makeColorWhite);
            box.removeEventListener("click", boxClickEvent);
            box.style.cursor = "auto";
          });

          const btn = document.querySelector("#start-game-btn");
          btn.removeAttribute("disabled");
          btn.addEventListener("click", () => {
            const main = document.querySelector("#main");
            main.innerHTML = "";
            gameDOM.render();
          });
        }
      }
    }

    boxes.forEach((box) => {
      box.addEventListener("mouseenter", makeColorBlack);
      box.addEventListener("mouseleave", makeColorWhite);
      box.addEventListener("click", boxClickEvent);
    });
  }

  function render() {
    renderComponents();
    addEventListeners();
  }

  return { render };
}

export default PlayerGameBoardDOM;
