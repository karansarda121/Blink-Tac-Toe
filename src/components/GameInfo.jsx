import React from 'react';
function GameInfo({ currentPlayer,  onReset,playerEmojis }) {
  return (
    <div className="game-info">
          <h2>Current Turn: {currentPlayer === "P1" ? "Player 1" : "Player 2"}</h2>
          <div>
              {`player1 ${playerEmojis.P1}`}
              <br />
              {`player2 ${playerEmojis.P2}`}
          </div> 
      <button onClick={onReset}>🔄 Reset Game</button>
    </div>
  );
}

export default GameInfo;
