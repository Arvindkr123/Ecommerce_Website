import React from 'react'

const Product = ({ prod }) => {
    return (
        <div className='hover:scale-105 duration-500 ease-out'>
            <div className='text-xl'>{prod.title}</div>
            <div>
                <img src={prod.imageUrl} alt="" />
            </div>
            <div className='flex justify-between mt-6'>
                <p className='p-1 text-xl'>$ {prod.price}</p>
                <button className='bg-blue-700 rounded text-white p-1'>ADD TO CART</button>
            </div>
        </div>
    )
}

export default Product
