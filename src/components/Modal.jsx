import ReactDOM from "react-dom";
import "./Modal.css";

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}

export default Modal;
