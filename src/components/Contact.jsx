import React from 'react'
import Title from './Title'
import assets from '../images/assets'
import toast from 'react-hot-toast'

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)
    formData.append("access_key", "82623c4d-29ff-40f0-9808-54f549759cc5")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      })

      const data = await response.json()

      if (data.success) {
        toast.success('Data submitted successfully')
        event.target.reset()
      } else {
        toast.error(data.message || 'Submission failed')
      }

    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <div
      id='contactus'
      className='container mx-auto max-w-7xl flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 pt-20 text-gray-700 dark:text-white'
    >
      <Title
        title='Reach out to us'
        desc='From strategy to execution, we craft digital solutions that move your business forward.'
      />

      <form onSubmit={onSubmit} className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full'>
        
        <div>
          <p className='mb-2 font-medium text-sm'>Your Name</p>
          <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
            <img src={assets.person_icon} alt="" />
            <input
              type="text"
              placeholder='Enter your name'
              name="name"
              className='text-sm p-3 w-full outline-none'
              required
            />
          </div>
        </div>

        <div>
          <p className='mb-2 font-medium text-sm'>Email Address</p>
          <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
            <img src={assets.email_icon} alt="" />
            <input
              type="email"
              placeholder='Enter your email'
              name="email"
              className='text-sm p-3 w-full outline-none'
              required
            />
          </div>
        </div>

        <div className='sm:col-span-2'>
          <p className='mb-2 font-medium text-sm'>Message</p>
          <textarea
            rows={8}
            placeholder='Enter your message'
            name="message"
            className='w-full rounded-lg p-3 text-sm border border-gray-300 dark:border-gray-600'
            required
          />
        </div>

        <button
          type='submit'
          className='flex gap-2 text-white justify-center items-center  w-50 py-3 bg-primary rounded-full hover:scale-105 transition-all'
        >
          Submit
          <img src={assets.arrow_icon} alt="" className='w-4' />
        </button>
      </form>
    </div>
  )
}

export default Contact
