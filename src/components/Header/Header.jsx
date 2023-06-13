import React, { useState, useEffect, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { cartElements } from '../CartElements';
import Cart from '../Pages/Cart';
import { CartContext } from '../../../store/CartContextProvider';

const Header = () => {
    const [isCartOpen, setCartOpen] = useState(false);

    const toggleCart = () => {
        setCartOpen(!isCartOpen);
    };

    const handleCloseClick = () => {
        setCartOpen(false);
    };

    const { cartItems } = useContext(CartContext);

    return (
        <div className="bg-black flex text-white justify-between items-center">
            <ul className="flex justify-center w-full text-2xl gap-5 m-2">
                <NavLink className="hover:underline" to="/">
                    HOME
                </NavLink>
                <NavLink className="hover:underline" to="/store">
                    STORE
                </NavLink>
                <NavLink className="hover:underline" to="/about">
                    ABOUT
                </NavLink>
            </ul>
            <div className="m-5 text-2xl relative mr-6" onClick={() => setCartOpen(!isCartOpen)}>
                <p>
                    cart <span className="absolute -top-2 bg-red-800 p-1 rounded">{cartItems?.length}</span>
                </p>
            </div>
            {isCartOpen && (
                <div className="fixed inset-0 flex items-center justify-end z-50">
                    <div className="w-1/4 h-screen bg-[#777] p-8">
                        <div className="flex justify-end">
                            <button className='text-white' onClick={handleCloseClick}>
                                Close
                            </button>
                        </div>
                        <h2 className="text-2xl mb-4 text-center">CART</h2>
                        <hr />
                        <div>
                            <ul className='flex mt-3 items-center justify-around'>
                                <li className='border-b-2'>ITEM</li>
                                <li className='border-b-2'>PRICE</li>
                                <li className='border-b-2'>QUANTITY</li>
                            </ul>
                            {
                                cartItems.map((item) => {
                                    return <Cart key={item.id} item={item}></Cart>
                                })
                            }
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;
