import { useState } from "react";
import EmojiSelector from "./components/EmojiSelector";
import Board from "./components/Board";
import GameInfo from "./components/GameInfo";
import HelpModal from "./components/HelpModal";
import WinBanner from "./components/WinBanner";
import "./index.css";
import ScoreBoard from "./components/ScoreBoard";


function App() {
  const [playerEmojis, setPlayerEmojis] = useState({ P1: [], P2: [] });
  const [selected, setSelected] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState("P1");
  const [winner, setWinner] = useState(null);
  const [showHelp, setShowHelp] = useState(false);
  const [resetSignal, setResetSignal] = useState(0); // for triggering board reset
  const [scores, setScores] = useState({ P1: 0, P2: 0 });
  
  


  const handleReset = () => {
    setPlayerEmojis({ P1: [], P2: [] });
    setSelected(false);
    setCurrentPlayer(name[0] || "P1");
    setWinner(null);
    setShowHelp(false);
    setResetSignal((prev) => prev + 1); // force Board re-render
    setScores({ P1: 0, P2: 0 });
  };

  const handlePlayAgain = () => {
    // Full reset to go back to category selection
    setWinner(null);
  setCurrentPlayer(name[0] || "P1");
  setResetSignal((prev) => prev + 1);
  };
  
  const handleResetScores = () => {
    setScores({ P1: 0, P2: 0 });
  };
  
  const handleclick = () => {
    setWinner(null);
    setCurrentPlayer(name[0] || "P1");
    setResetSignal((prev) => prev + 1);
    setSelected(!selected)
  };


  return (
    <div className="app">
      <button onClick={() => setShowHelp(true)} className="help-btn">❓ Help</button>
      <ScoreBoard scores={scores} onResetScores={handleResetScores}  />
      <h1>Blink Tac Toe 🎮</h1>
      {!selected ? (
        <>
          <h3>The first who chosses the emoji is player 1</h3>
          <EmojiSelector setPlayerEmojis={setPlayerEmojis} setSelected={setSelected}   />
          </>
      ) : (
          <>
          <button className="btn" onClick={handleclick}>Home</button>
          <GameInfo
            currentPlayer={currentPlayer}
              onReset={handleReset}
              playerEmojis={playerEmojis}
              
            />
          <Board
              playerEmojis={playerEmojis}
              currentPlayer={currentPlayer}
              setCurrentPlayer={setCurrentPlayer}
              winner={winner}
              setWinner={setWinner}
              resetSignal={resetSignal}
              setScores={setScores}
              
          />
        </>
      )}
      {winner && <WinBanner winner={winner} onPlayAgain={handlePlayAgain} />}
      {showHelp && <HelpModal onClose={() => setShowHelp(false)} />}
    </div>
  );
}

export default App;
