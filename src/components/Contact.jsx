import React, {useRef} from 'react'
import Discord from '../assets/discord.svg'
import mia from '../assets/mia.png'
import Logo from '../assets/logo.png'
import Chat from '../assets/icon-chat.png'
// Firebase
import {auth} from '../firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
// SignIn
import SignIn from './SignIn'
import LogOut from './LogOut'
// Chat
import ChatRequest from './Chat'
// Chat Button
import SendMessage from './SendMessage'

const Contact = () => {
    const [showModal, setShowModal] = React.useState(false);
    const scrollChat = useRef()

    // Firebase
    const [user] = useAuthState(auth)
    console.log(user)

    return (
        <div id='contact' className='w-full py-[10rem] px-4 bg-white'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-4 gap-8'>
                <div className='mx-auto text-center flex flex-col justify-center items-center'>
                    <h1 className='text-[#bf1b47] md:text-4xl sm:text-3xl text-2xl font-bold py-2 mx-auto drop-shadow-xl'>CONTACT MEMBER</h1>
                    <p className='md:text-2xl text-l text-slate-500'>Kalian bisa mengontak mereka terlebih dahulu jika berniat untuk bergabung dengan crew.</p>
                    <button
                        className="animate-bounce flex bg-[#bf1b47] hover:bg-[#f01c58] w-30 rounded-xl font-medium mx-auto my-6 px-6 py-3 text-[white] focus:outline-none focus:ring focus:ring-[#5865f2] drop-shadow-xl"
                        type="button"
                        onClick={() => setShowModal(true)}
                    >
                        <img className='w-[33px] mr-2 bg-transparent' src={Chat} alt="/" />
                        <p className='font-bold py-2'>CHAT REQUEST</p>
                    </button>
                </div>
                {/* Chat Request */}
                {showModal ? (
                    <>
                        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                            <div className="relative w-auto my-2 mx-auto max-w-sm h-5/6">
                                {/*content*/}
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    {/*header*/}
                                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                        <img className='w-[25px] mr-2 my-2 bg-transparent' src={Logo} alt="/" />
                                        <h3 className="text-2xl font-semibold text-[#19212a] my-1">Chat Request</h3>
                                        <button
                                            className="p-1 ml-auto bg-transparent border-0 text-slate-400 hover:text-[#19212a] float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                            onClick={() => setShowModal(false)}
                                        >
                                            <span className="bg-transparent text-slate-400 hover:text-[#19212a] h-6 w-6 text-2xl block outline-none focus:outline-none">×</span>
                                        </button>
                                    </div>
                                    {/*body*/}
                                    <div className="relative p-6 flex-auto mb-4">
                                        {/* Chat Request */}
                                        <div className="max-w-[728px] mx-auto text-center overflow-x-hidden overflow-y-auto">
                                            <section className="flex flex-col h-[50vh] w-[40vh] relative">
                                                {user ? <ChatRequest /> : null}
                                            </section>
                                        </div>
                                        {/* Chat Button */}
                                        <div className="max-w-[728px] mx-auto text-center mt-12">
                                            {user ? <SendMessage scrollChat={scrollChat} /> : null}
                                        </div>
                                    </div>
                                    {/*footer*/}
                                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                        {user ? <LogOut /> : <SignIn />}
                                        <button
                                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                        >Cancel
                                        </button>
                                    </div>
                                    <div>
                                        <label htmlFor="label"></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                ) : null}
                {/* SATU */}
                <div className='w-full bg-[#19212a] shadow-xl flex flex-col p-4 my-4 rounded-xl hover:scale-105 duration-300 mx-auto'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-transparent rounded-xl' src={mia} alt="/" />
                    <h2 className='text-xl font-bold text-center py-6 text-white'>Sphinx</h2>
                    <p className='text-center text-2xl font-bold text-white'>TANKER</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-4 text-white'>COMMANDER</p>
                        <p className='py-2 border-b mx-8 text-white'>Tetap putus asa dan selalu menyerah.</p>
                        {/* <p className='py-2 border-b mx-8 text-white'>ErProxy#9619</p> */}
                    </div>
                    <button className='flex bg-[#bf1b47] w-full rounded-xl font-medium mx-auto my-6 px-6 py-3 text-[white]'>
                        <p className='font-bold mx-auto flex'>
                            <img className='w-[30px] text-white mr-2' src={Discord} alt="/" />ErProxy#9619
                        </p>
                    </button>
                </div>
                {/* DUA */}
                <div className='w-full bg-[#19212a] shadow-xl flex flex-col p-4 my-4 rounded-xl hover:scale-105 duration-300 mx-auto'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-transparent rounded-xl' src={mia} alt="/" />
                    <h2 className='text-xl font-bold text-center py-6 text-white'>Fibel</h2>
                    <p className='text-center text-2xl font-bold text-white'>DPS</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-4 text-white'>DEPUTY</p>
                        <p className='py-2 border-b mx-8 text-white'>Diam Menjadi Beban, Bergerak Nyusahin Orang.</p>
                        {/* <p className='py-2 border-b mx-8 text-white'>Gi#1473</p> */}
                    </div>
                    <button className='flex bg-[#bf1b47] w-full rounded-xl font-medium mx-auto my-6 px-6 py-3 text-[white]'>
                        <p className='font-bold mx-auto flex'>
                            <img className='w-[30px] text-white mr-2' src={Discord} alt="/" />Gi#1473
                        </p>
                    </button>
                </div>
                {/* TIGA */}
                <div className='w-full bg-[#19212a] shadow-xl flex flex-col p-4 my-4 rounded-xl hover:scale-105 duration-300 mx-auto'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-transparent rounded-xl' src={mia} alt="/" />
                    <h2 className='text-xl font-bold text-center py-6 text-white'>Elsteins</h2>
                    <p className='text-center text-2xl font-bold text-white'>DPS</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-4 text-white'>DEPUTY</p>
                        <p className='py-2 border-b mx-8 text-white'>No Quote</p>
                        {/* <p className='py-2 border-b mx-8 text-white'>Mineva#3524</p> */}
                    </div>
                    <button className='flex bg-[#bf1b47] w-full rounded-xl font-medium mx-auto my-6 px-6 py-3 text-[white]'>
                        <p className='font-bold mx-auto flex'>
                            <img className='w-[30px] text-white mr-2' src={Discord} alt="/" />Mineva#3524
                        </p>
                    </button>
                </div>
                {/* EMPAT */}
                <div className='w-full bg-[#19212a] shadow-xl flex flex-col p-4 my-4 rounded-xl hover:scale-105 duration-300 mx-auto'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-transparent rounded-xl' src={mia} alt="/" />
                    <h2 className='text-xl font-bold text-center py-6 text-white'>Dealt</h2>
                    <p className='text-center text-2xl font-bold text-white'>DPS</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-4 text-white'>OFFICER</p>
                        <p className='py-2 border-b mx-8 text-white'>No Quote</p>
                        {/* <p className='py-2 border-b mx-8 text-white'>Griseo#8295</p> */}
                    </div>
                    <button className='flex bg-[#bf1b47] w-full rounded-xl font-medium mx-auto my-6 px-6 py-3 text-[white]'>
                        <p className='font-bold mx-auto flex'>
                            <img className='w-[30px] text-white mr-2' src={Discord} alt="/" />Griseo#8295
                        </p>
                    </button>
                </div>
                {/* LIMA */}
                <div className='w-full bg-[#19212a] shadow-xl flex flex-col p-4 my-4 rounded-xl hover:scale-105 duration-300 mx-auto'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-transparent rounded-xl' src={mia} alt="/" />
                    <h2 className='text-xl font-bold text-center py-6 text-white'>Lethal</h2>
                    <p className='text-center text-2xl font-bold text-white'>DPS</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-4 text-white'>OFFICER</p>
                        <p className='py-2 border-b mx-8 text-white'>No Quote</p>
                        {/* <p className='py-2 border-b mx-8 text-white'>Lethal#9659</p> */}
                    </div>
                    <button className='flex bg-[#bf1b47] w-full rounded-xl font-medium mx-auto my-6 px-6 py-3 text-[white]'>
                        <p className='font-bold mx-auto flex'>
                            <img className='w-[30px] text-white mr-2' src={Discord} alt="/" />Lethal#9659
                        </p>
                    </button>
                </div>
                {/* ENAM */}
                <div className='w-full bg-[#19212a] shadow-xl flex flex-col p-4 my-4 rounded-xl hover:scale-105 duration-300 mx-auto'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-transparent rounded-xl' src={mia} alt="/" />
                    <h2 className='text-xl font-bold text-center py-6 text-white'>Rail</h2>
                    <p className='text-center text-2xl font-bold text-white'>TANKER</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-4 text-white'>OFFICER</p>
                        <p className='py-2 border-b mx-8 text-white'>No Quote</p>
                        {/* <p className='py-2 border-b mx-8 text-white'>`﷽`#4647</p> */}
                    </div>
                    <button className='flex bg-[#bf1b47] w-full rounded-xl font-medium mx-auto my-6 px-6 py-3 text-[white]'>
                        <p className='font-bold mx-auto flex'>
                            <img className='w-[30px] text-white mr-2' src={Discord} alt="/" />`﷽`#4647
                        </p>
                    </button>
                </div>
                {/* TUJUH */}
                <div className='w-full bg-[#19212a] shadow-xl flex flex-col p-4 my-4 rounded-xl hover:scale-105 duration-300 mx-auto'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-transparent rounded-xl' src={mia} alt="/" />
                    <h2 className='text-xl font-bold text-center py-6 text-white'>Benks</h2>
                    <p className='text-center text-2xl font-bold text-white'>DPS</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-4 text-white'>OFFICER</p>
                        <p className='py-2 border-b mx-8 text-white'>No Quote</p>
                        {/* <p className='py-2 border-b mx-8 text-white'>Benks#0100</p> */}
                    </div>
                    <button className='flex bg-[#bf1b47] w-full rounded-xl font-medium mx-auto my-6 px-6 py-3 text-[white]'>
                        <p className='font-bold mx-auto flex'>
                            <img className='w-[30px] text-white mr-2' src={Discord} alt="/" />Benks#0100
                        </p>
                    </button>
                </div>
                {/* DELAPAN */}
                <div className='w-full bg-[#19212a] shadow-xl flex flex-col p-4 my-4 rounded-xl hover:scale-105 duration-300 mx-auto'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-transparent rounded-xl' src={mia} alt="/" />
                    <h2 className='text-xl font-bold text-center py-6 text-white'>Vikala</h2>
                    <p className='text-center text-2xl font-bold text-white'>DPS</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-4 text-white'>OFFICER</p>
                        <p className='py-2 border-b mx-8 text-white'>No Quote</p>
                        {/* <p className='py-2 border-b mx-8 text-white'>kimaruru#2187</p> */}
                    </div>
                    <button className='flex bg-[#bf1b47] w-full rounded-xl font-medium mx-auto my-6 px-6 py-3 text-[white]'>
                        <p className='font-bold mx-auto flex'>
                            <img className='w-[30px] text-white mr-2' src={Discord} alt="/" />kimaruru#2187
                        </p>
                    </button>
                </div>
                {/* SEMBILAN */}
                <div className='w-full bg-[#19212a] shadow-xl flex flex-col p-4 my-4 rounded-xl hover:scale-105 duration-300 mx-auto'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-transparent rounded-xl' src={mia} alt="/" />
                    <h2 className='text-xl font-bold text-center py-6 text-white'>N 7</h2>
                    <p className='text-center text-2xl font-bold text-white'>DPS</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-4 text-white'>OFFICER</p>
                        <p className='py-2 border-b mx-8 text-white'>No Quote</p>
                        {/* <p className='py-2 border-b mx-8 text-white'>C H AN#3777</p> */}
                    </div>
                    <button className='flex bg-[#bf1b47] w-full rounded-xl font-medium mx-auto my-6 px-6 py-3 text-[white]'>
                        <p className='font-bold mx-auto flex'>
                            <img className='w-[30px] text-white mr-2' src={Discord} alt="/" />C H AN#3777
                        </p>
                    </button>
                </div>
                {/* SEPULUH */}
                <div className='w-full bg-[#19212a] shadow-xl flex flex-col p-4 my-4 rounded-xl hover:scale-105 duration-300 mx-auto'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-transparent rounded-xl' src={mia} alt="/" />
                    <h2 className='text-xl font-bold text-center py-6 text-white'>Violet</h2>
                    <p className='text-center text-2xl font-bold text-white'>DPS</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-4 text-white'>OFFICER</p>
                        <p className='py-2 border-b mx-8 text-white'>No Quote</p>
                        {/* <p className='py-2 border-b mx-8 text-white'>Ngiio#1101</p> */}
                    </div>
                    <button className='flex bg-[#bf1b47] w-full rounded-xl font-medium mx-auto my-6 px-6 py-3 text-[white]'>
                        <p className='font-bold mx-auto flex'>
                            <img className='w-[30px] text-white mr-2' src={Discord} alt="/" />Ngiio#1101
                        </p>
                    </button>
                </div>
                {/* SEBELAS */}
                <div className='w-full bg-[#19212a] shadow-xl flex flex-col p-4 my-4 rounded-xl hover:scale-105 duration-300 mx-auto'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-transparent rounded-xl' src={mia} alt="/" />
                    <h2 className='text-xl font-bold text-center py-6 text-white'>MizuAi</h2>
                    <p className='text-center text-2xl font-bold text-white'>DPS</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-4 text-white'>OFFICER</p>
                        <p className='py-2 border-b mx-8 text-white'>No Quote</p>
                        {/* <p className='py-2 border-b mx-8 text-white'>Mudya#6177</p> */}
                    </div>
                    <button className='flex bg-[#bf1b47] w-full rounded-xl font-medium mx-auto my-6 px-6 py-3 text-[white]'>
                        <p className='font-bold mx-auto flex'>
                            <img className='w-[30px] text-white mr-2' src={Discord} alt="/" />Mudya#6177
                        </p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Contact
