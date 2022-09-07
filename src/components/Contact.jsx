import React from 'react'
import Discord from '../assets/discord.svg'
import Profil1 from '../assets/profil-1.png'
import Profil2 from '../assets/profil-2.png'
import Profil3 from '../assets/profil-3.png'
import Profil4 from '../assets/profil-4.png'
import Profil5 from '../assets/profil-5.png'
import Profil6 from '../assets/profil-6.png'
import Profil7 from '../assets/profil-7.png'
import Profil8 from '../assets/profil-8.png'
import Profil9 from '../assets/profil-9.png'

const Contact = () => {
    return (
        <div id='contact' className='w-full py-[10rem] px-4 bg-white'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-4 gap-8'>
                <div className='mx-auto text-center flex flex-col justify-center items-center'>
                    <h1 className='text-[#bf1b47] md:text-4xl sm:text-3xl text-2xl font-bold py-2 mx-auto drop-shadow-xl'>CONTACT MEMBER</h1>
                    <p className='md:text-2xl text-l text-slate-500'>Kalian bisa mengontak mereka terlebih dahulu jika berniat untuk bergabung dengan crew.</p>
                </div>
                {/* SATU */}
                <div className='w-full bg-[#19212a] shadow-xl flex flex-col p-4 my-4 rounded-xl hover:scale-105 duration-300 mx-auto'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-transparent rounded-xl' src={Profil1} alt="/" />
                    <h2 className='text-xl font-bold text-center py-6 text-white'>Sphinx</h2>
                    <p className='text-center text-2xl font-bold text-white'>TANKER</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-4 text-white'>COMMANDER</p>
                        <p className='py-2 border-b mx-8 text-white'>Tetap putus asa dan selalu menyerah.</p>
                        {/* <p className='py-2 border-b mx-8 text-white'>ErProxy#9619</p> */}
                    </div>
                    <button className='flex bg-[#bf1b47] hover:bg-[#f01c58] w-full rounded-xl font-medium mx-auto my-6 px-6 py-3 text-[white]'>
                        <p className='font-bold mx-auto flex'>
                            <img className='w-[30px] text-white mr-2' src={Discord} alt="/" />ErProxy#9619
                        </p>
                    </button>
                </div>
                {/* DUA */}
                <div className='w-full bg-[#19212a] shadow-xl flex flex-col p-4 my-4 rounded-xl hover:scale-105 duration-300 mx-auto'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-transparent rounded-xl' src={Profil2} alt="/" />
                    <h2 className='text-xl font-bold text-center py-6 text-white'>Fibel</h2>
                    <p className='text-center text-2xl font-bold text-white'>DPS</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-4 text-white'>DEPUTY</p>
                        <p className='py-2 border-b mx-8 text-white'>Diam Menjadi Beban, Bergerak Nyusahin Orang.</p>
                        {/* <p className='py-2 border-b mx-8 text-white'>Gi#1473</p> */}
                    </div>
                    <button className='flex bg-[#bf1b47] hover:bg-[#f01c58] w-full rounded-xl font-medium mx-auto my-6 px-6 py-3 text-[white]'>
                        <p className='font-bold mx-auto flex'>
                            <img className='w-[30px] text-white mr-2' src={Discord} alt="/" />Gi#1473
                        </p>
                    </button>
                </div>
                {/* TIGA */}
                <div className='w-full bg-[#19212a] shadow-xl flex flex-col p-4 my-4 rounded-xl hover:scale-105 duration-300 mx-auto'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-transparent rounded-xl' src={Profil3} alt="/" />
                    <h2 className='text-xl font-bold text-center py-6 text-white'>PVP</h2>
                    <p className='text-center text-2xl font-bold text-white'>DPS</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-4 text-white'>DEPUTY</p>
                        <p className='py-2 border-b mx-8 text-white'>Bantai semuanya sampai tak tersisa.</p>
                        {/* <p className='py-2 border-b mx-8 text-white'>EXALTED#9375</p> */}
                    </div>
                    <button className='flex bg-[#bf1b47] hover:bg-[#f01c58] w-full rounded-xl font-medium mx-auto my-6 px-6 py-3 text-[white]'>
                        <p className='font-bold mx-auto flex'>
                            <img className='w-[30px] text-white mr-2' src={Discord} alt="/" />EXALTED#9375
                        </p>
                    </button>
                </div>
                {/* EMPAT */}
                <div className='w-full bg-[#19212a] shadow-xl flex flex-col p-4 my-4 rounded-xl hover:scale-105 duration-300 mx-auto'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-transparent rounded-xl' src={Profil4} alt="/" />
                    <h2 className='text-xl font-bold text-center py-6 text-white'>Elsteins</h2>
                    <p className='text-center text-2xl font-bold text-white'>DPS</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-4 text-white'>CADRE</p>
                        <p className='py-2 border-b mx-8 text-white'>Penjahat Kelamin</p>
                        {/* <p className='py-2 border-b mx-8 text-white'>Mineva#3524</p> */}
                    </div>
                    <button className='flex bg-[#bf1b47] hover:bg-[#f01c58] w-full rounded-xl font-medium mx-auto my-6 px-6 py-3 text-[white]'>
                        <p className='font-bold mx-auto flex'>
                            <img className='w-[30px] text-white mr-2' src={Discord} alt="/" />Mineva#3524
                        </p>
                    </button>
                </div>
                {/* LIMA */}
                <div className='w-full bg-[#19212a] shadow-xl flex flex-col p-4 my-4 rounded-xl hover:scale-105 duration-300 mx-auto'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-transparent rounded-xl' src={Profil5} alt="/" />
                    <h2 className='text-xl font-bold text-center py-6 text-white'>Dealt</h2>
                    <p className='text-center text-2xl font-bold text-white'>DPS</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-4 text-white'>CADRE</p>
                        <p className='py-2 border-b mx-8 text-white'>Penjahat Kelamin</p>
                        {/* <p className='py-2 border-b mx-8 text-white'>Griseo#8295</p> */}
                    </div>
                    <button className='flex bg-[#bf1b47] hover:bg-[#f01c58] w-full rounded-xl font-medium mx-auto my-6 px-6 py-3 text-[white]'>
                        <p className='font-bold mx-auto flex'>
                            <img className='w-[30px] text-white mr-2' src={Discord} alt="/" />Griseo#8295
                        </p>
                    </button>
                </div>
                {/* ENAM */}
                <div className='w-full bg-[#19212a] shadow-xl flex flex-col p-4 my-4 rounded-xl hover:scale-105 duration-300 mx-auto'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-transparent rounded-xl' src={Profil6} alt="/" />
                    <h2 className='text-xl font-bold text-center py-6 text-white'>Lethal</h2>
                    <p className='text-center text-2xl font-bold text-white'>DPS</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-4 text-white'>CADRE</p>
                        <p className='py-2 border-b mx-8 text-white'>Penjahat Kelamin</p>
                        {/* <p className='py-2 border-b mx-8 text-white'>Lethal#9659</p> */}
                    </div>
                    <button className='flex bg-[#bf1b47] hover:bg-[#f01c58] w-full rounded-xl font-medium mx-auto my-6 px-6 py-3 text-[white]'>
                        <p className='font-bold mx-auto flex'>
                            <img className='w-[30px] text-white mr-2' src={Discord} alt="/" />Lethal#9659
                        </p>
                    </button>
                </div>
                {/* TUJUH */}
                <div className='w-full bg-[#19212a] shadow-xl flex flex-col p-4 my-4 rounded-xl hover:scale-105 duration-300 mx-auto'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-transparent rounded-xl' src={Profil7} alt="/" />
                    <h2 className='text-xl font-bold text-center py-6 text-white'>Rail</h2>
                    <p className='text-center text-2xl font-bold text-white'>DPS</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-4 text-white'>CADRE</p>
                        <p className='py-2 border-b mx-8 text-white'>Penjahat Kelamin</p>
                        {/* <p className='py-2 border-b mx-8 text-white'>`﷽`#4647</p> */}
                    </div>
                    <button className='flex bg-[#bf1b47] hover:bg-[#f01c58] w-full rounded-xl font-medium mx-auto my-6 px-6 py-3 text-[white]'>
                        <p className='font-bold mx-auto flex'>
                            <img className='w-[30px] text-white mr-2' src={Discord} alt="/" />`﷽`#4647
                        </p>
                    </button>
                </div>
                {/* DELAPAN */}
                <div className='w-full bg-[#19212a] shadow-xl flex flex-col p-4 my-4 rounded-xl hover:scale-105 duration-300 mx-auto'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-transparent rounded-xl' src={Profil8} alt="/" />
                    <h2 className='text-xl font-bold text-center py-6 text-white'>Benks</h2>
                    <p className='text-center text-2xl font-bold text-white'>DPS</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-4 text-white'>CADRE</p>
                        <p className='py-2 border-b mx-8 text-white'>Penjahat Kelamin</p>
                        {/* <p className='py-2 border-b mx-8 text-white'>Benks#0100</p> */}
                    </div>
                    <button className='flex bg-[#bf1b47] hover:bg-[#f01c58] w-full rounded-xl font-medium mx-auto my-6 px-6 py-3 text-[white]'>
                        <p className='font-bold mx-auto flex'>
                            <img className='w-[30px] text-white mr-2' src={Discord} alt="/" />Benks#0100
                        </p>
                    </button>
                </div>
                {/* SEMBILAN */}
                <div className='w-full bg-[#19212a] shadow-xl flex flex-col p-4 my-4 rounded-xl hover:scale-105 duration-300 mx-auto'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-transparent rounded-xl' src={Profil9} alt="/" />
                    <h2 className='text-xl font-bold text-center py-6 text-white'>Vikala</h2>
                    <p className='text-center text-2xl font-bold text-white'>DPS</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-4 text-white'>CADRE</p>
                        <p className='py-2 border-b mx-8 text-white'>Penjahat Kelamin</p>
                        {/* <p className='py-2 border-b mx-8 text-white'>kimaruru#2187</p> */}
                    </div>
                    <button className='flex bg-[#bf1b47] hover:bg-[#f01c58] w-full rounded-xl font-medium mx-auto my-6 px-6 py-3 text-[white]'>
                        <p className='font-bold mx-auto flex'>
                            <img className='w-[30px] text-white mr-2' src={Discord} alt="/" />kimaruru#2187
                        </p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Contact
