/**
 * The given component is a sign-up form component implemented using React.

- The component is named `SignUpComponent` and is the default export of the file.
- It imports React and the `useState` hook from the React library.
- It also imports a `ModalComponent` from a separate file.
- The component defines multiple state variables using the `useState` hook: `emailText`, `passwordText`, `firstNameText`, `lastNameText`, and `showModal`.
- There are event handler functions defined for various input changes: `firstNameChange`, `lastNameChange`, `emailChange`, and `passwordChange`. These functions update the respective state variables.
- The `showError` function adds the CSS class 'error' to a specified field, indicating an input validation error.
- The `validateForm` function checks if the form inputs are valid. It returns a boolean value indicating the overall validity of the form.
- The `checkSignUp` function is called when the sign-up button is clicked. It validates the form inputs using the `validateForm` function and then makes an API call to create a new user.
- If the API call is successful, a success message is logged, and the `showModal` state variable is set to `true` to show the modal component.
- The `handleModalClose` function is called when the modal is closed. It sets the state variables to their initial values, effectively resetting the form.
- The render function returns JSX code that represents the sign-up form. The form inputs are bound to the respective state variables for their values and change events.
- The sign-up button triggers the `checkSignUp` function when clicked.
- The component conditionally renders the modal component based on the value of the `showModal` state variable.
- The modal component is shown when `showModal` is `true`, and it can be closed using the `handleModalClose` function.
- The component also includes some additional HTML elements for text and headings related to the sign-up form.

 */

import React, { useState } from 'react';
import ModalComponent from './ModalComponent';

export const SignUpComponent = () => {

    const [emailText, setEmailText] = useState('');
    const [passwordText, setPasswordText] = useState('');
    const [firstNameText, setFirstNameText] = useState('');
    const [lastNameText, setLastNameText] = useState('');
    const [showModal, setShowModal] = useState(false); // New state variable


    const firstNameChange = (e) => {
        setFirstNameText(e.target.value);
    }

    const lastNameChange = (e) => {
        setLastNameText(e.target.value);
    }

    const emailChange = (e) => {
        setEmailText(e.target.value);
    }

    const passwordChange = (e) => {
        setPasswordText(e.target.value);
    }

    const showError = (fieldId) => {
        const field = document.getElementById(fieldId);
        field.classList.add('error');
    };

    const validateForm = (firstNameText, lastNameText, emailText, passwordText) => {
        let isValid = true;

        if (firstNameText === '') {
            showError('inputFirstName');
            isValid = false;
        }

        if (lastNameText === '') {
            showError('inputLastName');
            isValid = false;
        }

        if (emailText === '') {
            showError('inputEmail4');
            isValid = false;
        }

        if (passwordText === '') {
            showError('inputPassword4');
            isValid = false;
        }

        return isValid;
    };

    const checkSignUp = (firstNameText, lastNameText, emailText, passwordText) => {
        const isValid = validateForm(firstNameText, lastNameText, emailText, passwordText);

        if (isValid) {
            document.getElementById('inputFirstName').classList.remove('error');
            document.getElementById('inputLastName').classList.remove('error');
            document.getElementById('inputEmail4').classList.remove('error');
            document.getElementById('inputPassword4').classList.remove('error');

            console.log('Form submitted successfully!!');

            const lastChild = document.getElementById('form-children').lastElementChild.lastChild;
            if (lastChild.innerText === 'User already exists. Try Login!') {
                document.getElementById('form-children').lastElementChild.removeChild(document.getElementById('form-children').lastElementChild.lastChild);
            }

            fetchApiData(firstNameText, lastNameText, emailText, passwordText);
            // API call to make to send the data as POST request
            async function fetchApiData(firstNameText, lastNameText, emailText, passwordText) {
                try {
                    // Fetching response from Public API
                    const response = await fetch("https://www.melivecode.com/api/users/create", {
                        method: "POST",
                        headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            "fname": firstNameText,
                            "lname": lastNameText,
                            "username": emailText,
                            "password": passwordText,
                            "email": emailText,
                            "avatar": "https://www.melivecode.com/users/cat.png"
                        })
                    });
                    console.log(response.status);   // Getting Response status
                    console.log(response.ok);       // Getting boolean value of response.ok
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);     // if boolean value of response.ok is false, it will throw the error.
                    }
                    else {
                        const responseData = await response.json();
                        console.log(responseData); // Do something with the responseData
                        if (responseData?.status === 'error' && responseData?.message == "user exists") {
                            const errorMsg = document.createElement('p');
                            errorMsg.innerText = 'User already exists. Try Login!';
                            const formele = document.getElementById('form-children').lastElementChild;
                            formele.appendChild(errorMsg);

                        }
                        else {
                            // Successful Modal window. Then on clicking OK in modal window it should redirect to login Page.
                            setShowModal(true); // Show the modal on successful signup
                            //window.alert('Sign up successful!');
                        }
                    }

                }
                catch (error) {
                    console.error("Error is there while fetching API. ", error); // Log any errors
                }
            }
        }
    };

    const handleModalClose = () => {
        setShowModal(false); // Close the modal
        setFirstNameText('');
        setLastNameText('');
        setEmailText('');
        setPasswordText('');
    }


    return (
        <>
            <div className={`container ${showModal ? 'blur' : ''}`}>
                <div className="box-form ">
                    <h1>Hey, Welcome!👋</h1>
                    <div>
                        <h3>SignUp Here!👇</h3>
                    </div>
                    <form className="row g-6 px-1" id='form-children'>
                        <div className="col-md-6">
                            <label htmlFor="inputFirstName" className="form-label text-style">First Name</label>
                            <input type="text" className="form-control" id="inputFirstName" value={firstNameText} onChange={firstNameChange} />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputLastName" className="form-label text-style">Last Name</label>
                            <input type="text" className="form-control" id="inputLastName" value={lastNameText} onChange={lastNameChange} />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputEmail4" className="form-label text-style">Email</label>
                            <input type="text" className="form-control" id="inputEmail4" value={emailText} onChange={emailChange} />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputPassword4" className="form-label text-style">Password</label>
                            <input type="password" className="form-control" id="inputPassword4" value={passwordText} onChange={passwordChange} />
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputAddress" className="form-label text-style">Address</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" required />
                        </div>
                        <div className="col-12 text-center">
                            <button type="button" className="btn btn-primary btn-lg sign-in" onClick={() => {
                                checkSignUp(firstNameText, lastNameText, emailText, passwordText);
                            }}>Sign Up</button>
                        </div>
                    </form>

                    <h4>Already have an account? Login</h4>

                </div>
            </div>
            {showModal && (
                <ModalComponent onClose={handleModalClose} />
            )}
        </>
    )
}

export default SignUpComponent;