import React from 'react'
import Title from './Title'
import assets from '../images/assets'

const Contact = () => {
  return (
    <div id='contactus' className=' container mx-auto max-w-7xl flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 pt-30 text-gray-700 dark:text-white'>


        <Title title='Reach out to us' desc='From strategy to execution, we craft digital solutions that move your business forward.'/>
    <form className='grid sm:grid-cols-2 gap-3  sm:gap-5 max-w-2xl w-full'>
    <div>
        <p className='mb-2 font-medium text-sm'> your name</p>
  
    <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
        <img src={assets.person_icon} alt="" />
        <input type="text" placeholder='enter your name' className='text-sm p-3 w-full outline-none ' required />
    </div>  </div>
    <div>
        <p className='mb-2 font-medium text-sm'> EmaiL Adress</p>
  
    <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
        <img src={assets.email_icon} alt="" />
        <input type="text" placeholder='enter your email' className='text-sm p-3 w-full outline-none ' required/>
    </div>  </div>
    <div className='sm:col-span-2'>
    <p className='mb-2 font-medium text-sm'>Message</p>
    <textarea rows={8} placeholder='enter your message' className='w-full rounded-lg p-3 text-sm  border border-gray-300 dark:border-gray-600'/>   
    </div>
    <button type='submit' className='flex gap-2 text-white justify-center items-center w-50 py-3 bg-primary rounded-full hover:scale-103 transition-all'>submit <img src={assets.arrow_icon} alt="" className='w-4' /></button>
    </form>

    </div>
  )
}

export default Contact