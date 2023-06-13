import React from 'react'
import { TiSocialYoutubeCircular } from 'react-icons/ti'
import { RxTwitterLogo } from 'react-icons/rx'
import { SiFacebook } from 'react-icons/si'
const Footer = () => {
    return (
        <div className='bg-sky-500 p-9' style={{marginTop:"8rem"}}>
            <div className='max-w-[1280px] mx-auto flex justify-between items-center'>
                <div className='text-8xl text-white my-5'>The Generics</div>
                <ul className='flex justify-around items-center gap-4'>
                    <li className='text-6xl'><TiSocialYoutubeCircular /></li>
                    <li className='text-6xl'><RxTwitterLogo /></li>
                    <li className='text-6xl'><SiFacebook /></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
