import React, {useState} from 'react'
import { AiOutlineClose, AiOutlineSlack } from 'react-icons/ai'
import Logo from '../assets/logo-guild.png'
import ScrollToTop from "react-scroll-to-top";

const Navbar = () => {
    const [nav, setNav] = useState(true)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
            {/* <h1 className='w-full text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-l from-[#1F2937] to-[#bf1b47]'>Sacrifice</h1> */}
            <ScrollToTop
                smooth
                top='20'
                color='red'
                width='40'
                height='20'
            />
            <img className='w-[180px] drop-shadow-xl' src={Logo} alt="/"/>
            <ul className='hidden md:flex'>
                <li className='p-4 font-bold decoration-2 no-underline hover:underline cursor-pointer decoration-[#f01c58] text-white hover:text-[#f01c58] drop-shadow-xl'>
                    <a className='text-xl' href="#home">Home</a>
                </li>
                <li className='p-4 font-bold decoration-2 no-underline hover:underline cursor-pointer decoration-[#f01c58] text-white hover:text-[#f01c58] drop-shadow-xl'>
                    <a className='text-xl' href="#about">About</a>
                </li>
                <li className='p-4 font-bold decoration-2 no-underline hover:underline cursor-pointer decoration-[#f01c58] text-white hover:text-[#f01c58] drop-shadow-xl'>
                    <a className='text-xl' href="#contact">Contact</a>
                </li>
                <li className='ml-14 p-4 font-bold decoration-2 border-2 border-[#f01c58] hover:border-white rounded-xl cursor-pointer decoration-[#f01c58] text-[#f01c58] hover:text-white drop-shadow-xl'>
                    <a className='text-xl' href="#dev">Dev Team</a>
                </li>
            </ul>
            <div onClick={handleNav} className='block md:hidden fixed z-50 bg-[#bf1b47] rounded-md h-[40px] w-[40px] top-8 right-7'>
                {!nav ? <AiOutlineClose size={40} /> : <AiOutlineSlack size={40} />}
            </div>
            <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-slate-700 bg-gray-800 ease-in-out duration-500 z-50' : 'fixed left-[-100%]'}>
                {/* <h1 className='w-full text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-l from-[#1F2937] to-[#bf1b47] m-4'>Sacrifice</h1> */}
                <img className='w-[180px] m-6' src={Logo} alt="/"/>
                <ul className='uppercase p-4'>
                    <li className='p-4 font-bold border-b border-red-900 cursor-pointer'>
                        <a href="#home">Home</a>
                    </li>
                    <li className='p-4 font-bold border-b border-red-900 cursor-pointer'>
                        <a href="#about">About</a>
                    </li>
                    <li className='p-4 font-bold border-b border-red-900 cursor-pointer'>
                        <a href="#contact">Contact</a>
                    </li>
                    <li className='mt-14 p-4 font-bold cursor-pointer text-[#f01c58] text-center border-2 border-[#f01c58] rounded-xl'>
                        <a href="#dev">Dev Team</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
