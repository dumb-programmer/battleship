const GameBoard = require("../src/GameBoard");
const Ship = require("../src/Ship");

describe("GameBoard Factory Function", () => {
  const gameBoard = GameBoard();

  test("Place ship on x-axis", () => {
    gameBoard.place(new Ship(5), "x", 0, 0);
    expect(gameBoard.getBoard()).toEqual([
      ["s5_0", "s5_1", "s5_2", "s5_3", "s5_4", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
    ]);
  });

  test("Place ship on y-axis", () => {
    gameBoard.place(new Ship(4), "y", 1, 0);
    expect(gameBoard.getBoard()).toEqual([
      ["s5_0", "s5_1", "s5_2", "s5_3", "s5_4", "", "", ""],
      ["s4_0", "", "", "", "", "", "", ""],
      ["s4_1", "", "", "", "", "", "", ""],
      ["s4_2", "", "", "", "", "", "", ""],
      ["s4_3", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
    ]);
  });

  test("The ship can be placed starting from another index", () => {
    gameBoard.place(new Ship(3), "y", 1, 1);
    expect(gameBoard.getBoard()).toEqual([
      ["s5_0", "s5_1", "s5_2", "s5_3", "s5_4", "", "", ""],
      ["s4_0", "s3_0", "", "", "", "", "", ""],
      ["s4_1", "s3_1", "", "", "", "", "", ""],
      ["s4_2", "s3_2", "", "", "", "", "", ""],
      ["s4_3", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
    ]);
  });

  test("We can attack on a ship", () => {
    gameBoard.receiveAttack(0, 0);
    expect(gameBoard.getBoard()).toEqual([
      ["*", "s5_1", "s5_2", "s5_3", "s5_4", "", "", ""],
      ["s4_0", "s3_0", "", "", "", "", "", ""],
      ["s4_1", "s3_1", "", "", "", "", "", ""],
      ["s4_2", "s3_2", "", "", "", "", "", ""],
      ["s4_3", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
    ]);
  });

  test("Missed attack is also marked", () => {
    gameBoard.receiveAttack(7, 7);
    expect(gameBoard.getBoard()).toEqual([
      ["*", "s5_1", "s5_2", "s5_3", "s5_4", "", "", ""],
      ["s4_0", "s3_0", "", "", "", "", "", ""],
      ["s4_1", "s3_1", "", "", "", "", "", ""],
      ["s4_2", "s3_2", "", "", "", "", "", ""],
      ["s4_3", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "!"],
    ]);
  });

  test("Game board reports whether all the ships have sunk", () => {
    expect(gameBoard.allSunck()).toBe(false);
  });
});
