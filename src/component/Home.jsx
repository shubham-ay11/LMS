import React from 'react'
import TopSlider from './TopSlider'
import Navbar from './Navbar'
import Landing from './pages/Landing'
import Slider from './pages/Slider'
import Avg from './pages/Avg'
import FlipCardPage from './pages/FlipCardPage'
import Mission from './pages/Mission'
import Footer from './pages/Footer'
import Faq from './pages/Faq'
import Blog from './pages/Blog'
import Testimonial from './Testimonial'


function Home() {
  return (
    <div>
   <TopSlider/>
   <Navbar/>
   <Landing/>
   <Slider/>
  
   {/* <Avg/> */}
   {/* <FlipCardPage/> */}
   {/* blop->miss */}
   <Blog/> 
   
   <Mission/>
   <Testimonial/>
   <Faq/>

   <Footer/>

  
   
    </div>
  )
}

export default Home
