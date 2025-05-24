// export const checkWinner = (board, player) => {
//     const checkLine = (cells) =>
//       cells.every(
//         ([r, c]) => board[r][c] && board[r][c].player === player
//       );
  
//     const lines = [
//       // Rows
//       [[0, 0], [0, 1], [0, 2]],
//       [[1, 0], [1, 1], [1, 2]],
//       [[2, 0], [2, 1], [2, 2]],
//       // Columns
//       [[0, 0], [1, 0], [2, 0]],
//       [[0, 1], [1, 1], [2, 1]],
//       [[0, 2], [1, 2], [2, 2]],
//       // Diagonals
//       [[0, 0], [1, 1], [2, 2]],
//       [[0, 2], [1, 1], [2, 0]],
//     ];
  
//     return lines.some(checkLine);
//   };
  


export const checkWinner = (board, player) => {
    const checkLine = (cells) =>
      cells.every(([r, c]) => board[r][c] && board[r][c].player === player);
  
    const lines = [
      [[0, 0], [0, 1], [0, 2]],
      [[1, 0], [1, 1], [1, 2]],
      [[2, 0], [2, 1], [2, 2]],
      [[0, 0], [1, 0], [2, 0]],
      [[0, 1], [1, 1], [2, 1]],
      [[0, 2], [1, 2], [2, 2]],
      [[0, 0], [1, 1], [2, 2]],
      [[0, 2], [1, 1], [2, 0]],
    ];
  
    for (const line of lines) {
      if (checkLine(line)) return line; // return winning cells
    }
  
    return null;
  };
  