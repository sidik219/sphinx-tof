import React, {useState, useEffect, useRef} from 'react'
import Message from './Message';
import SendMessage from './SendMessage';
import {db} from '../firebase'
// Firebase Import
import {query, collection, orderBy, onSnapshot} from 'firebase/firestore'

const style = {
    main: `flex flex-col p-[10px] relative`
}

const Chat = () => {
    const [messages, setMessages] = useState([])
    const scrollChat = useRef()

    useEffect(() => {
        const q = query(collection(db, 'messages'), orderBy('timestamp'))
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let messages = []
            // Di loop
            querySnapshot.forEach((doc) => {
                messages.push({...doc.data(), id: doc.id})
            })
            setMessages(messages)
        })
        return () => unsubscribe()
    }, [])

    return (
        <>
            <div className={style.main}>
                {/* Komponen chat pesan */}
                {messages && messages.map((message) => (
                    <Message key={message.id} message={message} />
                ))}
            </div>
            {/* Komponen kirim pesan */}
            {/* <SendMessage scrollChat={scrollChat} /> */}
            <span ref={scrollChat}></span>
        </>
    )
}

export default Chat
