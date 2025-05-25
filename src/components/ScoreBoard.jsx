function ScoreBoard({ scores, onResetScores }) {
    return (
      <div className="scoreboard">
        <h3>🏆 Score Board</h3>
        <p>Player 1: {scores.P1}</p>
        <p>Player 2: {scores.P2}</p>
        <button className="reset-score-btn" onClick={onResetScores}>
          Reset Scores
        </button>
      </div>
    );
  }
  
  export default ScoreBoard;
  