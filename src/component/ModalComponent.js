/**
 * Here are the summary points about this component:

- The component is named `ModalComponent` and is the default export of the file.
- It imports React and the `useState` hook from the React library.
- The component receives a prop named `onClose`, which is a callback function provided by the parent component.
- The component defines a state variable `isOpen` using the `useState` hook to manage the open/closed state of the modal.
- The `closeModal` function is called when the "OK" button is clicked. It sets `isOpen` state to `false` and calls the `onClose` callback provided by the parent component.
- The render function returns JSX code that represents a modal box.
- The `isOpen` state variable is used to conditionally apply the CSS class `open` or `closed` to the modal box, which controls its visibility.
- The modal box displays a heading, a message, and a button labeled "OK".
- When the "OK" button is clicked, the `closeModal` function is called.
- The `closeModal` function updates the state and calls the `onClose` callback provided by the parent component.
- The component does not have any internal state or complex logic, its purpose is to display a simple modal box and handle the closing action.

 */


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
