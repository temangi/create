import React from 'react'
import Main from '../components/Main/Main'
import back from "../assets/main/contacts.svg"
import Footer from '../components/Footer/Footer'
import Contact from '../components/Contact/Contact'


const news = {
    img : back,
    title : "Contacts",
    desc : "Contact us for all your construction needs. We always welcome any questions and comments."
}

function Contacts() {
  return (
   <>
   <Main {...news} />
   <Contact/>
   <Footer/>
   </>
  )
}

export default Contacts