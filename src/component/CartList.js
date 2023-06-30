import { addItem, removeItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

const CartList = (item) => {
    const dispatch = useDispatch();

    const [itemQuantities, setItemQuantities] = useState({});

    // Function to add an item to the cart
    /**
     * handleAddItem: This function is responsible for adding an item to the cart. It takes an item parameter, which represents the item being added. Inside the function, it dispatches the addItem action (presumably defined in the cartSlice file) with the item as the payload. This action is responsible for updating the cart state in the Redux store. 
     * Additionally, it updates the itemQuantities state by increasing the quantity of the item. It uses the setItemQuantities function with the callback syntax to update the state based on the previous state. It spreads the previous quantities using the spread operator (...prevQuantities) and then sets the quantity of the current item by accessing it using its id. If the item is already present in itemQuantities, its quantity is incremented by 1. Otherwise, it sets the quantity to 1.
     */
    const handleAddItem = (item) => {
        dispatch(addItem(item));
        setItemQuantities((prevQuantities) => ({
            ...prevQuantities,
            [item.id]: (prevQuantities[item.id] || 0) + 1
        }));
    };

    // Function to remove an item from the cart
    /**
     * This function is responsible for removing an item from the cart. It takes an item parameter, which represents the item being removed. Similar to handleAddItem, it dispatches the removeItem action (presumably defined in the cartSlice file) with the item as the payload. 
     * This action is responsible for updating the cart state in the Redux store. It also updates the itemQuantities state by decreasing the quantity of the item. It uses the setItemQuantities function with the callback syntax to update the state based on the previous state. It checks if the item is present in itemQuantities and retrieves its current quantity. If the quantity is greater than 0, it decrements the quantity by 1. 
     * Otherwise, it sets the quantity to 0 to ensure it doesn't become negative.
     */
    const handleRemoveItem = (item) => {
        dispatch(removeItem(item));
        setItemQuantities((prevQuantities) => {
            const updatedCount = (prevQuantities[item.id] || 0) - 1;
            return {
                ...prevQuantities,
                [item.id]: updatedCount > 0 ? updatedCount : 0
            };
        });
    };

    // Function to get the quantity of an item in the cart
    /**
     * This function is used to get the quantity of a specific item in the cart. It takes an item parameter, which represents the item for which the quantity is being retrieved. Inside the function, it accesses the quantity of the item from the itemQuantities state using its id. If the quantity is greater than 0, it returns the quantity. Otherwise, it returns 0. 
     * This function is used to display the quantity of each item in the UI, or to determine if an item is already present in the cart based on its quantity.
     */

    const getItemCount = (item) => {
        const quantity = itemQuantities[item.id];
        if (quantity > 0) {
            return quantity;
        }
        return 0;
    };
    return (
        <div className="cart-list">
            <button className="btn btn-outline-danger" onClick={() => { handleRemoveItem(item?.card?.info) }}>-</button>
            {getItemCount(item?.card?.info) && <span>{getItemCount(item?.card?.info)}</span>} {/* Render the quantity if it exists */}
            <button className="btn btn-outline-danger" onClick={() => { handleAddItem(item?.card?.info) }}>+</button>
        </div>
    );
}

export default CartList;