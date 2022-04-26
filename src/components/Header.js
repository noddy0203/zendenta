import React from 'react'
import { AiOutlinePlus } from "react-icons/ai"
import { IoMdNotificationsOutline } from "react-icons/io"
import { FaUserAlt } from "react-icons/fa"

const Header = () => {
    return (
        <>
            <div className='user_header'>
                <div className="name_sign">
                    <FaUserAlt className='user_icon' />
                    <h2>Diane Cooper</h2>
                </div>
                <div className='search_div'>
                    <input type="search" placeholder='Search' className='search'/>
                    <AiOutlinePlus className='plusIcon' />
                    <IoMdNotificationsOutline className='notificationIcon' />
                </div>
            </div>
        </>
    )
}

export default Header