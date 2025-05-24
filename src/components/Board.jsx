import { useState, useEffect } from "react";
import Cell from "./Cell";
import { checkWinner } from "../utils/helpers";

const emptyBoard = Array(3).fill(null).map(() => Array(3).fill(null));

function Board({ playerEmojis, currentPlayer, setCurrentPlayer, winner, setWinner, resetSignal }) {
  const [board, setBoard] = useState(emptyBoard);
  const [placedEmojis, setPlacedEmojis] = useState({ P1: [], P2: [] });
  const [vanishedPositions, setVanishedPositions] = useState({ P1: [], P2: [] });

  useEffect(() => {
    // reset game state when signal changes
    setBoard(emptyBoard);
    setPlacedEmojis({ P1: [], P2: [] });
    setVanishedPositions({ P1: [], P2: [] });
  }, [resetSignal]);

  const handleClick = (row, col) => {
    if (board[row][col] || winner) return;

    const lastVanished = vanishedPositions[currentPlayer]?.[0];
    if (lastVanished?.row === row && lastVanished?.col === col) {
      return alert("You can't place on the last vanished cell!");
    }

    // Assign a random emoji from the current player's category
    const emojiList = playerEmojis[currentPlayer];
    const randomEmoji = emojiList[Math.floor(Math.random() * emojiList.length)];

    const newBoard = board.map((r) => [...r]);
    newBoard[row][col] = {
      player: currentPlayer,
      emoji: randomEmoji,
    };

    const newPlaced = [...placedEmojis[currentPlayer], { row, col }];
    const newVanished = [...vanishedPositions[currentPlayer]];

    // Handle vanishing
    if (newPlaced.length > 3) {
      const removed = newPlaced.shift(); // remove oldest
      newBoard[removed.row][removed.col] = null;
      newVanished.push(removed);
      if (newVanished.length > 1) newVanished.shift(); // only remember last vanished
    }

    setBoard(newBoard);
    setPlacedEmojis((prev) => ({ ...prev, [currentPlayer]: newPlaced }));
    setVanishedPositions((prev) => ({ ...prev, [currentPlayer]: newVanished }));

    // Check for winner
    const result = checkWinner(newBoard, currentPlayer);
    if (result) {
      setWinner(currentPlayer);
    } else {
      setCurrentPlayer(currentPlayer === "P1" ? "P2" : "P1");
    }
  };

  return (
    <div className="board">
      {board.map((row, i) => (
        <div key={i} className="row">
          {row.map((cell, j) => (
            <Cell key={j} value={cell} onClick={() => handleClick(i, j)} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Board;


