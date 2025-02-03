import HomePage from './pages/HomePage'
import About from './pages/About'
import Work from './pages/Work'
import Contacts from './pages/Contacts'
import Service from './pages/Service'
import ServiceSecond from './pages/Service.2'
import News from './pages/News'
import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {

  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/service' element={<Service/>} />
        <Route path='/serviceSecond' element={<ServiceSecond/>} />
        <Route path='/news' element={<News/>} />
        <Route path='/work' element={<Work/>} />
        <Route path='/contacts' element={<Contacts/>} />
      </Routes>
    </BrowserRouter>
   </>
  )
}

export default App
