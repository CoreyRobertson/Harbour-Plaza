import React from 'react'

const Form = () => {
    return (
        <section className='form_container'>
            <h2>MAKE AN ENQUIRY OR BOOK AN INSPECTION</h2>
            <form action="https://formsubmit.co/tarantoproperty@gmail.com" method="POST">

                <input name='name' type='text' placeholder='Your Name'></input>
                <input name='phone' type='text' placeholder='Your Phone Number'></input>
                <input name='email' type='email' placeholder='Your Email'></input>
                <input name='Business' type='text' placeholder='Your Proposed Business'></input>
                <input name='Size' type='text' placeholder='Premises Size Requirement (m2)'></input>
                <input name='Time' type='text' placeholder='Message/Preferred Inspection Time'></input>

                <button type='submit'>SUBMIT</button>

            </form>
        </section>
    )
}

export default Form