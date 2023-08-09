import React from 'react'
import Home from './Component/Pages.js/Home'
import { Route, Routes } from 'react-router-dom'
import Service from './Component/Pages.js/Service'
import Contact from './Component/Pages.js/Contact'
import About from './Component/Pages.js/About'

export default function Router() {
  
  return (
    <div>
        <Routes>
            
                        <Route exact path='/' element={<Home/>} />
                        <Route path='/about' element={<About/>} />
                        <Route path='/service' element={<Service/>} />
                        <Route path='/Contact' element={<Contact/>} />
        </Routes>

    </div>
  )
}
