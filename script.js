let cells = document.querySelectorAll(".cell");
let resetBtn = document.querySelector("button");
let result = document.querySelector("p");

let turn = true;
let gameOver = false;
let moves = 0;

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];

const checkWin = (winPatterns) => {
  for (pattern of winPatterns) {
    const cell1 = cells[pattern[0]].textContent;
    const cell2 = cells[pattern[1]].textContent;
    const cell3 = cells[pattern[2]].textContent;

    if (
      cell1 !== "" &&
      cell1 === cell2 &&
      cell2 === cell3
    ) {
      return cell1;
    }
  }
  return null;
};

cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    if (gameOver) {
      return;
    }
    if (cell.textContent === "") {
      moves++;

      if (turn) {
        cell.textContent = "X";
        turn = false;
      } else {
        cell.textContent = "O";
        turn = true;
      }
    }
    const winner = checkWin(winPatterns);
    if (moves === 9 && winner === null) {
      result.textContent = "Draw!";
    }
    if (winner) {
      result.textContent = `Player ${winner} wins!`;
      gameOver = true;
    }
  });
});

resetBtn.addEventListener("click", () => {
  cells.forEach((cell) => {
    cell.textContent = "";
  });
  turn = true;
  gameOver = false;
  moves = 0;
  result.textContent = "";
});
