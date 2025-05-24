function Cell({ value, onClick }) {
    return (
      <div className="cell" onClick={onClick}>
        {value?.emoji}
      </div>
    );
  }
  
  export default Cell;
  