import GameBoard from "../src/GameBoard";
import Ship from "../src/Ship";

describe("GameBoard Factory Function", () => {
  const gameBoard = GameBoard();

  test("Place ship on x-axis", () => {
    gameBoard.place(new Ship(5), "x", 0, 0);
    expect(gameBoard.getBoard()).toEqual([
      ["s5_0", "s5_1", "s5_2", "s5_3", "s5_4", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
    ]);
  });

  test("Place ship on y-axis", () => {
    gameBoard.place(new Ship(4), "y", 1, 0);
    expect(gameBoard.getBoard()).toEqual([
      ["s5_0", "s5_1", "s5_2", "s5_3", "s5_4", "", "", "", "", ""],
      ["s4_0", "", "", "", "", "", "", "", "", ""],
      ["s4_1", "", "", "", "", "", "", "", "", ""],
      ["s4_2", "", "", "", "", "", "", "", "", ""],
      ["s4_3", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
    ]);
  });

  test("The ship can be placed starting from another index", () => {
    gameBoard.place(new Ship(3), "y", 1, 1);
    expect(gameBoard.getBoard()).toEqual([
      ["s5_0", "s5_1", "s5_2", "s5_3", "s5_4", "", "", "", "", ""],
      ["s4_0", "s3_0", "", "", "", "", "", "", "", ""],
      ["s4_1", "s3_1", "", "", "", "", "", "", "", ""],
      ["s4_2", "s3_2", "", "", "", "", "", "", "", ""],
      ["s4_3", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
    ]);
  });

  test("If we can't place a ship it throws an exception", () => {
    expect(gameBoard.place(new Ship(3), "x", 5, 10)).toBe(-1);
  });

  test("We can attack on a ship", () => {
    gameBoard.receiveAttack(0, 0);
    expect(gameBoard.getBoard()).toEqual([
      ["*", "s5_1", "s5_2", "s5_3", "s5_4", "", "", "", "", ""],
      ["s4_0", "s3_0", "", "", "", "", "", "", "", ""],
      ["s4_1", "s3_1", "", "", "", "", "", "", "", ""],
      ["s4_2", "s3_2", "", "", "", "", "", "", "", ""],
      ["s4_3", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
    ]);
  });

  test("Missed attack is also marked", () => {
    gameBoard.receiveAttack(9, 9);
    expect(gameBoard.getBoard()).toEqual([
      ["*", "s5_1", "s5_2", "s5_3", "s5_4", "", "", "", "", ""],
      ["s4_0", "s3_0", "", "", "", "", "", "", "", ""],
      ["s4_1", "s3_1", "", "", "", "", "", "", "", ""],
      ["s4_2", "s3_2", "", "", "", "", "", "", "", ""],
      ["s4_3", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", "!"],
    ]);
  });

  test("Game board reports whether all the ships have sunk", () => {
    expect(gameBoard.allSunk()).toBe(false);

    gameBoard.receiveAttack(0, 1);
    gameBoard.receiveAttack(0, 2);
    gameBoard.receiveAttack(0, 3);
    gameBoard.receiveAttack(0, 4);

    gameBoard.receiveAttack(1, 0);
    gameBoard.receiveAttack(2, 0);
    gameBoard.receiveAttack(3, 0);
    gameBoard.receiveAttack(4, 0);

    gameBoard.receiveAttack(1, 1);
    gameBoard.receiveAttack(2, 1);
    gameBoard.receiveAttack(3, 1);

    expect(gameBoard.allSunk()).toBe(true);
  });
});
