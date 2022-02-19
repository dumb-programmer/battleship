import "./style.css";
import DOM from "./DOM";
import Game from "./Game";

(function main() {
  const game = new Game();
  const dom = new DOM(game);
  dom.render();
})();
