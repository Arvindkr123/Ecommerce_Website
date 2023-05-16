import React from 'react'
import './Home.css'
import { Container } from 'postcss'

const Home = () => {
    return (
        <>
            <header>
                <h1>The Generics</h1>
                <button className='btn'>Get Out Latest Album</button>
                <button id='play' className='btn'>►</button>
            </header>
            <section>
                <div className='row'>
                    <div className='col-6 m-auto'>
                        <h1 className='font-bold text-center'>Tours</h1>
                        <div>
                            <span>JUL19</span>
                            <span>TORONTO,ON</span>
                            <span>ON BUDWEISER STAGE</span>
                            <button>BUY TICKETS</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
