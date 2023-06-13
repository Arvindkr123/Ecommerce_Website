import { createContext, useState, useEffect } from "react";
import { cartElements } from "../src/components/CartElements";

export const CartContext = createContext('');

const CartContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([...cartElements]);
    const [totalPrice, setTotalPrice] = useState(0);

    const addtheCartItems = (item) => {
        const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
        if (existingItem) {
            const updatedCartItems = cartItems.map((cartItem) =>
                cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
            );
            setCartItems(updatedCartItems);
        } else {
            setCartItems([...cartItems, { ...item, quantity: 1 }]);
        }
    };

    useEffect(() => {
        const calculateTotalPrice = () => {
            const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
            setTotalPrice(totalPrice);
        };

        calculateTotalPrice();
    }, [cartItems]);

    return (
        <CartContext.Provider value={{ cartItems, totalPrice, addtheCartItems }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
