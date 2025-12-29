import React from 'react'

const Title = ({title,desc}) => {
    
  return (
    <div>
        <h2 className='fond-medium flex items-center justify-center text-3xl sm:text-5xl'>{title}</h2>
       <p className=' mt-4 max-w-lg text-center text-gray-500 dark:text-white/75 mb-6'>{desc}</p>
    </div>
  )
}

export default Title