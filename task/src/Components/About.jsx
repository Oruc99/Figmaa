import React from 'react'
import '../css/about.css'

const About = () => {
  let homeCards = [
    {
      img: 'fa-brands fa-instagram',
      title: 'Perfectly Responsive',
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.'
    },
    {
      img: 'fa-brands fa-instagram',
      title: 'Perfectly Responsive',
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.'
    },
    {
      img: 'fa-brands fa-instagram',
      title: 'Perfectly Responsive',
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.'
    },
  ]

  let homefootCards = [
    {
      image: 'https://s3-alpha-sig.figma.com/img/33cc/c9b9/f7e17cd48bd93bc23df7cb7a5a4e421f?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lK0ukixgiT6TUd4IlW9oqVv5Ete6s7Wtj9I0q9yTMlqLaVcB0ReBreBAb4ixXbtwmQMuxn19DlkkoIpR0Ytwtny-vlh27dWbR5z79Ffm3yHtiuaVbKbhjQI-avKTFCZjMO7O9dVS1X9zCyl0ef1SS6gLn-37fzbC8LWFQ3hNlgic1PlFp9vUx~kFdGRzA8-fRlso6qqLKnzeS-rRieff-XFv4Hjzveu3o0m5oG7Swd6xp8NLxG2Q57Oa1hvjqDAu5KDpKyOUBhBCWYG~FUfQ1difZEWqy0JwTaSZTFxZNmvGFDvGPoIsHNqIDlNjjbR5qymM24eJ5dmYSYgk6PDKEw__',
      name: 'John Smith',
      info: 'CEO'
    },
    {
      image: 'https://s3-alpha-sig.figma.com/img/415a/e2b4/35aaebfdeb7acbb107459f0b8643ad03?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e1SY48FUsZk5X6FMQ5Hmmio~zPsL7VLXogX0VRJJe3mJ258B59tlzDVpLnQF9e1lUOEPc03TBQfSEY1KyGkbN9DgaJ58JaLj2yxUgQ9-bm-PihSE9dsGxhukKw0BGg37otH2R8Uzb5g08bj3IHVoUe1l0vmyW6BeHijJ7GjgqFT40qGC3~TEZpiy5rXpeQkY4TcqNZQgSW4UCLvFIeNCnOXZ2xS6m~NBGuzwPNFjAxbimpEajPrzvdqLz4XOa~3iLVJXW22tXE8vN1gv1p9EfNCqXviYg2q2l7~zLntXlLLULmAZHnFZ10N6RljyMpwb6lFxfy6XzPuk1zkGquxp7w__',
      name: 'John Smith',
      info: 'CEO'
    },
    {
      image: 'https://s3-alpha-sig.figma.com/img/33cc/c9b9/f7e17cd48bd93bc23df7cb7a5a4e421f?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lK0ukixgiT6TUd4IlW9oqVv5Ete6s7Wtj9I0q9yTMlqLaVcB0ReBreBAb4ixXbtwmQMuxn19DlkkoIpR0Ytwtny-vlh27dWbR5z79Ffm3yHtiuaVbKbhjQI-avKTFCZjMO7O9dVS1X9zCyl0ef1SS6gLn-37fzbC8LWFQ3hNlgic1PlFp9vUx~kFdGRzA8-fRlso6qqLKnzeS-rRieff-XFv4Hjzveu3o0m5oG7Swd6xp8NLxG2Q57Oa1hvjqDAu5KDpKyOUBhBCWYG~FUfQ1difZEWqy0JwTaSZTFxZNmvGFDvGPoIsHNqIDlNjjbR5qymM24eJ5dmYSYgk6PDKEw__',
      name: 'John Smith',
      info: 'CEO'
    },
    {
      image: 'https://s3-alpha-sig.figma.com/img/ce2b/da82/5ab4d67761af2ea0410c9ca7461ad67a?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DdOY7krY6cgEi6yoh65xxWWTo8~RHfx4sOmF3NOGjYpCyDn~XryMpmtED9XR7HUImU4f2QpSYWVwxug9QutRUQtXXHoG6giVBUSkNq1m1EoUspgVHXd15fNHOZLDXY-wTIV-qJX2xGdT7QlDSbWpfIMWX-j1IOyvvqtRPRy2Yt~9LjRNA2fE9VZm2~JsruCe2gZT-FF9SSuc2ePhzVY8cmHEbPz86~fW1GPLZWKGqB3jdIvT9zSF~xIIJyEAX8UdEr1cQnyEEX6VxlHWurIGUESgdKfB6Bqy5DaOU8wIK6x~FZNZuesOVTdaA3aNIWVvLC2rRJUBz0kVOQVEULefwQ__',
      name: 'John Smith',
      info: 'CEO'
    },
  ]
  return (
    <div>
      <div className="container">
        <div className='d-flex w-100 justify-content-between align-items-center gap-5' style={{ marginTop: '90px' }}>
          <div style={{ width: "45%" }}>
            <p className='py-2'>About us</p>
            <h2 className='fs-1 fw-bold'>Our designs solve<br /> problems</h2>
            <p className='py-4 opacity-75'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          </div>
          <img style={{ width: '45%' }} src="https://s3-alpha-sig.figma.com/img/1819/3468/f71b71ae2cb5579a9f049b428e54f788?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ixTxeUm1N5Rlv4uaIdNj47bVwWbmwJfQ0pgmCYRs4PAa6drg2niwcG0fFBfFuWOvegA-ARDKIwz98DDiS5fh6DevKbRcXIIXs2ObR8zlCKcdTHywByng3~tE3dPygT49LJfXpjpsqDeSWD4Zu2zyhW0-jfaCvGYVuEfnNZxRqwK7t-OfA4ZFmTmpbOh-~dJAXVDZbt-MW5HqmlZOT6uQnu444ML0sDQXDsXRNN36g2NZSbukHVdrlZEHwQRzJskkO7IKjY4dOQFtD0wonMOPOtE7NmABwMYe88B-8qJoNW8dKaLo~l-gzzTKwTL1GmxT2KY8wcuPlsRY-b2bQP7eHA__" alt="" />
        </div>

        <div className='d-flex justify-content-around align-items-end bg-body-tertiary py-5 ' style={{ marginTop: "70px" }}>
          <div style={{ width: '40%' }}>
            <p>Who we are</p>
            <h2 className='py-2'>Goal focussed</h2>
            <p className='opacity-75'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div style={{ width: '40%' }}>
            <h2 className='py-2'>Continuous improvement</h2>
            <p className='opacity-75'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
        <img src="https://s3-alpha-sig.figma.com/img/243e/bdcf/77583630b5c592cfe693a45ac8529324?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QFKYcp0zzNArxNfqrrljTawehvigLV8F1yBqXXeYsz6sYpmdh3mFSAPUwNs9Yquod2ukWR3Ds1VSeCqfWvRKPxn7moujTRsmkN1Snr729IVGWriitwpdKNrulpUXsyCa0Y7Aojt97qxwqqzqVDVWSOXEsRpCzEcpvUY2o3dPQG-yyiUQw6C1VTvUMgxEmjs93U6if~Tn628nSJcE8Yo1hd1~-VTIHQV6w2LM1LFgIaDXGXtGito0qglnqK~mwgg9xJ1u58XvPHaGR7Pvcret7UU5SJaplUJoaUh7jGGdMfURC7bEBafH18ImLxaXa39klVBYQ65TRVjbdzGqcaX6vw__" style={{ width: '100% ', height: '350px', objectFit: 'cover', backgroundPosition: 'center' }} />

        <h2 className='text-center  fw-bold' style={{marginTop:"80px"}}>The process we follow</h2>

        <div className='d-flex justify-content-between align-items-center mt-5 process' style={{marginBottom:"80px"}}>
          <div className='border-top border-2 border-info ' >
            <h3 className='pt-4'>Planning</h3>
            <p className='pt-2 opacity-75'>Lorem ipsum dolor sit amet,<br /> consetetur sadipscing elitr.</p>
          </div>
          <div className='border-top border-2 border-info ' >
            <h3 className='pt-4'>Conception</h3>
            <p className='pt-2 opacity-75'>Lorem ipsum dolor sit amet,<br /> consetetur sadipscing elitr.</p>
          </div>
          <div className='border-top border-2 border-info ' >
            <h3 className='pt-4'>Design</h3>
            <p className='pt-2 opacity-75'>Lorem ipsum dolor sit amet,<br /> consetetur sadipscing elitr.</p>
          </div>
          <div className='border-top border-2 border-info ' >
            <h3 className='pt-4'>Development</h3>
            <p className='pt-2 opacity-75'>Lorem ipsum dolor sit amet,<br /> consetetur sadipscing elitr.</p>
          </div>
        </div>
      </div>


      <div className="homeMain2 mt-5 w-100 bg-body-tertiary">
        <div className="container">
          <div className='d-flex justify-content-between align-items-center'>
            <div className="homeMain1Img"></div>
            <div className='w-50'>
              <p className='py-2'>Free Revision Rounds</p>
              <h2 className='py-2'>Get free Revisions and one week <br />of free maintenance</h2>
              <p className='py-3 opacity-75'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="homeMain2 w-100 bg-body-tertiary">
        <div className="container">
          <div className='d-flex justify-content-between align-items-center'>
            <div className='w-50'>
              <p className='py-2'>Free Revision Rounds</p>
              <h2 className='py-2'>Get free Revisions and one week <br />of free maintenance</h2>
              <p className='py-3 opacity-75'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>
            <div className="homeMain2Img"></div>
          </div>
        </div>
      </div>

      <div className="container">
        <h2 className=' text-center' style={{marginTop:"90px"}}>The benefits of working<br /> with us</h2>

        <div className='w-100 d-flex justify-content-between mt-5 gap-5' >
          {homeCards.map((e, i) => {
            return <div key={i} className='p-5 bg-body-tertiary'>
              <i style={{ fontSize: '35px' }} className={e.img}></i>
              <h2 className='py-3 fs-3'>{e.title}</h2>
              <p className='opacity-75'>{e.info}</p>
            </div>
          })}
        </div>

        <div className='d-flex justify-content-between align-items-center mt-5'>
          <div className='d-flex flex-column'>
            <p className='fw-bold fs-4'>100.000 +</p>
            <p>Figma Users</p>
          </div>
          <p className='fw-bold '>
            <i class="fa-brands fa-linkedin" style={{ fontSize: '25px ' }}></i>
            LogoIpsum</p>
          <p className='fw-bold '>
            <i class="fa-brands fa-linkedin" style={{ fontSize: '25px ' }}></i>
            LogoIpsum</p>
          <p className='fw-bold '>
            <i class="fa-brands fa-linkedin" style={{ fontSize: '25px ' }}></i>
            LogoIpsum</p>
          <p className='fw-bold '>
            <i class="fa-brands fa-linkedin" style={{ fontSize: '25px ' }}></i>
            LogoIpsum</p>
          <p className='fw-bold '>
            <i class="fa-brands fa-linkedin" style={{ fontSize: '25px ' }}></i>
            LogoIpsum
          </p>
        </div>
      </div>

      <div className='w-100 bg-body-tertiary py-5 mt-5'>
        <h2 className='text-center pb-5'>Meet our team</h2>

        <div className="container d-flex justify-content-between mt-3" >
          {homefootCards.map((e, i) => {
            return <div style={{backgroundColor:'white' , paddingInline:'60px',paddingBlock:'30px' ,display:'flex' ,flexDirection:'column' , alignItems:'center' ,marginBottom:"60px" }} key={i}>
              <img style={{width:'140px' , height:'140px' , borderRadius:"100%" ,  objectFit:'cover' , backgroundPosition:'center'}} src={e.image}  />
              <h3 className='pt-5'>{e.name}</h3>
              <p className='opacity-75'>{e.info}</p>
            </div>
          })}
        </div>
      </div>

    </div>
  )
}

export default About