import React from 'react'
import Value from '../components/Value/Value'
import Service from '../components/Service/Service'
import Header from '../components/Header/Header'
import Facts from '../components/Facts/Facts'
import Request from '../components/Request/Request'
import MainSlider from '../components/MainSlider/MainSlider'
import ServiceCards from '../components/ServiceCards/ServiceCards'
import Footer from '../components/Footer/Footer'
import Projects from '../components/Projects/Projects'
import Ratings from '../components/Ratings/Ratings'
import Houses from '../components/Houses/Houses'


function HomePage() {
  return (
   <>
   <Header/>
   <MainSlider/>
   <Value/>
   <Service/>
   <Projects/>
   <Ratings/>
   <Facts/>
   <Request/>
   <Footer/>
   <Houses/>
   </>
  )
}

export default HomePage;
