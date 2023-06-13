import React, { createContext, useState } from 'react'
import { cartElements } from '../src/components/CartElements';

export const CartContext = createContext('');

const CartContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([...cartElements])

    const addtheCartItems = (item) => {
        // first find the item in the array
        const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
        if (existingItem) {
            // item is exist in the array then just increase the qty
            const updatedCartItems = cartItems.map((cartItem) =>
                cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
            );
            setCartItems(updatedCartItems);
        } else {
            setCartItems([...cartItems, { ...item, quantity: 1 }]);
        }
    };

    return (
        <CartContext.Provider value={{ cartItems, addtheCartItems }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
