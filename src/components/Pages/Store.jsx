import React from 'react'
import Product from '../Product'
import { Link } from 'react-router-dom'

const Store = () => {
    const productsArr = [
        {
            id: 1,
            title: 'Colors',
            price: 100,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        },
        {
            id: 2,
            title: 'Black and white Colors',
            price: 50,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        },
        {
            id: 3,
            title: 'Yellow and Black Colors',
            price: 70,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        },
        {
            id: 4,
            title: 'Blue Color',
            price: 100,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        }
    ]



    return (
        <div className='w-full'>
            <div className='text-9xl text-white text-center bg-[#777] pt-2 pb-16 mt-1 font-mono'>The Generics</div>
            <h1 className='text-center m-8 text-3xl font-semibold'>MUSIC</h1>
            <div className='text-center m-8 flex justify-center flex-wrap gap-16'>
                {
                    productsArr.map((prod) => {
                        return <Link to={`/store/${prod.id}`}><Product key={prod.id} prod={prod} /></Link>
                    })
                }
            </div>
        </div>
    )
}

export default Store
