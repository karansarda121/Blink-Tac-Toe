function HelpModal({ onClose }) {
    return (
      <div className="modal-backdrop">
        <div className="modal">
          <h2>How to Play</h2>
          <ul className="help-list">
            <li>Each player selects an emoji category before the game.</li>
            <li>Players take turns placing emojis on a 3x3 board.</li>
            <li>Each player can only have 3 emojis on the board at once.</li>
            <li>When placing a 4th, the oldest emoji vanishes (FIFO rule).</li>
            <li>You can’t place a new emoji on the just-vanished cell.</li>
            <li>The first to make a line of 3 (row, column, or diagonal) wins!</li>
          </ul>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    );
  }
  
  export default HelpModal;
  