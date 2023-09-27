import Image from 'next/image'
import React from 'react'

const Header = () => {
    return (
        <section className='header_container'>
            <div className='header_image-container'>
                <h2>NOW LEASING</h2>
                <div className='header_image'>
                    <Image src='/images/shops.jpg' alt='Shops' height={600} width={800} quality={40} layout='responsive' />
                </div>
            </div>
            <a href="mailto:davetaranto@optusnet.com.au?subject=Harbour Plaza Enquiry">
                <button type='button'>Enquire Now</button>
            </a>

        </section>
    )
}

export default Header