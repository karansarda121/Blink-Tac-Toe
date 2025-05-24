function ScoreBoard({ scores, onResetScores,name }) {
    return (
      <div className="scoreboard">
        <h3>🏆 Score Board</h3>
            <p>{name[0] }: {scores.P1}</p>
            <p>{ name[1]}: {scores.P2}</p>
        <button className="reset-score-btn" onClick={onResetScores}>
          Reset Scores
        </button>
      </div>
    );
  }
  
  export default ScoreBoard;
  