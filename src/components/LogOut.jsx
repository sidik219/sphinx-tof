import React from 'react'
import {auth} from '../firebase'
import {AiOutlineLogout} from 'react-icons/ai'

const LogOut = () => {
    // eslint-disable-next-line
    const signOut = () => {
        signOut(auth)
    }

    return (
        <div>
            <button
                className="flex bg-[#bf1b47] hover:bg-[#f01c58] text-white active:bg-gray-600 font-bold uppercase text-sm px-6 py-3 rounded-xl shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                type="button"
                onClick={() => auth.signOut()}
            >
            <AiOutlineLogout size={20} className="mr-2 bg-transparent" />
            LogOut
            </button>
        </div>
    )
}

export default LogOut
