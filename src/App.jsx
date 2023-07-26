import React, {useState} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Signup from './pages/Signup'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'aos/dist/aos.css'
import 'aos/dist/aos'
import Login from './pages/Login'

import AOS from 'aos'
import './style.css'

function App() {

  AOS.init()

  const [name, setName] = useState('Tochi')

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/home' element={<Home nameprops={name}/>}/>
      <Route path='/about' element={<About nameprops={name}/>}/>
      <Route path='/contact' element={<Contact nameprops={name}/>}/>
      <Route path='/login' element={<Login nameprops={name}/>}/>
      <Route path='/Signup' element={<Signup nameprops={name}/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App