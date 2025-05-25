function Disable({ onClose,message }) {
    return (
      <div className="modal-backdrop">
        <div className="modal">
                <h2>{ message}</h2>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    );
  }
  
  export default Disable;