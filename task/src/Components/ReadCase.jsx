import React from 'react'
import '../css/readCase.css'
import { Link } from 'react-router-dom'

const ReadCase = ({index}) => {
  return (
    <div>
      <div className="container">
        <p className='design'>Web design and development</p>
        <h2 className='my-4'>Finsweet Design case <br />studies</h2>
        <p className='my-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore<br /> et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut <br />aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>

        <div className="readCaseFon mt-5">
          <img src={index.image} className='readCaseImg' alt="" />
        </div>

        <div className='d-flex justify-content-between mt-5 py-3 border-bottom border-1 border-gray'>
          <div>
            <h3>Client</h3>
            <p>facebook.com</p>
          </div>
          <div>
            <h3>Service</h3>
            <p>Product Design</p>
          </div>
          <div>
            <h3>Deliverable</h3>
            <p>UI Screens, UX Flow & Prototype</p>
          </div>
        </div>

        <div className="readCaseMain">
          <h2 className='py-3'>How we do it</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <ul >
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
            <li>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</li>
            <li>Duis aute irure dolor in reprehenderit in voluptate velit esse</li>
            <li>Excepteur sint occaecat cupidatat non proident, sunt in culpa</li>
          </ul>

          <div className="readCaseMainFon">
            <div className="readCaseMainImg"></div>
          </div>

          <h2 className='mt-5'>How we do it</h2>
          <p className='my-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <ul className='p-4'>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
            <li>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</li>
            <li>Duis aute irure dolor in reprehenderit in voluptate velit esse</li>
            <li>Excepteur sint occaecat cupidatat non proident, sunt in culpa</li>
          </ul>
          
        </div>
          <div className='d-flex justify-content-between my-5 border-top border-bottom border-1 border-gray pt-4 pb-2 '>
            <p className='text-info'>Keywords</p>
            <p>Design</p>
            <p>UI/UX</p>
            <p>Wireframing</p>
            <p>Branding</p>
            <p>Development</p>
            <p>webflow</p>
          </div>

          <h2 className='text-center py-2 pt-4'>Let's build something great<br/> together</h2>
          <p className='text-center py-4'>Nullam vitae purus at tortor mattis dapibus. Morbi purus est, ultricies nec<br/> dolor sit amet, scelerisque cursus purus.</p>
          <Link className='readCaseBtnContact' style={{marginBottom:"90px"}} to='/contact'>Contact Us</Link>
      </div>
    </div>
  )
}

export default ReadCase