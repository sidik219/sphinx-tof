import React from 'react'
import Typed from 'react-typed';
import Discord from '../assets/discord.svg'
import Logo from '../assets/logo.png'

const Sphinx = () => {
    const [showModal, setShowModal] = React.useState(false);

    return (
        <div id='home' className='text-white componentBg'>
            <div className='max-w-[800px] mt-[-100px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <p className='text-[#bf1b47] font-bold p-2 drop-shadow-xl'>ADVENTURE WITH SACRIFICE CREW</p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold drop-shadow-xl'>PVX CREW</h1>
                <p className='md:text-3xl sm:text-2xl text-1xl font-bold md:py-6 drop-shadow-xl'>SERVER SCARLET</p>
                <div className="flex justify-center items-center">
                    <p className='md:text-5xl sm:text-4xl text-xl py-2'>Together we,</p>
                    <Typed className='md:text-5xl sm:text-4xl text-xl md:pl-4 pl-2 text-[#bf1b47]'
                        strings={['GEAR UP',
                            'JOIN OPERATION',
                            'VOID RIFT',
                            'FRONTIER CLASS']}
                        typeSpeed={120}
                        backSpeed={140}
                        loop
                    />
                </div>
                <p className='md:text-2xl text-l font-bold text-slate-400'>Kalian bisa melihat terlebih dahulu beberapa hal tentang crew kami. Jika kalian tertarik dengan crew kami, kalian bisa menghubungi kontak member yang tertera pada website.</p>
                <button
                    className='bg-[#bf1b47] hover:bg-[#f01c58] w-[170px] rounded-xl font-medium my-6 mx-auto py-2 text-white focus:outline-none focus:ring focus:ring-[#5865f2] flex drop-shadow-xl'
                    onClick={() => setShowModal(true)}
                >
                    <img className='w-[35px] ml-7 text-white' src={Discord} alt="/"/>
                    <p className='ml-2 my-2 font-bold'>DISCORD</p>
                </button>
                {showModal ? (
                    <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-2 mx-auto max-w-sm h-5/6">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <img className='w-[25px] mr-2 my-2 bg-transparent' src={Logo} alt="/"/>
                                    <h3 className="text-2xl font-semibold text-[#19212a] my-1">Sacrifice-ToF Discord</h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-slate-400 hover:text-[#19212a] float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-slate-400 hover:text-[#19212a] h-6 w-6 text-2xl block outline-none focus:outline-none">×</span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-4 flex-auto">
                                    <iframe className='' title='Sacrifice Discord' src="https://discord.com/widget?id=1008239483122102322&theme=dark" width="350" height="500" allowtransparency="true" frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                ) : null}
            </div>
        </div>
    )
}

export default Sphinx
