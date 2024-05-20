import React from 'react'
import '../css/features.css'
import Header2 from '../Components/Header2'
const Features = () => {
  let guestions = [
    {
      num: '01',
      guestion: 'How much time does it take ?',
      answer:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque accusamus totam, nulla hic id dignissimos magnam?'
    },
    {
      num: '02',
      guestion: 'How much time does it take ?',
      answer:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque accusamus totam, nulla hic id dignissimos magnam?'
    },
    {
      num: '03',
      guestion: 'How much time does it take ?',
      answer:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque accusamus totam, nulla hic id dignissimos magnam?'
    },
    {
      num: '04',
      guestion: 'How much time does it take ?',
      answer:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque accusamus totam, nulla hic id dignissimos magnam?'
    },
    {
      num: '05',
      guestion: 'How much time does it take ?',
      answer:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque accusamus totam, nulla hic id dignissimos magnam?'
    },
  ]
  return (
    <div>
      <Header2 />

      <div className='container'>
        <div className='d-flex justify-content-between align-items-center mt-5'>
          <div className='d-flex flex-column'>
            <p className='fw-bold fs-4'>100.000 +</p>
            <p>Figma Users</p>
          </div>
          <p className='fw-bold '>
            <i class="fa-brands fa-linkedin" style={{fontSize:'25px ' }}></i>
            LogoIpsum</p>
          <p className='fw-bold '>
            <i class="fa-brands fa-linkedin" style={{fontSize:'25px ' }}></i>
            LogoIpsum</p>
          <p className='fw-bold '>
            <i class="fa-brands fa-linkedin" style={{fontSize:'25px ' }}></i>
            LogoIpsum</p>
          <p className='fw-bold '>
            <i class="fa-brands fa-linkedin" style={{fontSize:'25px ' }}></i>
            LogoIpsum</p>
          <p className='fw-bold '>
            <i class="fa-brands fa-linkedin" style={{fontSize:'25px ' }}></i>
            LogoIpsum
            </p>
        </div>
        <h2 className='mt-5 pt-5 text-center fw-bold'>The benefits of working <br />with our team</h2>
        <div className="featuresCards ">
          <div className='bg-body-tertiary p-4'>
            <i class="fa-brands fa-linkedin px-3 py-3"></i>
            <h2 className='fs-3 px-3 py-4'>Customize with ease</h2>
            <p className='px-3 py-3 opacity-75'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
          </div>
          <div className='bg-body-tertiary p-4'>
            <i class="fa-brands fa-linkedin px-3 py-3"></i>
            <h2 className='fs-3 px-3 py-4'>Perfectly Responsive</h2>
            <p className='px-3 py-3 opacity-75'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
          </div>
          <div className='bg-body-tertiary p-4'>
            <i class="fa-brands fa-linkedin px-3 py-3"></i>
            <h2 className='fs-3 px-3 py-4'>Friendly Support</h2>
            <p className='px-3 py-3 opacity-75'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
          </div>
        </div>

        <div className='main1 d-flex justify-content-between align-items-center '>
          <div  >
            <p className='px-3'>Use Client-first</p>
            <h2 className='p-3'> Top agencies and freelancers <br />around the world use <br />
              Client-first </h2>
            <p className='opacity-75 px-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
          </div>
          <div className='main1Img' >

          </div>
        </div>
      </div>
      <div className="main2 w-100 bg-body-tertiary">
        <div className="container">
          <div className='d-flex justify-content-between align-items-center'>
            <div className="main2Img"></div>
            <div className='w-50'>
              <p className='py-2'>Free Revision Rounds</p>
              <h2 className='py-2'>Get free Revisions and one week <br />of free maintenance</h2>
              <p className='py-3 opacity-75'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="main3 d-flex justify-content-between align-items-center gap-5">
          <div className='w-50'>
            <p className='p-2'>24/7 Support</p>
            <h2 className='p-2'>Working with us, you will be <br/>getting 24/7 priority support</h2>
            <p className='p-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          </div>
          <div className="main3Img w-50"></div>
        </div>
      </div>
      <div className="main4 w-100 bg-warning-subtle">
        <div className="container">
          <div className='d-flex justify-content-between align-items-center'>
            <div className="main4Img"></div>
            <div className='w-50'>
              <p className='py-2'>Free Revision Rounds</p>
              <h2 className='py-2'>Get free Revisions and one week <br />of free maintenance</h2>
              <p className='py-3 opacity-75'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
      <div className='d-flex justify-content-between  pricingFoot'>
          <div >
            <h2 className='fw-bold askedGuestion'>Frequently <br />asked questions</h2>
            <p className='text-info py-3'>Contact us For More Info</p>
          </div>
          <div className='askedGuestionRight '>
          {
              guestions.map((e, i) => {
                return <div   className='border-bottom guestion border-1 border-gray pt-4 pb-3 '>
                  <div className=' d-flex justify-content-between align-items-center'>
                    <p className='fs-5 text-info'>{e.num}</p>
                    <h3>{e.guestion}</h3>
                    <p className='fs-4 '>+</p>
                  </div>
                  {/* <p className='pt-3'> {e.answer}</p> */}
                </div>
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features