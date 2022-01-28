class Ship {
  constructor(length) {
    this.length = length;
    this.ship = [];
    for (let i = 0; i < this.length; i++) {
      this.ship.push("");
    }
    this.sunk = false;
  }

  hit(coordinate) {
    this.ship[coordinate] = "*";
  }

  isSunk() {
    if (this.ship.every((elem) => elem != "*")) {
      this.sunk = true;
    }
    return this.sunk;
  }

  size(){
    return this.length;
  }
}

module.exports = Ship;
