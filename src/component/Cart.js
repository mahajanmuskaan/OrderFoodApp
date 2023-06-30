import cart from "../../assets/images/empty-cart.jpg";
import FoodItems from "./FoodItems";
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../utils/cartSlice.js';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const style = {
    textDecoration: 'none',
    color: 'white'
};

const Cart = () => {


    const cartItems = useSelector(store => store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }

    const [price, setPrice] = useState(0);

    useEffect(() => {
        let totalAmount = 0;
        for (let i = 0; i < cartItems.length; i++) {
            totalAmount += cartItems[i].price;
        }
        setPrice(totalAmount / 100);
    });

    return (
        <>
            {cartItems.length !== 0 ? (
                <>
                    <div className="cart-display">
                        <h2>Total items added : {cartItems.length}</h2>
                    </div>
                    <div className="restaurant-list-cards">
                        {cartItems.map((item) => (
                            <FoodItems {...item} key={item.id} />
                        ))}
                    </div>
                    <hr></hr>
                    <div className="checkout-section">
                        <div>
                            <h1>Your Bill Summary</h1>
                            <p>Total Amount : Rs. {price}</p>
                            <p>Delivery Charges : Rs. {20}</p>
                            <p> Total Amount to be paid : <strong>Rs. {price + 20}</strong></p>
                        </div>
                        <button className="btn btn-danger" onClick={() => { handleClearCart() }}>
                            Clear Cart
                        </button>
                    </div>
                    <hr></hr>
                    <div className="cart-restaurant-link">
                        <h2>Want to add More Items...</h2>
                        <button className="btn btn-danger btn-lg">
                            <Link to="/restaurant" style={style}>
                                Add More
                            </Link>
                        </button>
                    </div>
                </>
            ) : (
                <div className="cart-section">
                    <img className="cart-empty" src={cart} alt="Empty cart" />
                    <div className="cart-text">
                        <h1>Oops! Looks like your cart is empty!</h1>
                        <h2>Go to Restaurants. Order some food.</h2>
                    </div>
                </div>
            )}
        </>
    );


}


export default Cart;