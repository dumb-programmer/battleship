function GameBoard() {
  board = [
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
  ];
  ships = {};
  ship_no = 1;

  function getShipMarker(shipSize) {
    let shipMarker = "";
    switch (shipSize) {
      case 5:
        shipMarker = "s5";
        break;
      case 4:
        shipMarker = "s4";
        break;
      case 3:
        shipMarker = "s3";
        break;
      case 2:
        shipMarker = "s2";
        break;
      case 1:
        shipMarker = "s1";
        break;
    }
    return shipMarker;
  }

  function place(ship, axis, row_start, col_start) {
    const shipSize = ship.size();
    const shipMarker = getShipMarker(shipSize);
    if (axis === "x") {
      const endIdx = col_start + shipSize - 1;
      if (endIdx < board.length) {
        ships[shipMarker] = ship;
        let shipIndex = 0;
        for (let j = col_start; j <= endIdx; j++) {
          board[row_start][j] = shipMarker + "_" + shipIndex;
          shipIndex++;
        }
      } else {
        return -1;
      }
    } else {
      const endIdx = row_start + shipSize - 1;
      if (endIdx < board.length) {
        ships[shipMarker] = ship;
        let shipIndex = 0;
        for (let i = row_start; i <= endIdx; i++) {
          board[i][col_start] = shipMarker + "_" + shipIndex;
          shipIndex++;
        }
      } else {
        return -1;
      }
    }
  }

  function receiveAttack(i, j) {
    const shipMarker = board[i][j];
    const [shipIdentifier, shipIndex] = shipMarker.split("_");
    if (board[i][j].startsWith("s")) {
      board[i][j] = "*";
      const ship = ships[shipIdentifier];
      ship.hit(shipIndex);
    } else {
      board[i][j] = "!";
    }
  }

  function allSunk() {
    let shipsSunkStates = [];
    for (let ship in ships) {
      shipsSunkStates.push(ships[ship].sunk);
    }
    return shipsSunkStates.every((ship) => ship);
  }

  function getBoard() {
    return board;
  }

  return { place, receiveAttack, getBoard, allSunk };
}

module.exports = GameBoard;
