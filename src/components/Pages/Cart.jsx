import React from 'react'

const Cart = ({ item }) => {
    return (
        <ul  className='flex mt-3 items-center justify-around'>
            <li className='border-b-2 '>
                <div className='flex justify-around gap-3 items-center'>
                <img className='w-[90%] rounded' src={item.imageUrl} alt="" />
                <span>{item.title}</span>
                <span>${item.price}</span>
                <span><input type='text' className='w-[35%] text-center'  placeholder={item.quantity}/></span>
                <button className='bg-red-800 p-3'>REMOVE</button>
                </div>
            </li>
        </ul>
    )
}

export default Cart
