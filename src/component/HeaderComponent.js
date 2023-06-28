import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../utils/UserContext';
import logo from '../../assets/images/logo.png';
import home from '../../assets/images/home.png';
import restaurant from '../../assets/images/restaurant.png';
import cart from '../../assets/images/grocery-store.png';
import enter from '../../assets/images/enter.png';
import logout from '../../assets/images/logout.png';
import help from '../../assets/images/help.png';
import mart from '../../assets/images/mart.png';

// CSS style for links
const style = {
    textDecoration: 'none',
    color: 'black'
};

const HeaderComponent = () => {
    const { user, setUser } = useContext(UserContext);

    // Function to log out the user by resetting email in user context
    const logOutUser = () => {
        setUser({
            ...user,
            email: '',
        });
    };

    // Render the header component
    return (
        <div className="header">
            <a href="/" style={style}>
                <div className="logoheader">
                    <img id="logo" src={logo} alt="Logo" />
                    <h1>Foodie's ADDA</h1>
                </div>
            </a>
            <div className="nav-items">
                <ul>
                    <li>
                        <img src={home} />
                        <Link to="/" style={style}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <img src={restaurant} />
                        <Link to="/restaurant" style={style}>
                            Restaurants
                        </Link>
                    </li>
                    <li>
                        <img src={mart} />
                        <Link to="/foodMart" style={style}>
                            Food Mart
                        </Link>
                    </li>
                    <li>
                        <img src={help} />
                        <Link to="/help" style={style}>
                            Help
                        </Link>
                    </li>
                    <li>
                        <img src={cart} />Cart
                    </li>
                    {user.email !== '' ? (
                        <li onClick={logOutUser}>
                            <img src={logout} />
                            Logout
                        </li>
                    ) : (
                        <li>
                            <img src={enter} />
                            <Link to="/signup" style={style}>
                                Signup/Login
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default HeaderComponent;
