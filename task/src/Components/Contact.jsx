import React from 'react'
import '../css/contact.css'

const Contact = () => {
  return (
    <div className='container'>
      <h2 className='title text-center'>Contact Us</h2>
      <p className='text-center contactInfo'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br /> eiusmod tempor incididunt ut labore.</p>

      <form className='contactForm' style={{marginBottom:'90px'}}>
        <div className='inp '>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" placeholder='Enter your name'  required/>
        </div>


        <div className='inp '>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder='Enter your Emial'  required/>
        </div>


        <div className='inp '>
          <label htmlFor="subject">Subject</label>
          <input type="text" name="subject" placeholder='Provide context' required />
        </div>


        <div className='inp '>
          <label htmlFor="selectSubject">Subject</label>
          <input type="text" name="selectSubject" placeholder='Select Subject' required />
        </div>

        <div className="inpMessage">
          <label htmlFor="message">Message</label>
          <textarea className='message' placeholder='Write your  question here' name="message"></textarea>
        </div>

        <input type="submit" className='btnSubmit' value='Send Message'/>

      </form>
    </div>
  )
}

export default Contact