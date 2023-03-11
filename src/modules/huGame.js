const huGame = () => {
    const cellList = document.querySelectorAll('.cell');
    const reset = document.querySelector('.reset');
    const resultModule = document.querySelector('.result-module');
    const result = document.querySelector(".result");
    const huMark = "O",
    aiMark = "X";
    let turnCount = 0;
    let board = [...Array(9).keys()];

    const resetGame = () => {
        board = [...Array(9).keys()];
        cellList.forEach((cell) => {
          cell.innerHTML = "";
          cell.classList.remove("not-allow");
          cell.classList.remove("x");
          cell.classList.remove("o");
        });
        resultModule.style.display = 'none'
        result.innerHTML = "";
        turnCount = 0;
        return { board };
      };
      reset.addEventListener("click", resetGame);
      resetGame();


      let player1Turn = true;
      const handleClick = (e) => {
        turnCount += 1;
        const cell = e.target;
        const id = cell.dataset.id;
        board[+id] = player1Turn ? aiMark : huMark;
        cell.classList.add("not-allow");
        if (player1Turn) {
          cell.classList.add("x");
        }
        if (!player1Turn) {
          cell.classList.add("o");
        }
        if (player1Turn) {
          cell.innerHTML = aiMark;
        } else if (!player1Turn) {
          cell.innerHTML = huMark;
        }
        switchTurn();
        if (turnCount >= 9) {
          resultModule.style.display = 'flex';
          result.innerHTML = "DRAW";
          setTimeout(resetGame, 1500);
          return;
        }
        if (checkWinner(board, aiMark)) {
          resultModule.style.display = 'flex';
          result.innerHTML = "FIRST'S WON";
          setTimeout(resetGame, 1500);
          return;
        }
        if (checkWinner(board, huMark)) {
          resultModule.style.display = 'flex';
          result.innerHTML = "SECOND'S WON";
          setTimeout(resetGame, 1500);
          return;
        }
      };
      const switchTurn = () => {
        return (player1Turn = !player1Turn);
      };
      const checkWinner = (board, player) => {
        if (
          (board[0] === player && board[1] === player && board[2] === player) ||
          (board[3] === player && board[4] === player && board[5] === player) ||
          (board[6] === player && board[7] === player && board[8] === player) ||
          (board[0] === player && board[3] === player && board[6] === player) ||
          (board[1] === player && board[4] === player && board[7] === player) ||
          (board[2] === player && board[5] === player && board[8] === player) ||
          (board[0] === player && board[4] === player && board[8] === player) ||
          (board[2] === player && board[4] === player && board[6] === player)
        ) {
          return true;
        }
        return false;
      };
      cellList.forEach((cell) => {
        cell.addEventListener("click", handleClick);
      });
}

export default huGame;
