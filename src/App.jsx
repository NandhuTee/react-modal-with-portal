import  { useState } from "react";
import Modal from "./components/Modal";


function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="App">
      <h1>React Modal with Portal</h1>
      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Hello from the Modal!</h2>
        <p>This Modal is rendered outside the main parent component!</p>
      </Modal>
    </div>
  );
}

export default App;
