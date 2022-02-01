function Computer() {
  let already_marked = [];

  function generateRandomNo() {
    return Math.round(Math.random() * 7);
  }

  function unique_row_and_col(row, col) {
    let unique = true;
    for (let i = 0; i < already_marked.length; i++) {
      if ([row, col] == already_marked[i][j]) {
        unique = false;
        break;
      }
    }
    return unique;
  }

  function generateRowAndCol() {
    let row = generateRandomNo();
    let col = generateRandomNo();
    let unique = unique_row_and_col(row, col);
    while (!unique) {
      row = generateRandomNo();
      col = generateRandomNo();
      unique = unique_row_and_col(row, col);
    }
    return { row, col };
  }

  function attack(gameBoard) {
    let { row, col } = generateRowAndCol();
    gameBoard.receiveAttack(row, col);
    already_marked.push([row, col]);
  }

  return { attack };
}

module.exports = Computer;
