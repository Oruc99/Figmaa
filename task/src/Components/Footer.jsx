import React from 'react'
import '../css/footer.css'


const Footer = () => {
  return (
    <div className='footer'>
      <div className="container">
        <div className="top">
          <div className="left">
            <h2>finsweet</h2>
            <p className='info'>We are always open to discuss your project and<br /> improve your online presence.</p>
            <div className="emailCall">
              <div className="email">
                <h3>Email me at</h3>
                <p>contact@website.com</p>
              </div>
              <div className="call">
                <h3>Call Us</h3>
                <p>0927 6277 28525</p>
              </div>
            </div>
          </div>
          <div className="right">
            <h2>Lets Talk!</h2>
            <p className='info'>We are always open to discuss your project,<br /> improve your online presence and help with your<br /> UX/UI design challenges.</p>
            <div className="socSet">
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-linkedin"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="foot">
        <div className="container">
          <div className='footCont'>
            <p>Copyright 2022, Finsweet.com</p>
            <div className='footNav'>
              <p>Home</p>
              <p>About us</p>
              <p>Feeatures</p>
              <p>Pricing</p>
              <p>FAQ</p>
              <p>Blog</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Footer