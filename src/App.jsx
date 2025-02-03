import HomePage from './pages/HomePage'
import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {

  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/about' element={<AboutUs/>} />
      </Routes>
    </BrowserRouter>
   </>
  )
}

export default App
