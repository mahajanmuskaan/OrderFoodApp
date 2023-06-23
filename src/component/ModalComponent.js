import { React, useState } from "react";
import { Link } from "react-router-dom";


const ModalComponent = ({ onClose }) => {
    const [isOpen, setIsOpen] = useState(true);

    const closeModal = () => {
        setIsOpen(false);
        onClose(); // Call the onClose callback provided by the parent component
    };

    return (
        <div className={`modal-box ${isOpen ? 'open' : 'closed'}`}>
            <h1>Great!!</h1>
            <h2>You have successfully signed up!✔️</h2>
            <p>Enjoy your Meal!!</p>
            <button type="button" className="btn btn-outline-primary btn-lg" onClick={closeModal}>
                <Link to="/" id="signed-ok">OK</Link>
            </button>
        </div>
    );
};

export default ModalComponent;
