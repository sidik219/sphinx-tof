import React from 'react'
import { AiOutlineSwapRight } from 'react-icons/ai'
import Sacrifice1 from '../assets/sacrifice-1.png'
import Sacrifice2 from '../assets/sacrifice-2.png'
import Sacrifice3 from '../assets/sacrifice-3.png'
import Sacrifice4 from '../assets/sacrifice-4.png'

const About = () => {
    return (
        <div id='about' className='w-full bg-white py-4 px-4'>
            <div className='mx-auto text-center flex flex-col justify-center items-center py-16'>
                <h1 className='text-[#bf1b47] md:text-4xl sm:text-3xl text-2xl font-bold py-2 mx-auto drop-shadow-xl'>ABOUT CREW</h1>
                <p className='md:text-2xl text-l text-slate-500 py-4'>COMING SOON . . .</p>
            </div>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[500px] mx-auto my-4 drop-shadow-xl hover:scale-105 duration-300' src={Sacrifice1} alt="/" />
                <img className='w-[500px] mx-auto my-4 drop-shadow-xl hover:scale-105 duration-300' src={Sacrifice2} alt="/" />
                <img className='w-[500px] mx-auto my-4 drop-shadow-xl hover:scale-105 duration-300' src={Sacrifice3} alt="/" />
                <img className='w-[500px] mx-auto my-4 drop-shadow-xl hover:scale-105 duration-300' src={Sacrifice4} alt="/" />
                <div className='flex flex-col justify-center md:mx-auto md:my-8'>
                    <p className='text-[#bf1b47] md:text-4xl sm:text-3xl text-2xl font-bold py-2 md:mx-auto drop-shadow-xl'>CREW INFORMATION</p>
                    <div className='px-2'>
                        <ul className='uppercase p-4'>
                            <li className='text-slate-500 font-bold flex'>
                                <AiOutlineSwapRight size={20} className="text-emerald-500 mr-2" />No CS Requirement
                            </li>
                            <li className='text-slate-500 font-bold flex'>
                                <AiOutlineSwapRight size={20} className="text-emerald-500 mr-2" />Crew Mission & Donation <span className="text-xs p-1">(<span className='text-red-500'>Must do</span>)</span>
                            </li>
                            <li className='text-slate-500 font-bold flex'>
                                <AiOutlineSwapRight size={20} className="text-emerald-500 mr-2" />JO, VR & FH With Crew
                            </li>
                            <li className='text-slate-500 font-bold flex'>
                                <AiOutlineSwapRight size={20} className="text-emerald-500 mr-2" />Coming soon . . .
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='flex flex-col justify-center md:mx-auto'>
                    <h1 className='text-[#bf1b47] md:text-4xl sm:text-3xl text-2xl font-bold py-2 md:mx-auto drop-shadow-xl'>OUR ASSETS</h1>
                    <div className='px-2'>
                        <ul className='uppercase p-4'>
                            <li className='text-slate-500 font-bold flex'>
                                <AiOutlineSwapRight size={20} className="text-emerald-500 mr-2" />Base lvl [2]
                            </li>
                            <li className='text-slate-500 font-bold flex'>
                                <AiOutlineSwapRight size={20} className="text-emerald-500 mr-2" />Treasury lvl [2]
                            </li>
                            <li className='text-slate-500 font-bold flex'>
                                <AiOutlineSwapRight size={20} className="text-emerald-500 mr-2" />Store lvl [1]
                            </li>
                            <li className='text-slate-500 font-bold flex'>
                                <AiOutlineSwapRight size={20} className="text-emerald-500 mr-2" />Coming soon . . .
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <div className='mx-auto text-center flex flex-col justify-center items-center'>
                <button className='bg-[#bf1b47] w-[200px] rounded-xl font-medium my-6 mx-auto md:mx-0 py-3 text-[white]'>JOIN US</button>
            </div> */}
        </div>
    )
}

export default About
