   // Get the game board element
    const board = document.querySelector('.board');

    // Create the game cells
    const cells = Array.from(document.querySelectorAll('.cell'));

    // Variable to track the current player
    let currentPlayer = 'X';

    // Function to handle a cell click event
    function handleCellClick(event) {
      const cell = event.target;

      // Check if the cell is already filled
      if (cell.textContent !== '') {
        return;
      }

      // Mark the cell with the current player's symbol
      cell.textContent = currentPlayer;

      // Check if the current player has won
      if (checkWin(currentPlayer)) {
        alert(`Player ${currentPlayer} wins!`);
        resetBoard();
        return;
      }

      // Check if the game is a tie
      if (checkTie()) {
        alert("It's a tie!");
        resetBoard();
        return;
      }

      // Switch players
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }

    // Function to check if the current player has won
    function checkWin(player) {
      const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6] // Diagonals
      ];

      return winningCombinations.some(combination => {
        const [a, b, c] = combination;
        return cells[a].textContent === player &&
               cells[b].textContent === player &&
               cells[c].textContent === player;
      });
    }

    // Function to check if the game is a tie
    function checkTie() {
      return cells.every(cell => cell.textContent !== '');
    }

    // Function to reset the game board
    function resetBoard() {
      cells.forEach(cell => {
        cell.textContent = '';
      });
      currentPlayer = 'X';
    }

    // Add click event listener to each cell
    cells.forEach(cell => {
      cell.addEventListener('click', handleCellClick);
    });