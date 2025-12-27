
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {
  const [theme,settheme]=useState(localStorage.getItem('theme') ? localStorage.getItem('theme') :'light' )

  return (
   <div className='dark:bg-black '>
   <Navbar theme={theme} settheme={settheme}/>
   
   <Hero/>
    </div>

    
 
  )
}

export default App
