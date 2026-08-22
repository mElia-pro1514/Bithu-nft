import React from 'react'
import { Link } from 'react-router-dom'

const Link_btn = ({ className, onclick, text, icon, linkto }) => {
    return (
        <>
            <Link className={className} onClick={onclick} to={linkto} >
                <span className=' py-[12px]  pr-2'>{icon}</span>
                <span className='block'>{text}</span>
            </Link>
        </>
    )
}

export default Link_btn