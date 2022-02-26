import Player from "./Player";
import PlayerGameBoardDOM from "./Player_GameBoard_DOM";

function Player_Form_DOM(game, Player_GameBoard_DOM) {
  function renderComponents() {
    const form = document.createElement("form");

    const label = document.createElement("label");
    label.innerHTML = "Enter Player Name : <br>";
    label.setAttribute("for", "name");

    const input = document.createElement("input");
    input.setAttribute("id", "name");
    input.setAttribute("type", "text");
    input.setAttribute("required", "");
    input.setAttribute("maxlength", "40");

    const btn = document.createElement("button");
    btn.innerText = "Submit";
    btn.setAttribute("id", "player-submit-btn");
    const br = document.createElement("br");

    label.appendChild(input);

    form.appendChild(label);
    form.appendChild(br);
    form.appendChild(btn);

    const container = document.createElement("div");
    container.classList.add("form-container");
    container.appendChild(form);

    const main = document.querySelector("#main");

    main.appendChild(container);
  }

  function addEventListeners() {
    const form = document.querySelector("form");
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const input = document.querySelector("input").value;
      game.setPlayer(new Player(input));
      Player_GameBoard_DOM.render();
    });
  }

  function render() {
    renderComponents();
    addEventListeners();
  }

  return { render };
}

export default Player_Form_DOM;
