import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.png';       //  To import Local folder Image in React file.
import home from '../../assets/images/home.png';
import restaurant from '../../assets/images/restaurant.png';
import cart from '../../assets/images/grocery-store.png';
import enter from '../../assets/images/enter.png';
import help from '../../assets/images/help.png';
import mart from '../../assets/images/mart.png';


// Title with Logo Field
const style = {
    textDecoration: 'none',
    color: 'black'
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
                    <li><img src={home} /><Link to="/" style={style}>Home</Link></li>
                    <li><img src={restaurant} /><Link to="/restaurant" style={style}>Restaurants</Link></li>
                    <li><img src={mart} /><Link to="/foodMart" style={style}>Food Mart</Link></li>
                    <li><img src={help} /><Link to="/help" style={style}>Help</Link></li>
                    <li><img src={cart} />Cart</li>
                    <li><img src={enter} /><Link to="/signup" style={style}>Login/Signup</Link></li>

                    {/* {
                        ((userStatus === true) ? (<li onClick={logOutUser}><img src={logout} />Logout</li>) : (<li onClick={logInUser}><img src={enter} />Login/Signup</li>))
                    } */}
                </ul>
            </div>
        </div>
    );

};

export default HeaderComponent;