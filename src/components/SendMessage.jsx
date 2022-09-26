import React, {useState} from 'react'
import {AiOutlineSend} from 'react-icons/ai'
import {auth, db} from '../firebase'
import {addDoc, collection, serverTimestamp} from 'firebase/firestore'

const style = {
    form: `h-14 w-full max-w-[728px] flex text-md absolute bottom-0`,
    input: `w-[72%] max-w-[728px] text-md p-3 bg-gray-900 text-white outline-none border-none`,
    button: `w-[15%] flex bg-emerald-500 hover:bg-emerald-400 active:bg-gray-600 text-white font-bold p-4`,
}

const SendMessage = ({scrollChat}) => {
    const [kirim, setKirim] = useState('')
    const sendMessage = async (e) => {
        e.preventDefault()
        // Cek kalau form kosong akan muncul alert
        if (kirim === '') {
            alert('Please enter your message')
            return
        }

        const {uid, displayName} = auth.currentUser
        await addDoc(collection(db, 'messages'), {
            text: kirim,
            name: displayName,
            uid,
            timestamp: serverTimestamp()
        })
        setKirim('')
        scrollChat.current.scrollIntoView({behavior: 'smooth'})
    }

    return (
        <form className={style.form} onSubmit={sendMessage}>
            <input className={style.input} type="text" value={kirim} onChange={(e) => setKirim(e.target.value)} placeholder="Type Message" />
            <button className={style.button} type="submit">
                <AiOutlineSend size={25} className="bg-transparent" />
            </button>
        </form>
    )
}

export default SendMessage
