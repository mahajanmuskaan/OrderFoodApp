// Importing the createSlice function from the Redux Toolkit library
import { createSlice } from "@reduxjs/toolkit";

// Creating a slice for the cart using createSlice function
const cartSlice = createSlice({
    name: "cart",   // The name of the slice is "cart"
    initialState: {
        items: []   // The initial state of the cart is an empty array
    },
    reducers: {
        // Reducer function to add an item to the cart
        addItem: (state, action) => {
            state.items.push(action.payload); // Add the payload of the action to the items array in the state
        },
        // Reducer function to remove an item from the cart
        removeItem: (state, action) => {
            state.items.pop(); // Remove the last item from the items array in the state
        },
        // Reducer function to clear the cart
        clearCart: (state) => {
            // Define the logic to clear the cart (empty the items array)
            state.items = [];
        }
    }
})

// Export the cart slice

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
