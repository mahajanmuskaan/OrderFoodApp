import React, { useEffect, useState } from "react";
import logo from '../../images/logo.png';       //  To import Local folder Image in React file.
import home from '../../images/home.png';
import restaurant from '../../images/restaurant.png';
import cart from '../../images/grocery-store.png';
import enter from '../../images/enter.png';
import logout from '../../images/logout.png';


// Title with Logo Field
const style = {
    textDecoration: 'none'
}

// Header Component
const HeaderComponent = () => {
    /**
     * userStatus = true => User is logged in Application
     * userStatus = false => User is logged out Application
     */
    const [userStatus, setUserStatus] = useState(false);

    function userStatusCheck() {
        // API Call can be made for User Authentication -> write Authentication code here... for login/signUp/logout...
        setUserStatus(true);
    }

    useEffect(() => {
        userStatusCheck()
    }, [])

    function logInUser() {
        // To make user login
        setUserStatus(true);
    }

    function logOutUser() {
        //To make user logOut
        setUserStatus(false);
    }


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
                    <li><img src={home} />Home</li>
                    <li><img src={restaurant} />Restaurants</li>
                    <li><img src={cart} />Cart</li>
                    {
                        ((userStatus === true) ? (<li onClick={logOutUser}><img src={logout} />Logout</li>) : (<li onClick={logInUser}><img src={enter} />Login/Signup</li>))
                    }
                </ul>
            </div>
        </div>
    );

};

export default HeaderComponent;