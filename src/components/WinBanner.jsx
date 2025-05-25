function WinBanner({ winner, onPlayAgain }) {
    return (
      <div className="win-banner">
        <h2>{winner === "P1" ? "Player1" : "Player2"} Wins! 🎉</h2>
        <button onClick={onPlayAgain}>Play Again</button>
      </div>
    );
  }
  
  export default WinBanner;
  