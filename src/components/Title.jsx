import { motion } from 'motion/react'
import React from 'react'


const Title = ({title,desc}) => {
 const Titlemotion = motion.h2  
    
  return (
    <div>
        <Titlemotion
         initial={{  opacity: 0 ,y:30 }}
  whileInView={{  opacity: 1 ,y:0}}
  transition={{duration:0.6, ease: 'easeOut'}}
  viewport={{once:true}}
        className='fond-medium flex items-center justify-center text-3xl sm:text-5xl'>{title}</Titlemotion>
       <motion.p initial={{  opacity: 0 ,y:20 }}
  whileInView={{  opacity: 1 ,y:0}}
  transition={{duration:0.6, ease: 'easeOut'}}
  viewport={{once:true}}
  className=' mt-4 max-w-lg text-center text-gray-500 dark:text-white/75 mb-6'>{desc}</motion.p>
    </div>
  )
}

export default Title