import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <div className='bg-black flex text-white justify-between items-center'>
            <ul className='flex justify-center w-full text-2xl gap-5 m-2 '>
                <Link className='hover:underline' to='/'>HOME</Link>
                <Link className='hover:underline' to='/store'>STORE</Link>
                <Link className='hover:underline' to='/about'>ABOUT</Link>
            </ul>
            <div className='m-5 text-2xl relative'>
                <p className=''>cart <span className='absolute -top-2'>0</span></p>
            </div>
        </div>
    )

}

export default Header
