import HomePage from './pages/HomePage'
import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Header from './components/Header/Header'

function App() {

  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
      </Routes>
    </BrowserRouter>
  
   </>
  )
}

export default App
