import HomePage from './pages/HomePage'
import About from './pages/About'
import Work from './pages/Work'
import Contacts from './pages/Contacts'
import Service from './pages/Service'
import ServiceSecond from './pages/Service.2'
import News from './pages/News'
import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Header from './components/Header/Header'
import About2 from './pages/About2'
import ScrollToTop from './ScrollTop'

function App() {

  return (
   <>
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/service' element={<Service/>} />
        <Route path='/serviceSecond' element={<ServiceSecond/>} />
        <Route path='/news' element={<News/>} />
        <Route path='/work' element={<Work/>} />
        <Route path='/contacts' element={<Contacts/>} />
        <Route path='/about2' element={<About2/>} />
      </Routes>
    </BrowserRouter>
   </>
  )
}

export default App
