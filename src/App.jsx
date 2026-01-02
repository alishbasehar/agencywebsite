
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Trust from './components/Trust'
import Services from './components/Services'
import Ourwork from './components/Ourwork'

import Team from './components/Team'
import Contact from './components/Contact'
import {Toaster} from 'react-hot-toast'
import Footer from './components/Footer'

function App() {
  const [theme,settheme]=useState(localStorage.getItem('theme') ? localStorage.getItem('theme') :'light' )

  return (
   <div className='dark:bg-black '>
    <Toaster/>
   <Navbar theme={theme} settheme={settheme}/>
   
   <Hero/>
   <Trust/>
   <Services/>
   <Ourwork/>
   <Team/>
   <Contact/>
   <Footer theme={theme}/>
    </div>

    
 
  )
}

export default App
