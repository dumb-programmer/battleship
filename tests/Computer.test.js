const GameBoard = require("../src/GameBoard.js");
const Ship = require("../src/Ship.js");
const Computer = require("../src/Computer.js");

describe("Computer Factory Function", () => {
    const c1 = Computer();
    const playerGameBoard = GameBoard();
    const s5 = new Ship(5);
    const s4 = new Ship(4);
    const s3 = new Ship(3);
    const s2 = new Ship(2);
    const s1 = new Ship(1);
  
    playerGameBoard.place(s5, "x", 0, 0);
    playerGameBoard.place(s4, "y", 4, 0);
    playerGameBoard.place(s3, "x", 2, 5);
    playerGameBoard.place(s2, "x", 5, 5);
    playerGameBoard.place(s1, "x", 7, 7);

    test("Computer can attack the player board at random", () => {
        c1.attack(playerGameBoard);
    })
});
