import React from 'react'
import { ImYoutube, ImSpotify } from 'react-icons/im'
import { SiFacebook } from 'react-icons/si'
import { Link } from 'react-router-dom'
const About = () => {
    return (
        <div>
            <section className='bg-secondary'>
                <ul className='list-group text-md-center'>
                    <li><h1 className='list-group-items mt-1 display-1 text-white' style={{ fontFamily: 'italic', fontSize: '7rem' }}>The Generics</h1></li>
                </ul>
            </section>
            <div className="mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-7">
                            <div>
                                <h3 className='h1 text-center text-uppercase mb-5 text-bg-light shadow'>About Us</h3>
                                <p className="medium-paragraph">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                    sed do eiusmod tempor incididunt ut labore et. Ut wisi enim ad minim veniam, quis nostrud.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.
                                    Ut wisi enim ad minim veniam, quis nostrud.
                                    Exerci tation ullamcorper suscipit <a href="#">lobortis nisl</a> ut aliquip ex ea commodo consequat.
                                    Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.
                                    Ut wisi enim ad minim veniam, quis nostrud.
                                </p>
                                <Link to='/contact' className='text-uppercase btn btn-success shadow'>Contact us</Link>
                            </div>
                        </div>
                        <div className="col-12 col-lg-5 about-us-box wow fadeInUp">
                            <img className='img-fluid rounded-3' src="https://prasadyash2411.github.io/ecom-website/img/Band%20Members.png" alt="about" data-at2x="assets/img/about/1.jpg" />
                        </div>
                    </div>
                </div>
            </div>
            <footer className='bg-info mt-3 h-75 overflow-hidden'>
                <ul className='d-flex justify-content-evenly align-content-center'>
                    <li className='p-5 display-4 list-group-item' style={{ fontFamily: 'italic', color: 'white' }}>The Generics</li>
                    <li className='mt-5 list-group-item'><a href="https://www.youtube.com"><ImYoutube size={'60px'} /></a></li>
                    <li className='mt-5 list-group-item'><a href="https://www.youtube.com"><ImSpotify size={'60px'} /></a></li>
                    <li className='mt-5 list-group-item'><a href="https://www.youtube.com"><SiFacebook size={'60px'} /></a></li>
                </ul>
            </footer>
        </div>
    )
}

export default About