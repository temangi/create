import React from 'react'
import Main from '../components/Main/Main'
import back from "../assets/main/n.svg"
import Footer from '../components/Footer/Footer'
import SomeNews from '../components/SomeNews/SomeNews'

const news = {
    img : back,
    title : "News",
    desc : "Stay tuned with our news, expert tips and articles."
}

function News() {
  return (
   <>
   <Main {...news} />
   <SomeNews/>
   <Footer/>
   </>
  )
}

export default News