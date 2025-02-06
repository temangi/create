import React from 'react'
import Value from '../components/Value/Value'
import Service from '../components/Service/Service'
import Header from '../components/Header/Header'
import Facts from '../components/Facts/Facts'
import Request from '../components/Request/Request'
import ServiceCards from '../components/ServiceCards/ServiceCards'
import Footer from '../components/Footer/Footer'
import Projects from '../components/Projects/Projects'


function HomePage() {
  return (
   <>
   <Header/>
   <Value/>
   <Service/>
   <Projects/>
   <Facts/>
   <Request/>
   <Footer/>
   </>
  )
}

export default HomePage;
