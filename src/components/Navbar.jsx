import { useState } from "react"
import assets from "../images/assets"
import Theme from "./Theme"

const Navbar = ({theme,settheme}) => {

  const [sidemenu,setsidemenu]=useState(false)
  return (
    <div className=' container mx-auto max-w-7xl flex justify-between items-center px-4 md:px-12 lg:px-24 py-4 sticky top-0 z-20 backdrop-blur-2xl font-medium bg-white/50 dark:bg-gray-900/70'>
      <img  src={theme ==='dark'? assets.logo_dark : assets.logo} className=" w-[120px]"/>
      <div className={`text-gray-700  dark:text-white ${ !sidemenu ? 'max-md:hidden' : 'max-md:w-[240px] max-md:pl-10'} max-md:absolute top-0 bottom-0 right-0 max-md:min-h-screen max-md:flex-col max-md:bg-primary max-md:text-white max-md:pt-20 sm: flex items-center gap-10`} >
        <img src={assets.close_icon} className="w-5 absolute right-4 top-4 md:hidden"   
      onClick={()=>setsidemenu(false)}      
    />
   
        
        <a onClick={()=>setsidemenu(false)} href='#' className=" sm:text-sm sm:hover:border-b">home</a>
        <a href='#services' onClick={()=>setsidemenu(false)} className="sm:hover:border-b">services</a>
         <a href='#ourwork' onClick={()=>setsidemenu(false)} className="sm:hover:border-b">ourwork</a>
      <a href='#contactus' onClick={()=>setsidemenu(false)} className="sm:hover:border-b">contactus</a>
     
      </div>
<div className="flex gap-6">
      <Theme theme={theme} settheme={settheme}/>
      <img src={theme==='dark'? assets.menu_icon_dark : assets.menu_icon }
      onClick={()=>setsidemenu(true)} className="w-10 md:hidden"/>
      <button className="text-md max-sm:text-[12px] max-sm:py-1  max-md:hidden flex items-center gap-2 bg-primary text-white  px-6 py-2 cursor-pointer rounded-full hover:scale-103 transition-all"
      
     >connect<img src={assets.arrow_icon} width={14}/></button>
      </div></div> 
  )
}

export default Navbar