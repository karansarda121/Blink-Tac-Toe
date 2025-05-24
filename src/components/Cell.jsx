
function Cell({ value, onClick, highlight, vanishing }) {
    return (
      <div
        className={`cell ${highlight ? "highlight" : ""} ${value ? "placed" : ""} ${vanishing ? "vanishing" : ""}`}
        onClick={onClick}
      >
        {value?.emoji}
      </div>
    );
  }
  export default Cell;

