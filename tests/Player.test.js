const GameBoard = require("../src/GameBoard.js");
const Ship = require("../src/Ship.js");
const Player = require("../src/Player.js");

describe("Player Factory Function", () => {
  const p1 = new Player("Josh");
  const compGameBoard = GameBoard();
  const s5 = new Ship(5);
  const s4 = new Ship(4);
  const s3 = new Ship(3);
  const s2 = new Ship(2);
  const s1 = new Ship(1);

  compGameBoard.place(s5, "x", 0, 0);
  compGameBoard.place(s4, "y", 4, 0);
  compGameBoard.place(s3, "x", 2, 5);
  compGameBoard.place(s2, "x", 5, 5);
  compGameBoard.place(s1, "x", 7, 7);

  test("Player can attack the enemy board", () => {
    p1.attack(compGameBoard, 7, 7);
    expect(compGameBoard.getBoard()).toEqual([
      ["s5_0", "s5_1", "s5_2", "s5_3", "s5_4", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "s3_0", "s3_1", "s3_2"],
      ["", "", "", "", "", "", "", ""],
      ["s4_0", "", "", "", "", "", "", ""],
      ["s4_1", "", "", "", "", "s2_0", "s2_1", ""],
      ["s4_2", "", "", "", "", "", "", ""],
      ["s4_3", "", "", "", "", "", "", "*"],
    ]);
  });
});
