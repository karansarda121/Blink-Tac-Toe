import { useState } from "react";

const emojiCategories = {
  Animals: ["🐶", "🐱", "🐵", "🐰"],
  Food: ["🍕", "🍟", "🍔", "🍩"],
  Sports: ["⚽", "🏀", "🏈", "🎾"]
};

function EmojiSelector({ setPlayerEmojis, setSelected,name }) {
  const [p1Choice, setP1Choice] = useState(null);
  const [p2Choice, setP2Choice] = useState(null);
  const [error, setError] = useState("");

    const handleStart = () => {
      if(name[0] === "" || name[1] === "") {
        setError("Both players must enter their names.");
        return;
      }
    if (!p1Choice || !p2Choice) {
      setError("Both players must choose a category.");
      return;
    }
    if (p1Choice === p2Choice) {
      setError("Players must choose different categories.");
      return;
    }

    setPlayerEmojis({
      P1: emojiCategories[p1Choice],
      P2: emojiCategories[p2Choice]
    });
    setSelected(true);
  };

  return (
    <div className="selector">
      <h2>Choose Emoji Categories</h2>
      <div className="category-select">
        <div>
          <h3>Player 1</h3>
          {Object.keys(emojiCategories).map((cat) => (
            <button
              key={`P1-${cat}`}
              className={p1Choice === cat ? "selected" : ""}
              onClick={() => setP1Choice(cat)}
            >
              {cat} {emojiCategories[cat].join(" ")}
            </button>
          ))}
        </div>
        <div>
          <h3>Player 2</h3>
          {Object.keys(emojiCategories).map((cat) => (
            <button
              key={`P2-${cat}`}
              className={p2Choice === cat ? "selected" : ""}
              onClick={() => setP2Choice(cat)}
            >
              {cat} {emojiCategories[cat].join(" ")}
            </button>
          ))}
        </div>
      </div>
      {error && <p className="error">{error}</p>}
      <button className="start-btn" onClick={handleStart}>Start Game</button>
    </div>
  );
}

export default EmojiSelector;
