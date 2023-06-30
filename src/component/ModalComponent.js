import { React, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


const ModalComponent = ({ onClose }) => {
    const [isOpen, setIsOpen] = useState(true);

    const navigate = useNavigate();

    const closeModal = () => {
        setIsOpen(false);
        navigate("/login");
        onClose(); // Call the onClose callback provided by the parent component
    };

    return (
        <div className={`modal-box ${isOpen ? 'open' : 'closed'}`}>
            <h1>Great!!</h1>
            <h2>You have successfully signed up!✔️</h2>
            <p>Enjoy your Meal!!</p>
            <button type="button" className="btn btn-outline-primary btn-lg" onClick={closeModal}>
                OK
            </button>
        </div>
    );
};

export default ModalComponent;
