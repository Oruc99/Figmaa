import React, { useState } from 'react'
import { Route, Routes } from 'react-router'
import 'bootstrap/dist/css/bootstrap.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Components/Home'
import About from './Components/About'
import Features from './Components/Features'
import Pricing from './Components/Pricing'
import Faq from './Components/Faq'
import Blog from './Components/Blog'
import Contact from './Components/Contact'
import Work from './Components/Work'
import BlogRead from './Components/BlogRead'
import ReadCase from './Components/ReadCase'

const App = () => {
  let workCards = [
    {
      image: 'https://s3-alpha-sig.figma.com/img/e39c/c49b/c146d14a0375640e12c00b8fbd66dac6?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FPEV1BkDZMoLeNc09OXvWF1iKa3-nidq8LetEIPGiuT4WP9zwt5-1r40lzNY-kDVXfh0Ee1cYwPAUcaUAKA4mtoktLwQjGh4fMRbniM5wuE6j5NA0ixSSWY9Au3zHX6jF2adqktuflM2B1gdnk9AWSYLlVmCHJ7n-GXqtuPMQmmOeL3RApUit-bZqpYXpG3uuiJrRof0PEUtyfPl3-G88JFmE1KLpHa~6eyMSFLc-dq8OYYv6DJRCKSrROqdu0rrbuk4bp~14Sk-04kyv~2jKqMG7f3oeA6yTxdXjieiKL2cv82tkIzUm-uha4Rc~LweJtGOxEICdq8M2bnBd~Dbog__',
      template: 'Template 1',
      info: 'Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.'
    },
    {
      image: 'https://s3-alpha-sig.figma.com/img/1b95/c297/9553501cd10e2eab55845110820babde?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nIdPxbTD9chykJr8BUnRsOWIFOFi8ssVfDo56u3WkoiprnfE6uMGQEuGxQIzWUGsryPBXq7CisA4fcQOyUZQ5HT1nLet303ZLeoJUtMvEkdZWJyEI-BBIlQDVEXW68jjoflJiQ-hqcWTdMgYBgpdB5LvMYmxM-k43mE1TjL6O3~K0ywSICv~h94V1mIQPaRjszQ7oIZgavM2-qs9NAYmuOb5F8R~37l4nif6-h9GtirR5~S6a6wRWyPl9MPZv7lXXKeF0IhAPsG0092UeU3Zl1XHQ~-9qPXC949xompPGFv9I3-TB-6xEupBsTSzd~yY5-KadrIvZ306xb8ESg3YPA__',
      template: 'Template 2',
      info: 'Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.'
    },
    {
      image: 'https://s3-alpha-sig.figma.com/img/2c68/ba37/2f8ed8f50264f85fc3bbd074d5ac1f32?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hdpqDan7R2-MPseUDDUPzd7mPehNIfupfarv1cc6y8Mo25oU4vrf8xj0ca8gwnSspxbYD9RbvuRpkZRoA7khu3sxsO-DyCRo8Dd84Uo9iaFj8tBD0ujfYZwN4-bijv~OokGslqc7MIH~pu-3zoRQ-iKPPsCgDF4G61y0mB2o68gaL8vTsnqLMW20xBwIgAtgipkC48FBD9E~sAATIFK17h9Zm78iod9W6OSvU3lFDyfnUki3VYQNr2nccA6VyL8Qt1KdOaY9nCfiDFcWYervE5I7KVrzJO~qNqOeg1epmy8LYZ0rMcx9s1rIGpNSTrw3LvZ4eEib2zMSMPGJXizFqA__',
      template: 'Template 3',
      info: 'Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.'
    },
    {
      image: 'https://s3-alpha-sig.figma.com/img/063b/e2f9/d172f515743436b6ecaac2da061b2eb9?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AXdS1JblfRPNMWO-dv4glhkDCUE~MqylFqna-ndwFA6mEkWfqMfLMOeb1CCRbbd2Jr8nw9HHWmb9bpXLOH7RudFllK6dlauc5rz8yH~C2-awxSRfEKOSlRNO3xjFjHfPasKLpemYxdIhHhWnTUX6j~uCwC98cUngwZxFlf0-uc21lhgs3FulTnW1jvAdkoW2LLomoiECFFkIZIWel9gHTDGA~36eNCMWnPxU~EAYw-FwU9gx6yrJowo84mj8l8Z7~k6iqfnm11P24Gy5KnP-FT6AAaZ-BkvcyPreZMYoZYC7dXSMS9LT9kUULoiAx7YoXYDVhKsP6lSoY8a~OipQiQ__',
      template: 'Template 4',
      info: 'Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.'
    },
    {
      image: 'https://s3-alpha-sig.figma.com/img/d52c/bba5/cc001a4cfc1562483e3814803a4b4d9e?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A1EYpLH8jx-GvDMP6KLYXpM6iNNKNEH-Q8KYKSF1ZojAIhL7B0kkH8aMlbfv7oi9Au7935tJqtjuFzsaBnqXo91wxi7Rz71hbWozTFAmwWmcbquZQLfMXWZ1mMF7s2hQjHLgNw2rLa9rRAyPVBqtqCDKPcVwceZvpBAZ0SLEZe5KNL8NjkwYzi-3TqiPaNLiuH5IHeEFMquT4Ps4IAtWEiXs1SxLFnf4z-TOIub3J156LWI5A1Cz-eLF6f47tPVvSmUczxj9EyuLPjeet7HgDFpwrNJ6xA0K2Zbf5eQ6aN-MEPl2MdbY0SfFyWALJ4BDXPon7DMt6WuLE39U9lk58A__',
      template: 'Template 5',
      info: 'Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.'
    },
    {
      image: 'https://s3-alpha-sig.figma.com/img/5d69/9360/9f4e52105eee88d3add690718fc255d2?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZYJUODAsISbFgSQzyjphH0kIE7mOIkzW4JAbp4xB~tBo1UBcQCCa0Z3zKOOVfGpjXg-DBxDxdLCsl-~Cmj27Hk2KsYfbvLVyS4ajHAEaMqyy~ROKYpDFepzzQsix-RBrgK5ssZ4e9bvZHBsfP8TB4CcGeBxXYbnnDM7o4pOVtGeIiQ03I9UD1CLBtNDD3DBd8TwstZ1juWeNTQIUQczmYmb2vKkK8-yzo1tmrrOqGIFpPzmEx8PXCjQtNrtvOYNYLauQjcuBsZoF4n27kcIrUdlIWpXbSHs1o0gfjHTti88Z-f~LDVQlnQ34yaB2hhgiHWkSyzWJ5olcCI5NeChAOA__',
      template: 'Template 6',
      info: 'Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.'
    },
  ]
  let [index,setIndex] = useState(0)

  return (
    <div>
      <Header />

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/pricing' element={<Pricing />}></Route>
        <Route path='/features' element={<Features />}></Route>
        <Route path='/faq' element={<Faq />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/work' element={<Work workCards={workCards} setIndex={setIndex}/>}></Route>
        <Route path='/blogRead' element={<BlogRead />}></Route>
        <Route path='/readcase' element={<ReadCase index={workCards[index]}/>}></Route>
      </Routes>

      <Footer />
    </div>
  )
}

export default App