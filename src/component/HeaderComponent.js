import React from "react";
import logo from '../../images/logo.png';       //  To import Local folder Image in React file.
import home from '../../images/home.png';  
import restaurant from '../../images/restaurant.png';  
import cart from '../../images/grocery-store.png';  
import enter from '../../images/enter.png';  


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
                    <li>
                        <img src={home} />
                        Home</li>
                    <li><img src={restaurant} />Restaurants</li>
                    <li><img src={enter} />Sign Up</li>
                    <li><img src={cart} />Cart</li>
                </ul>
            </div>
        </div>
    );

};

export default HeaderComponent;