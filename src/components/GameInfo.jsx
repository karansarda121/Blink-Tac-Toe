import React from 'react';
function GameInfo({ currentPlayer,  onReset }) {
  return (
    <div className="game-info">
      <h2>Current Turn: {currentPlayer === "P1" ? "Player 1" : "Player 2"}</h2>
      <button onClick={onReset}>🔄 Reset Game</button>
    </div>
  );
}

export default GameInfo;
