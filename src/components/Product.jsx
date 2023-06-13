import React, { useContext } from 'react'
import { CartContext } from '../../store/CartContextProvider'

const Product = ({ prod }) => {
    const { addtheCartItems } = useContext(CartContext);
    return (
        <div className='hover:scale-105 duration-500 ease-out'>
            <div className='text-xl'>{prod.title}</div>
            <div>
                <img src={prod.imageUrl} alt="" />
            </div>
            <div className='flex justify-between mt-6'>
                <p className='p-1 text-xl'>$ {prod.price}</p>
                <button className='bg-blue-700 rounded text-white p-1' onClick={() => addtheCartItems(prod)}>ADD TO CART</button>
            </div>
        </div>
    )
}

export default Product
