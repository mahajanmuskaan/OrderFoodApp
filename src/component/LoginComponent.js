import React, { useState } from 'react';
import ModalComponent from './ModalComponent';

const LoginComponent = () => {
    const [emailText, setEmailText] = useState('');
    const [passwordText, setPasswordText] = useState('');
    const [showModal, setShowModal] = useState(false);

    const emailChange = (e) => {
        setEmailText(e.target.value);
    };

    const passwordChange = (e) => {
        setPasswordText(e.target.value);
    };

    const validateForm = (email, password) => {
        if (email === '' || password === '') {
            return false;
        }
        return true;
    };

    const handleLogin = () => {
        const isValid = validateForm(emailText, passwordText);

        if (isValid) {
            // Perform authentication logic here (e.g., make API call to validate credentials)
            // Replace this with your actual authentication code

            // Simulating a successful login
            
        }
    };

    return (
        <>
            <div className={`container ${showModal ? 'blur' : ''}`}>
                <div className="login-page">
                    <div className="login-page-body">
                        <form>
                            <h1 style={{ textAlign: 'center' }}>Login</h1>
                            <div className="form-group">
                                <label htmlFor="inputEmail">Email</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputEmail"
                                    value={emailText}
                                    onChange={emailChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputPassword">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="inputPassword"
                                    value={passwordText}
                                    onChange={passwordChange}
                                />
                            </div>
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={handleLogin}
                            >
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginComponent;
