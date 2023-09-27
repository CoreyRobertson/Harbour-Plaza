import Image from 'next/image'
import React from 'react'

const Heading = () => {
    return (
        <div className='heading_container'>
            <div className='heading'>
                <Image src='/images/Heading.png' alt='Harbour Plaza' width={800} height={200} quality={100} layout='responsive' />
            </div>
        </div>
    )
}

export default Heading