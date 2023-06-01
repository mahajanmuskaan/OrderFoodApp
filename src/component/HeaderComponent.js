import React from "react";
import logo from '../../images/logo.png';       //  To import Local folder Image in React file.

// Title with Logo Field
const style = {
    textDecoration: 'none'
}
const title = (
    <a href="/" style={style}>
        <div className="logoheader">
            <img id="logo" src={logo} alt="Logo" />
            <h1>Foodie's ADDA</h1>
        </div>
    </a>
);

// Header Component
const HeaderComponent = () => {
    return (
        <div className="header">
            {title}
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>Restaurants</li>
                    <li>Sign Up</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );

};

export default HeaderComponent;