import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../utils/UserContext';
import { useNavigate } from 'react-router-dom';

const LoginComponent = () => {
    // State variables to store form input values and error messages
    const [emailText, setEmailText] = useState('');
    const [passwordText, setPasswordText] = useState('');
    const [error, setError] = useState('');

    // Accessing user context using useContext hook
    const { user, setUser } = useContext(UserContext);

    // Hook for navigation within the component
    const navigate = useNavigate();

    // Event handlers for input field changes
    const handleEmailChange = (e) => {
        setEmailText(e.target.value);
    };
    const handlePasswordChange = (e) => {
        setPasswordText(e.target.value);
    };

    // Function to handle the login process
    const handleLogin = async () => {
        try {
            // Fetching users from an API
            const response = await fetch('https://www.melivecode.com/api/users');
            const users = await response.json();

            console.log(users);

            // Finding the user based on the provided email
            const user = users.find((user) => user.username === emailText);

            if (user) {
                console.log('User logged in successfully');
                console.log(user.email);

                // Updating user context with the logged-in user's information
                setUser({
                    ...user,
                    email: emailText,
                });

                // Redirecting to the home page after successful login
                navigate("/");
            } else {
                setError('Invalid email or password.');
            }
        } catch (error) {
            console.error('Error occurred while logging in:', error);
            setError('An error occurred during login. Please try again later.');
        }
    };

    // Render the login form

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
                                type="email"
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
                    <h4>
                        Don't have an account?
                        <Link to="/signup">Sign Up</Link>
                    </h4>
                </div>
            </div>
        </>
    );
};

export default LoginComponent;
