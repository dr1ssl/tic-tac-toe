const aiGame = () => {
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
      resultModule.style.display = 'none';
      result.innerHTML = "";
      turnCount = 0;
      return { board };
    };
    reset.addEventListener("click", resetGame);
    resetGame();

    const humanPlay = (e) => {
      turnCount += 1;
      const cell = e.target;
      const id = cell.dataset.id;
      cell.innerHTML = huMark;
      cell.classList.add("not-allow");
      cell.classList.add("o");
      board[+id] = huMark;
      if (turnCount >= 9) {
        resultModule.style.display = 'flex';
        result.innerHTML = `DRAW`;
        setTimeout(resetGame, 1500);
        return;
      }
      if (checkWinner(board, huMark)) {
        resultModule.style.display = 'flex';
        result.innerHTML = `YOU WON!`;
        setTimeout(resetGame, 1500);
        return;
      }
      setTimeout(makeAiTurn, 500);
    };

    const makeAiTurn = () => {
      turnCount += 1;
      const bestMove = minmax(board, aiMark);
      board[+bestMove.idx] = aiMark;
      cellList[bestMove.idx].innerHTML = aiMark;
      cellList[bestMove.idx].classList.add("not-allow");
      cellList[bestMove.idx].classList.add("x");

      if (turnCount >= 9) {
        resultModule.style.display = 'flex';
        result.innerHTML = `DRAW`;
        setTimeout(resetGame, 1500);
        return;
      }
      if (checkWinner(board, aiMark)) {
        resultModule.style.display = 'flex';
        result.innerHTML = `YOU LOSE`;
        setTimeout(resetGame, 1500);
        return;
      }
    };

    const minmax = (board, player) => {
      const emptyCells = findEmptyCells(board);
      if (checkWinner(board, huMark)) {
        return { score: -1 };
      } else if (checkWinner(board, aiMark)) {
        return { score: 1 };
      } else if (emptyCells.length === 0) {
        return { score: 0 };
      }

      let moves = [];

      for (let i = 0; i < emptyCells.length; i++) {
        let move = [];
        board[emptyCells[i]] = player;
        move.idx = emptyCells[i];
        if (player === huMark) {
          const payload = minmax(board, aiMark);
          move.score = payload.score;
        }
        if (player === aiMark) {
          const payload = minmax(board, huMark);
          move.score = payload.score;
        }
        board[emptyCells[i]] = move.idx;
        moves.push(move);
      }

      let bestMove = null;
      if (player === aiMark) {
        let bestScore = -Infinity;
        for (let i = 0; i < moves.length; i++) {
          if (moves[i].score > bestScore) {
            bestScore = moves[i].score;
            bestMove = i;
          }
        }
      } else {
        let bestScore = Infinity;
        for (let i = 0; i < moves.length; i++) {
          if (moves[i].score < bestScore) {
            bestScore = moves[i].score;
            bestMove = i;
          }
        }
      }
      return moves[bestMove];
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

    const findEmptyCells = (board) => {
      return board.filter((c) => c !== huMark && c !== aiMark);
    };

    cellList.forEach((cell) => {
      cell.addEventListener("click", humanPlay);
    });

};

export default aiGame;