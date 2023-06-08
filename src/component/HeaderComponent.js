/*
The given React component is a HeaderComponent that represents the header section of an application.

1. The component imports the necessary dependencies: React, useEffect, and useState, as well as several images used in the header.
2. It defines the HeaderComponent as a functional component using arrow syntax.
3. Inside the component, there is a state variable called userStatus, which represents whether the user is logged in or logged out. It is initially set to false.
4. The userStatusCheck function is called within the useEffect hook to check the user's authentication status. In this example, it simply sets the userStatus to true.
5. The logInUser function is called when the user clicks on the "Login/Signup" option in the header. It sets the userStatus to true, simulating a user login.
6. The logOutUser function is called when the user clicks on the "Logout" option in the header. It sets the userStatus to false, simulating a user logout.
7. The JSX markup returned by the component includes a logo, the application name, and a navigation menu. The navigation menu consists of several list items representing different sections of the application, such as Home, Restaurants, and Cart. The "Login/Signup" or "Logout" option is conditionally rendered based on the userStatus.
8. The component exports the HeaderComponent as the default export.

*/


import React, { useEffect, useState } from "react";
import logo from '../../assets/images/logo.png';       //  To import Local folder Image in React file.
import home from '../../assets/images/home.png';
import restaurant from '../../assets/images/restaurant.png';
import cart from '../../assets/images/grocery-store.png';
import enter from '../../assets/images/enter.png';
import logout from '../../assets/images/logout.png';


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
    // const [userStatus, setUserStatus] = useState(false);

    // function userStatusCheck() {
    //     // API Call can be made for User Authentication -> write Authentication code here... for login/signUp/logout...
    //     //setUserStatus(true);
    // }

    // useEffect(() => {
    //     userStatusCheck()
    // }, [])

    // function logInUser() {
    //     // To make user login
    //     setUserStatus(true);
    // }

    // function logOutUser() {
    //     //To make user logOut
    //     setUserStatus(false);
    // }


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
                    {/* {
                        ((userStatus === true) ? (<li onClick={logOutUser}><img src={logout} />Logout</li>) : (<li onClick={logInUser}><img src={enter} />Login/Signup</li>))
                    } */}
                </ul>
            </div>
        </div>
    );

};

export default HeaderComponent;