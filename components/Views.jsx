import Image from 'next/image'
import React from 'react'

const Views = () => {
    return (
        <div className='views_image-container'>
            <div className='views_image'>
                <Image src='/images/views.png' quality={100} alt='Views' height={900} width={800} layout='responsive' />
            </div>
        </div>
    )
}

export default Views