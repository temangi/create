import React from 'react'
import Main from '../components/Main/Main'
import back from "../assets/main/news.svg"
import ServiceCards from '../components/ServiceCards/ServiceCards'
import Request from '../components/Request/Request'

const news = {
    img : back,
    title : "Service",
    desc : "If you are looking for a full-service construction company, look to Createx Construction Bureau. We are doing our best to be a partner for all of your construction needs."
}

function Service() {
  return (
   <>
   <Main {...news} />
   <ServiceCards/>
   <Request/>
   <Footer/>
   </>
  )
}

export default Service