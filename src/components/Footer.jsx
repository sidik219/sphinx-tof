import React from 'react'
import Logo from '../assets/logo.png'

const Footer = () => {
    return (
        <div className='w-full py-6 px-4 text-white'>
            <div className='max-w-[1450px] max-auto grid lg:grid-cols-2'>
                <div className='lg:col-span-2 mx-auto'>
                    <div className='flex'>
                        <p>Made By.</p>
                        <img className='w-[25px] mx-px bg-transparent' src={Logo} alt="/"/>
                        <p>Sacrifice Team</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
