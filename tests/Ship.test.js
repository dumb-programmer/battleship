const Ship = require("../src/Ship");

describe("Ship Factory Function", () => {
  const ship = new Ship(5);

  test("length state", () => {
    expect(ship.length).toBe(5);
  });

  test("sunk state", () => {
    expect(ship.sunk).toBe(false);
  });

  test("hit function", () => {
    ship.hit(3);
    expect(ship.ship).toEqual(["", "", "", "*", ""]);
  });

  test("isSunck function", () => {
    expect(ship.isSunk()).toBe(false);
  });

  test("size function", () => {
    expect(ship.size()).toBe(5);
  });
});
