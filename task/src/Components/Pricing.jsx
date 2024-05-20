import React from 'react'
import '../css/pricing.css'

const Pricing = () => {
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
      <div className="container">
        <h2 className='text-center mt-5 fw-bold'>Our Pricing Plans</h2>
        <p className='text-center opacity-75 mt-3'>When you’re ready to go beyond prototyping in Figma, Webflow is<br /> ready to help you bring your designs to life — without coding them.</p>
        <div className="pricingCards d-flex justify-content-between mt-5">
          <div className="pricingCard bg-body-tertiary p-2">
            <div className='d-flex  align-items-baseline'>
              <p className='px-5 pt-5 pb-3 fw-bold fs-3'>299 $</p><p>Per Design</p>
            </div>
            <h3 className='px-5 py-1 fs-4'>Landing Page</h3>
            <p className='px-5 opacity-75'>When you’re ready to go beyond<br /> prototyping in Figma, </p>
            <ul className='px-5  pt-3'>
              <li >All limited links</li>
              <li >Own analytics platform</li>
              <li >Chat support</li>
              <li >Optimize hashtags</li>
              <li >Unlimited users</li>
            </ul>
            <div className='d-flex justify-content-center'>
              <button className='py-2 px-4 '>Get Started</button>
            </div>
          </div>
          <div className="pricingCard bg-info-subtle p-2">
            <div className='d-flex  align-items-baseline'>
              <p className='px-5 pt-5 pb-3 fw-bold fs-3'>299 $</p><p>Per Design</p>
            </div>
            <h3 className='px-5 py-1 fs-4'>Landing Page</h3>
            <p className='px-5 opacity-75'>When you’re ready to go beyond<br /> prototyping in Figma, </p>
            <ul className='px-5  pt-3'>
              <li >All limited links</li>
              <li >Own analytics platform</li>
              <li >Chat support</li>
              <li >Optimize hashtags</li>
              <li >Unlimited users</li>
            </ul>
            <div className='d-flex justify-content-center'>
              <button className='py-2 px-4 '>Get Started</button>
            </div>
          </div>
          <div className="pricingCard bg-body-tertiary p-2">
            <div className='d-flex  align-items-baseline'>
              <p className='px-5 pt-5 pb-3 fw-bold fs-3'>299 $</p><p>Per Design</p>
            </div>
            <h3 className='px-5 py-1 fs-4'>Landing Page</h3>
            <p className='px-5 opacity-75'>When you’re ready to go beyond<br /> prototyping in Figma, </p>
            <ul className='px-5  pt-3'>
              <li >All limited links</li>
              <li >Own analytics platform</li>
              <li >Chat support</li>
              <li >Optimize hashtags</li>
              <li >Unlimited users</li>
            </ul>
            <div className='d-flex justify-content-center'>
              <button className='py-2 px-4 '>Get Started</button>

            </div>
          </div>
        </div>
        <div className='d-flex justify-content-between  pricingFoot'>
          <div >
            <h2 className='fw-bold askedGuestion'>Frequently <br />asked questions</h2>
            <p className='text-info py-3'>Contact us For More Info</p>
          </div>
          <div className='askedGuestionRight '>
          {
              guestions.map((e, i) => {
                return <div   className='border-bottom guestion border-1 border-gray pt-4 pb-3'>
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

export default Pricing