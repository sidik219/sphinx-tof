import React from 'react'
import Sacrifice1 from '../assets/sacrifice-1.JPG'
import Sacrifice2 from '../assets/sacrifice-2.PNG'
import Sacrifice3 from '../assets/sacrifice-3.JPG'
import Sacrifice4 from '../assets/sacrifice-4.JPG'

const About = () => {
    return (
        <div id='about' className='w-full bg-white py-4 px-4'>
            <div className='mx-auto text-center flex flex-col justify-center items-center py-16'>
                <h1 className='text-[#bf1b47] md:text-4xl sm:text-3xl text-2xl font-bold py-2 mx-auto drop-shadow-xl'>ABOUT GUILD</h1>
                <p className='md:text-2xl text-l text-slate-500 py-4'>Gak tahu gan, bebas gmna kalian aja.</p>
            </div>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[500px] mx-auto my-4 drop-shadow-xl' src={Sacrifice1} alt="/" />
                <img className='w-[500px] mx-auto my-4 drop-shadow-xl' src={Sacrifice2} alt="/" />
                <img className='w-[500px] mx-auto my-4 drop-shadow-xl' src={Sacrifice3} alt="/" />
                <img className='w-[500px] mx-auto my-4 drop-shadow-xl' src={Sacrifice4} alt="/" />
                <div className='flex flex-col justify-center md:mx-auto md:my-8'>
                    <p className='text-[#bf1b47] md:text-4xl sm:text-3xl text-2xl font-bold py-2 md:mx-auto drop-shadow-xl'>GUILD INFORMATION</p>
                    <div className='px-2'>
                        <ul className='uppercase p-4'>
                            <li className='text-slate-500 font-bold flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>No CS Requirement
                            </li>
                            <li className='text-slate-500 font-bold flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>Crew Mission & Donation (<span className='text-red-500'>Must do</span>)
                            </li>
                            <li className='text-slate-500 font-bold flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>Coming soon . . .
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='flex flex-col justify-center md:mx-auto'>
                    <h1 className='text-[#bf1b47] md:text-4xl sm:text-3xl text-2xl font-bold py-2 md:mx-auto drop-shadow-xl'>OUR ASSETS</h1>
                    <div className='px-2'>
                        <ul className='uppercase p-4'>
                            <li className='text-slate-500 font-bold flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>Base lvl [2]
                            </li>
                            <li className='text-slate-500 font-bold flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>Treasury lvl [2]
                            </li>
                            <li className='text-slate-500 font-bold flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>Store lvl [1]
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
