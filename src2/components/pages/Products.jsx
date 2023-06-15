import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { ImYoutube, ImSpotify } from 'react-icons/im'
import { SiFacebook } from 'react-icons/si'
import './store.css'

import { Link } from 'react-router-dom'
import Product from './Product'
const Products = () => {
    return (
        <div>
            <section className='bg-secondary' style={{ paddingBottom: '7rem' }}>
                <h1 style={{ fontSize: '7rem', fontFamily: 'italic' }} className='list-group-items mt-1 text-white text-center '>The Generics</h1>
            </section>

            <section style={{ marginTop: '3rem' }} >
                <div className="container-fluid m-auto">
                    <div className="row mt-5 gap-5 d-flex justify-content-center">
                        <Product />
                    </div>
                </div>
            </section>

            <footer className='bg-info mt-3 h-75 overflow-hidden'>
                <ul className='d-flex justify-content-evenly align-content-center'>
                    <li className='p-5 display-4 list-group-item' style={{ fontFamily: 'italic', color: 'white' }}>The Generics</li>
                    <li className='mt-5 list-group-item'><a href="https://www.youtube.com"><ImYoutube size={'60px'} /></a></li>
                    <li className='mt-5 list-group-item'><a href="https://www.spotify.com"><ImSpotify size={'60px'} /></a></li>
                    <li className='mt-5 list-group-item'><a href="https://www.facebook.com"><SiFacebook size={'60px'} /></a></li>
                </ul>
            </footer>
        </div>
    )
}

export default Products;