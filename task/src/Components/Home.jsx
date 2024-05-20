import React, { useState } from 'react'
import Header2 from './Header2'
import '../css/home.css'
import { Link } from 'react-router-dom'
const Home = () => {
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
  let homeToprightCard = [
    {
      image: 'fa-brands fa-instagram',
      title: 'Strategy',
      info: 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .',
    },
    {
      image: 'fa-brands fa-instagram',
      title: 'Wireframing',
      info: 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .',
    },
    {
      image: 'fa-brands fa-instagram',
      title: 'Design',
      info: 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .',
    },
    {
      image: 'fa-brands fa-instagram',
      title: 'Development',
      info: 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .',
    },
  ]

  let homeCards = [
    {
      image: 'fa-brands fa-instagram',
      title: 'Uses Client First',
      info: 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. '
    },
    {
      image: 'fa-brands fa-instagram',
      title: 'Two Free Revision Round',
      info: 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. '
    },
    {
      image: 'fa-brands fa-instagram',
      title: 'Template Customization',
      info: 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. '
    },
    {
      image: 'fa-brands fa-instagram',
      title: '24/7 Support',
      info: 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. '
    },
    {
      image: 'fa-brands fa-instagram',
      title: 'Quick Delivery',
      info: 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. '
    },
    {
      image: 'fa-brands fa-instagram',
      title: 'Hands-on approach',
      info: 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. '
    },
  ]

  let card = [
    {
      image: 'https://s3-alpha-sig.figma.com/img/bec9/3567/f887f25bd80bf3a6019e4335404ba0eb?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FpDPqdY0e0C3TDsL5LQnfbktC~waibAsGJEQB50SZpGjp~Wsois-x94lx1YoTD7tl5~ao-MwQQE42Xyn6ZYTwiHDbs9ShqFnmFa~PHkgo-0XxUjbIQ47sZxVsHOcbHGwwo4pAr2JNc1VlpieFHmLzWv6sz796WskcwOT5NJ-aIziiwRxGe1Acinqftp6Vyuh3sqzlU5FkcaV5IeaE-02-dp0r32-lCUEHKSkm-8VP5aVrFyFHuSrhMwr8MTf-z7BRNhCRtt51YSCDtQZl7HWQVHelmuCzpkMVK1fHGI9txPCcgnYPWOGCJUzMScRKe~EapcWuZVl9tDGNKsDbSpbvQ__',
      date: '27 Jan 2021',
      salary: 'How one Webflow user grew his single person consultancy from $0-100K in 14 months',
      info: 'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract'
    },
    {
      image: 'https://s3-alpha-sig.figma.com/img/63bc/2013/67e2750028bcd9affc10a0a089823c15?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ody3~QEqS4AZKAa6goT4DKc9HgdVGWsAm8a1K9hj2BlGJ8L2M3tDgdE7~WIUuPdFmHoy6Slcp2DBbe2yFGHUZL~bfi0vkLJob5JAoIL-CxbrituoFdhG2vfZQfDZlnNWPjPeQeZsZICzw3LDHph-5KeVrl3yt0NpFXgvMuKko8D~hEcD7Ifs0qGNXVS-90InGgb6Ne8-Jyfiy75pg4WR09oaM1yzaH20Liq6Gm~ReVxdDkx1qk03aBfWnsBl6nMtAP~g2Or35ZgNStPSp-b0XN~1Pf01DdQdaFdbaQjBJqqlf~IJ-Me-SuSZwOKE3xmXAQ6xgaH0LwCgmnXW5RCVBg__',
      date: '27 Jan 2021',
      salary: 'How one Webflow user grew his single person consultancy from $0-100K in 14 months',
      info: 'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract'
    },
    {
      image: 'https://s3-alpha-sig.figma.com/img/8cfd/6acb/1fe061d7ee8cf0031f25ee2fb9034e48?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KR7UvC5TqzSokjq7bM78wkQ56wQqgANEuRwPg~b4abO74cbTkX9b~63-g5qax-~7nmAmL9~UUl-5iWBAQx85Al1sF7VwE2GE7f80qwYoWEbiSezPtUi1Id~GvYnO4uqZMPKYog8V7zQA6YeGhivNf3KTup9AnkPjbnc857e4c5FL0MPyryVUsfhMQ8CD~w0SddHdHKJSLPZNlB8ib4W1haeP6b987~o2rXhSihmD6PjQXaoAmMFry8eE-aSLzRW0xUnmDXTveJycil93w~R3JLRDi0Gc2wgFV4UA1vV~XtsXv-LgnpSeXesqbV3LaepXtTMar0S8Jq2rUDxZAqz4qw__',
      date: '27 Jan 2021',
      salary: 'How one Webflow user grew his single person consultancy from $0-100K in 14 months',
      info: 'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract'
    },
  ]


  
  return (
    <div>
      <Header2 />

      <div className='w-100 p-5 bg-body-tertiary'>
        <div className="container">
          <div className='d-flex justify-content-between gap-5 align-items-start pt-5'>
            <div>
              <h2 className='py-2'>How we work</h2>
              <p className='py-2 opacity-75'>Lorem ipsum dolor sit amet, consectetur<br /> adipiscing elit, sed do eiusmod tempor.</p>
              <p className='py-2 text-info'>Get in touch with us→</p>
            </div>
            <div className='homeTopRight'>{
              homeToprightCard.map((e, i) => {
                return <div key={i}>
                  <i className={e.image}></i>
                  <h2 className='pb-2 pt-3 ' >{e.title}</h2>
                  <p className='opacity-75'>{e.info}</p>
                </div>
              })
            }
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className='d-flex justify-content-between align-items-center mt-5 '>
          <h2 className='fs-2'>View our projects</h2>
          <p>View More →</p>
        </div>
        <div className="homeMainImg">
          <div className='homeImg1'>
            <div className="imgH1"></div>
            <div className="homeFon1"></div>
            <div className='img1Info'>
              <h2 className='py-2'>Workhub office Webflow<br /> Webflow Design</h2>
              <p className='py-2 opacity-75'>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam </p>
              <p className='py-3 text-warning'>View Project →</p>
            </div>
          </div>
          <div className="homeImg2"></div>
          <div className="homeImg3"></div>
        </div>
      </div>

      <div className='w-100 bg-body-tertiary mt-5'>
        <p className='text-center pt-5'>Features</p>
        <h2 className='text-center pt-2 fw-bold'>Design that solves <br />problems, one product at<br /> a time</h2>

        <div className="container">
          <div className="homeCards">{
            homeCards.map((e, i) => {
              return <div key={i} className='p-4 mt-3 bg-white'>
                <i className={e.image}></i>
                <h2 style={{fontSize:'23px' , fontWeight:'600'}}>{e.title}</h2>
                <p className='opacity-75'>{e.info}</p>
              </div>
            })
          }
          </div>
        </div>
      </div>
      <div className='w-100 bg-info-subtle py-5'>
        <div className="container">
          <div className='d-flex justify-content-between align-items-center'>
            <div>
              <h2>What our clients<br /> say about us</h2>
              <p className='opacity-75 pt-3 '>Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit sed.</p>
            </div>
            <div className=''>
              <p className='fs-4'>"The best agency we’ve worked with so far. They<br /> understand our product and are able to add new <br />features with a great focus."</p>
              <div className='d-flex justify-content-between'>
                <p className='fw-bold fs-4 mt-2'>Jenny Wilson</p>
                <div className='d-flex gap-2'>
                  <p className=' px-2 fs-4'>‹</p>
                  <p className=' px-2 fs-4 ' >›</p>
                </div>
              </div>
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


        <div className='w-100 d-flex inquiry'>
          <div className='w-50 inquiryImg'>
            <div className="inquiryFon"></div>
            <div className='inquiryAbsolute'>
              <h2 className='text-white'>Building stellar<br /> websites for<br /> early startups</h2>
              <p className='opacity-75 text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
            </div>
          </div>
          <div className='w-50 p-5 inquiryContact'>
            <h3>Send inquiry</h3>
            <p className='opacity-75'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
            <form className='homeForm' action="">
              <input type="text" placeholder='Your name' name='name' /><br />
              <input type="email" placeholder='Email' name='email' /><br />
              <input type="text" placeholder='Paste your Figma design URL' name='figmaUrl' /><br />
              <input type="submit" className='homeSubmitInp' value='Send an Inquiry' />
            </form>
            <p className='text-center mt-3 '>Get in touch with us →</p>
          </div>
        </div>




        <h2 className='text-center cardsTitle'>Our Blog</h2>

        <div className="cards">{
          card.map((e, i) => {
            return <div className='card' key={i}>
              <img className='cardImg' src={e.image} alt="" />
              <p className='cardDate'>{e.date}</p>
              <h3 className='cardSalary'>{e.salary}</h3>
              <p className='cardInfo'>{e.info}</p>
              <Link className='cardLink' to='/blogRead'>Read More →</Link>
            </div>
          })
        }</div>
      </div>

    </div>
  )
}

export default Home