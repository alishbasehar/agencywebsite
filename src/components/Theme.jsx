import React, { useEffect } from 'react'
import assets from '../images/assets'

const Theme = ({ theme, settheme }) => {
    useEffect( ()=>{
       if(theme==='dark') {
document.documentElement.classList.add('dark')
       }
       else {
        document.documentElement.classList.remove('dark')
       }
       localStorage.setItem('theme',theme)
    },[theme])
  return (
    <button className='' >
      {theme === 'dark' ? (
        <img
          src={assets.sun_icon}
          onClick={() => settheme('light')}
          className="size-8.5 p-1.5 border border-gray-500 rounded-full"
        />
      ) : (
        <img
          src={assets.moon_icon}
          onClick={() => settheme('dark')}
          className="size-8.5 p-1.5 border border-gray-500 rounded-full"
        />
      )}
    </button>
  )
}

export default Theme
