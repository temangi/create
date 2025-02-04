import React from 'react'
import Value from '../components/Value/Value'
import Service from '../components/Service/Service'
import Header from '../components/Header/Header'
import Facts from '../components/Facts/Facts'
import Request from '../components/Request/Request'


function HomePage() {
  return (
   <>
   <Header/>
   <Value/>
   <Service/>
   <Facts/>
   <Request/>
   <p>Hello bayana , syimyk</p>
   </>
  )
}

export default HomePage;
