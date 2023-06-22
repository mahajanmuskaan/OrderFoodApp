import React, { useState } from 'react';

const LoginComponent = () => {
    const [emailText, setEmailText] = useState('');
    const [passwordText, setPasswordText] = useState('');
    const [error, setError] = useState('');

    const handleEmailChange = (e) => {
        setEmailText(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPasswordText(e.target.value);
    };

    const handleLogin = async () => {
        try {
            const response = await fetch('https://www.melivecode.com/api/users');
            const users = await response.json();

            console.log(users);

            const user = users.find((user) => user.username === emailText);

            if (user) {
                console.log('User logged in successfully');
                // Perform any necessary actions after successful login
                window.location.href = '/';
            } else {
                setError('Invalid email or password.');
            }
        } catch (error) {
            console.error('Error occurred while logging in:', error);
            setError('An error occurred during login. Please try again later.');
        }
    };

    return (
        <>
            <div className="container">
                <div className="box-form">
                    <h1>Login🔒</h1>
                    <div>
                        <h3>Welcome back! Login to your account.</h3>
                    </div>
                    <form className="row g-6 px-1" id="form-children">
                        <div className="form-group">
                            <label htmlFor="inputEmail">Email</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputEmail"
                                value={emailText}
                                onChange={handleEmailChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputPassword">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="inputPassword"
                                value={passwordText}
                                onChange={handlePasswordChange}
                            />
                        </div>
                    </form>
                    {error && <div className="error-message">{error}</div>}
                    <div className="col-12 text-center">
                        <button type="button" className="btn btn-primary btn-lg sign-in" onClick={handleLogin}>
                            Login
                        </button>
                    </div>
                    <h4>Don't have an account? Sign Up</h4>
                </div>
            </div>
        </>
    );
};

export default LoginComponent;
