import React from 'react'
import { AiOutlinePhone, AiOutlineMail, AiFillFacebook, AiFillInstagram, AiFillYoutube } from 'react-icons/ai'

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <div className='footer_content-container'>
                <p>David Taranto</p>
                <p><AiOutlinePhone /> 0412 557 711 </p>
                <p><AiOutlineMail /> tarantoproperty@gmail.com</p>
            </div>
            <div className='footer_bottom-container'>
                {/* <div className='footer_bottom-icons'>
                    <AiFillFacebook className='footer_icon' />
                    <AiFillInstagram className='footer_icon' />
                    <AiFillYoutube className='footer_icon' />
                </div> */}
            </div>
            <p className='copy'>&copy; {currentYear} Taranto Property. All Rights Reserved.</p>
        </footer>
    )
}

export default Footer