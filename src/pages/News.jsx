import React from 'react'
import Main from '../components/Main/Main'
import back from "../assets/main/n.svg"
import Footer from '../components/Footer/Footer'
import Categories from '../components/Cotegories/Categories'
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
   <Categories/>
   <SomeNews/>
   <Footer/>
   </>
  )
}

export default News