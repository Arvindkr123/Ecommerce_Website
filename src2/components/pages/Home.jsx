import React from 'react'
import { CiPlay1 } from 'react-icons/ci'

const Home = () => {
    return (
        <div className='container-fluid'>
            <div className="row justify-content-evenly">
                <div className="col-md-12 col text-center bg-secondary text-white mt-1">
                    <h1 style={{ fontFamily: 'Libre Baskerville ' }} className='display-1'>The Generics</h1>
                    <button className='btn border-info p-3 m-4 text-white'>Get Our Latest Album</button><br />
                    <button className='btn border-info rounded-circle p-2 text-white m-3'><CiPlay1 size={100} /></button>
                </div>

                <div className="col-md-8 col m-5">
                    <div className="container-fluid text-center">
                        <h3 style={{ fontFamily: 'Libre Baskerville ' }} className='m-3'>TOURS</h3>
                        <ul className='list-group'>
                            <li className='list-group-item d-flex justify-content-around align-content-center'>
                                <span style={{ fontWeight: 800 }}>JUL16</span>
                                <span>DETROIT,</span>
                                <span>MI DTE ENERGY MUSIC THEATRE</span>
                                <span><button className='btn text-uppercase text-white btn-info'>Buy Tickets</button></span>
                            </li>
                            <li className='list-group-item d-flex justify-content-around align-content-center'>
                                <span style={{ fontWeight: 800 }}>JUL16</span>
                                <span>DETROIT,</span>
                                <span>MI DTE ENERGY MUSIC THEATRE</span>
                                <span><button className='btn text-uppercase text-white btn-info'>Buy Tickets</button></span>
                            </li>
                            <li className='list-group-item d-flex justify-content-around align-content-center'>
                                <span style={{ fontWeight: 800 }}>JUL16</span>
                                <span>DETROIT,</span>
                                <span>MI DTE ENERGY MUSIC THEATRE</span>
                                <span><button className='btn text-uppercase text-white btn-info'>Buy Tickets</button></span>
                            </li>
                            <li className='list-group-item d-flex justify-content-around align-content-center'>
                                <span style={{ fontWeight: 800 }}>JUL16</span>
                                <span>DETROIT,</span>
                                <span>MI DTE ENERGY MUSIC THEATRE</span>
                                <span><button className='btn text-uppercase text-white btn-info'>Buy Tickets</button></span>
                            </li>
                            <li className='list-group-item d-flex justify-content-around align-content-center'>
                                <span style={{ fontWeight: 800 }}>JUL16</span>
                                <span>DETROIT,</span>
                                <span>MI DTE ENERGY MUSIC THEATRE</span>
                                <span><button className='btn text-uppercase text-white btn-info'>Buy Tickets</button></span>
                            </li>
                            <li className='list-group-item d-flex justify-content-around align-content-center'>
                                <span style={{ fontWeight: 800 }}>JUL16</span>
                                <span>DETROIT,</span>
                                <span>MI DTE ENERGY MUSIC THEATRE</span>
                                <span><button className='btn text-uppercase text-white btn-info'>Buy Tickets</button></span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="container-fluid bg-info h-75 overflow-hidden">
                    <h1 className='display-2 p-5' style={{fontFamily:'cursive'}}>The Generics</h1>
                </div>

            </div>
        </div>
    )
}

export default Home
