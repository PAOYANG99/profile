import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route, Link} from 'react-router-dom'

//Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'


//Pages
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
// import Blog from './pages/Blog'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        {/* <Route path='/blog' element={<Blog/>}/> */}
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
