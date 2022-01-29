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

  function place(ship, axis, start, row_or_col_idx) {
    const shipSize = ship.size();
    const endIdx = start + shipSize;
    if (endIdx < board.length) {
      const shipMarker = getShipMarker(shipSize);
      ships[shipMarker] = ship;
      let shipIndex = 0;
      if (axis == "x") {
        for (let j = start; j < endIdx; j++) {
          board[row_or_col_idx][j] = shipMarker + "_" + shipIndex;
          shipIndex++;
        }
      } else {
        for (let i = start; i < endIdx; i++) {
          board[i][row_or_col_idx] = shipMarker + "_" + shipIndex;
          shipIndex++;
        }
      }
    }
  }

  function receiveAttack(i, j) {
    const shipMarker = board[i][j];
    const [shipIdentifier, shipIndex] = shipMarker.split("_");
    if (board[i][j].startsWith('s')) {
      board[i][j] = "*";
      const ship = ships[shipIdentifier];
      ship.hit(shipIndex);
    } else {
      board[i][j] = "!";
    }
  }

  function allSunk(){
    let shipsSunkStates = [];
    for(let ship in ships){
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
