import React from 'react'
import '../css/work.css'
import { Link } from 'react-router-dom'

const Work = ({workCards ,setIndex}) => {

  return (
    <div>
      <header>
        <p className='pt-5'>What we created</p>
        <h2>Our Work Portfolio</h2>
        <p>We help teams create great digital products by providing them with tools and technology <br />to make the design-to-code process universally accessible.</p>
        <div className="workSocSet">
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-linkedin"></i>
        </div>
      </header>

      <div className="container">
        <div className='d-flex justify-content-center gap-5 my-5'>
          <p className='text-info'>All</p>
          <p>UI Design</p>
          <p>Webflow Design</p>
          <p>Figma Design</p>
        </div>
        <div className="workCards">{
          workCards.map((e, i) => {
            return <div key={i}>
              <div className=' fon' style={{ maxHeight:'360px' , minHeight:'360px',display:'grid' , placeItems:'center' }}>
                <img className='workCardImg' style={{padding:'20px', height:'360px'   }}  src={e.image}  />
              </div>
              <h2 className='pt-4'>{e.template}</h2>
              <p className='py-3'>{e.info}</p>
              <Link onClick={() => setIndex(i)} className='py-3 text-decoration-none' to='/readCase'>Read case study →</Link>
            </div>
          })}
        </div>

        <h2 className='text-center py-2 pt-4'>Let's build something great<br/> together</h2>
          <p className='text-center py-4'>Nullam vitae purus at tortor mattis dapibus. Morbi purus est, ultricies nec<br/> dolor sit amet, scelerisque cursus purus.</p>
          <Link className='readCaseBtnContact ' style={{marginBottom:"90px"}} to='/contact'>Contact Us</Link>
      </div>
    </div>
  )
}

export default Work