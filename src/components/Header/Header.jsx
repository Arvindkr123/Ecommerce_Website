import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <ul className='bg-black text-uppercase  d-flex align-content-between justify-content-center gap-5'>
            <li>
                <Link to='/' exact>Home</Link>
            </li>
            <li>
                <Link to='/store' exact>Store</Link>
            </li>
            <li>
                <Link to='/about' exact>About</Link>
            </li>

        </ul>
    )
}

export default Header
