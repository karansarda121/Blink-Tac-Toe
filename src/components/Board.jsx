import { useState, useEffect } from "react";
import Cell from "./Cell";
import { checkWinner } from "../utils/helpers";


const emptyBoard = Array(3).fill(null).map(() => Array(3).fill(null));
function Board({ playerEmojis, currentPlayer, setCurrentPlayer, winner, setWinner, resetSignal, setScores }) {
    const [board, setBoard] = useState(emptyBoard);
    const [placedEmojis, setPlacedEmojis] = useState({ P1: [], P2: [] });
    const [vanishedPositions, setVanishedPositions] = useState({ P1: [], P2: [] });
    const [winningCells, setWinningCells] = useState([]);
    const [vanishingCell, setVanishingCell] = useState(null);

    useEffect(() => {
      setBoard(emptyBoard);
      setPlacedEmojis({ P1: [], P2: [] });
      setVanishedPositions({ P1: [], P2: [] });
      setWinningCells([]);
    }, [resetSignal]);

  
    const handleClick = (row, col) => {
      if (board[row][col] || winner) return;
      const lastVanished = vanishedPositions[currentPlayer]?.[0];
      if (lastVanished?.row === row && lastVanished?.col === col) return ;
  
        
      const emojiList = playerEmojis[currentPlayer];
      const randomEmoji = emojiList[Math.floor(Math.random() * emojiList.length)];
  
      const newBoard = board.map((r) => [...r]);
      newBoard[row][col] = { player: currentPlayer, emoji: randomEmoji };
  
      const newPlaced = [...placedEmojis[currentPlayer], { row, col }];
      const newVanished = [...vanishedPositions[currentPlayer]];
  
    
      if (newPlaced.length > 3) {
          const removed = newPlaced.shift();
          newBoard[removed.row][removed.col] = null;
          newVanished.push(removed);
          if (newVanished.length > 1) newVanished.shift(); // only remember last vanished
        newBoard[removed.row][removed.col] = { ...newBoard[removed.row][removed.col], vanishing: true };
        setVanishingCell({ row: removed.row, col: removed.col }); // trigger animation
        setTimeout(() => {
          newBoard[removed.row][removed.col] = null;
            setBoard([...newBoard]);
        }, 300); // wait for fade animation to finish
      
        newVanished.push(removed);
        if (newVanished.length > 1) newVanished.shift();
      }
      
  
      setBoard(newBoard);
      setPlacedEmojis((prev) => ({ ...prev, [currentPlayer]: newPlaced }));
      setVanishedPositions((prev) => ({ ...prev, [currentPlayer]: newVanished }));
  
      const winLine = checkWinner(newBoard, currentPlayer);
      if (winLine) {
        setWinner(currentPlayer);
        setWinningCells(winLine);
        setScores(prev => ({
          ...prev,
          [currentPlayer]: prev[currentPlayer] + 1
        }));
      }else {
        setCurrentPlayer(currentPlayer === "P1" ? "P2" : "P1");
      }
    };
  
    return (
      <div className="board">
        {board.map((row, i) => (
          <div key={i} className="row">
            {row.map((cell, j) => {
              const isWinningCell = winningCells.some(([r, c]) => r === i && c === j);
              return (
                <Cell
                key={j}
                value={cell}
                onClick={() => handleClick(i, j)}
                highlight={isWinningCell}
                vanishing={cell?.vanishing}
                />
              );
            })}
          </div>
        ))}
      </div>
    );
  }
  
export default Board;