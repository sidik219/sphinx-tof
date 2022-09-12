import React, {useState} from 'react'
import Logo from '../assets/logo.png'

const Request = () => {
    const [showModal, setShowModal] = React.useState(false);

    // Send Request
    const [charName, setChar]       = useState("")
    const [discordName, setDiscord] = useState("")
    const [mainRole, setRole]       = useState("")
    const [cs, setCS]               = useState("")
    const [critical, setCrit]       = useState("")
    const [element, setEle]         = useState("")
    const [messages, setMessages]   = useState("")
    const [setLabel]                = useState("")
    
    const send = () => {
        if (charName && discordName && mainRole && cs && critical && element && messages) {
            const EWE = {
                "content": "Halo semua, izin gabung crew.",
                "embeds": [{
                    "color": "15548997",
                    "title": charName,
                    "author": {
                        "name": discordName,
                        "icon_url": 'https://i.imgur.com/kV9lZkI.gif'
                    },
                    "fields": [
                        {
                            "name": 'Main Role:',
                            "value": mainRole
                        },
                        {
                            "name": '\u200B',
                            "value": '\u200B'
                        },
                        {
                            "name": 'CS:',
                            "value": cs,
                            "inline": true
                        },
                        {
                            "name": 'Critical:',
                            "value": critical,
                            "inline": true
                        },
                        {
                            "name": 'Element:',
                            "value": element,
                            "inline": true
                        },
                    ],
                    "footer": {
                        // eslint-disable-next-line
                        "text": "Messages:" + " " + messages
                    },
                    "timestamp": new Date().toISOString()
                }]
            }

            fetch('https://discordapp.com/api/webhooks/1016571556220121158/4ZSI3CJKVExQzuNZE2-K-SlW0q6amoKbW-2gA7JSj3CWDVt8_eMAh_VBAhlrH4NgShCG', {
                method: 'POST',
                body: JSON.stringify(EWE),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => {
                setChar("")
                setDiscord("")
                setRole("")
                setCS("")
                setCrit("")
                setEle("")
                setMessages("")
            })

        } else {
            setLabel("Error Try Again!")
        }
    }

    return (
        <div className='w-full py-16 text-white px-4'>
            <div className='max-w-[1450px] max-auto grid lg:grid-cols-3'>
                <div className='lg:col-span-2 mx-auto md:py-16'>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold'>Sudah kepikiran untuk join?</h1>
                    <p>Jangan lupa send request dulu.</p>
                </div>
                <div className='my-6'>
                    <div className='flex flex-col sm:flex-row items-center justify-between w-full py-4'>
                        {/* Sementara Non Active Email, Entah Buat Apaan :v */}
                        {/* <input className='p-3 flex w-full rounded-xl text-black' type="email" placeholder='Enter Email' /> */}
                        <button
                            className='bg-[#bf1b47] hover:bg-[#f01c58] w-[215px] rounded-xl font-medium ml-4 my-6 px-6 py-3 text-[white] focus:outline-none focus:ring focus:ring-[#5865f2] drop-shadow-xl'
                            type='button'
                            onClick={() => setShowModal(true)}
                        >
                            <p className='font-bold'>SEND REQUEST</p>
                        </button>
                    </div>
                    {showModal ? (
                        <>
                        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                            <div className="relative w-auto my-2 mx-auto max-w-sm h-5/6">
                                {/*content*/}
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    {/*header*/}
                                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                        <img className='w-[25px] mr-2 my-2 bg-transparent' src={Logo} alt="/"/>
                                        <h3 className="text-2xl font-semibold text-[#19212a] my-1">Form Input</h3>
                                        <button
                                            className="p-1 ml-auto bg-transparent border-0 text-slate-400 hover:text-[#19212a] float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                            onClick={() => setShowModal(false)}
                                        >
                                            <span className="bg-transparent text-slate-400 hover:text-[#19212a] h-6 w-6 text-2xl block outline-none focus:outline-none">×</span>
                                        </button>
                                    </div>
                                    {/*body*/}
                                    <div className="relative p-6 flex-auto">
                                        <form>
                                            {/* Familiy Name & Character Name */}
                                            <div className="-mx-3 md:flex mb-2">
                                                <div className="md:w-full px-3">
                                                    <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="char-name">
                                                        Char Name
                                                    </label>
                                                    <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-1 px-4 mb-3" id="char-name" type="text" value={charName} onChange={e => setChar(e.target.value)} placeholder="Char Name" required/>
                                                </div>
                                                {/* <div className="md:w-1/2 px-3">
                                                    <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" for="character-name">
                                                        Character Name
                                                    </label>
                                                    <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-1 px-4 mb-3" id="character-name" type="text" placeholder="Character Name" required/>
                                                </div> */}
                                            </div>
                                            {/* Discord Name */}
                                            <div className="-mx-3 md:flex mb-2">
                                                <div className="md:w-full px-3">
                                                    <div className='flex'>
                                                        <label className="uppercase tracking-wide text-black text-xs font-bold mb-2 mr-2" htmlFor="discord-name">
                                                            Discord Name
                                                        </label>
                                                        <span className="text-red-500 text-xs italic">
                                                            *Gi#1473
                                                        </span>
                                                    </div>
                                                    <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-1 px-4 mb-3" id="discord-name" type="text" value={discordName} onChange={e => setDiscord(e.target.value)} placeholder="Discord Name" required/>
                                                </div>
                                            </div>
                                            {/* Main Class */}
                                            <div className="-mx-3 md:flex mb-2">
                                                <div className="md:w-full px-3">
                                                    <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="main-role">
                                                        Main Role
                                                    </label>
                                                    <div>
                                                        <select className="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded" id="main-role" value={mainRole} onChange={e => setRole(e.target.value)} required>
                                                            <option value="" disabled>Pilih Role</option>
                                                            <option value="DPS">DPS</option>
                                                            <option value="TANKER">TANKER</option>
                                                            <option value="HEALER">HEALER</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* AP & AAP & DP */}
                                            <div className="-mx-3 md:flex mb-2">
                                                <div className="md:w-1/2 px-3">
                                                    <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="cs">
                                                        CS
                                                    </label>
                                                    <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-1 px-4 mb-3" id="cs" type="number" min="1" value={cs} onChange={e => setCS(e.target.value)} placeholder="CS" required/>
                                                </div>
                                                <div className="md:w-1/2 px-3">
                                                    <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="critical">
                                                        Critical
                                                    </label>
                                                    <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-1 px-4 mb-3" id="critical" type="number" min="1" value={critical} onChange={e => setCrit(e.target.value)} placeholder="Critical" required/>
                                                </div>
                                                <div className="md:w-1/2 px-3">
                                                    <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="element">
                                                        Element
                                                    </label>
                                                    <div>
                                                        <select className="w-full bg-gray-200 text-black border border-gray-200 rounded py-1 px-4 mb-3" id="element" value={element} onChange={e => setEle(e.target.value)} required>
                                                            <option value="" disabled>Pilih Element</option>
                                                            <option value="VOLT">VOLT</option>
                                                            <option value="ICE">ICE</option>
                                                            <option value="FLAME">FLAME</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Messages */}
                                            <div className="-mx-3 md:flex mb-2">
                                                <div className="md:w-full px-3 mb-6 md:mb-0">
                                                    <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="messages">
                                                        Messages
                                                    </label>
                                                    <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-1 px-4 mb-3" id="messages" type="text" value={messages} onChange={e => setMessages(e.target.value)} placeholder="Messages" required/>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    {/*footer*/}
                                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                        <button
                                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                        >Cancel
                                        </button>
                                        <button
                                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={send}
                                        >Send Request
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
                    ): null}
                    {/* <p>Jangan lupa kirim request dulu.</p> */}
                </div>
            </div>
        </div>
    )
}

export default Request
