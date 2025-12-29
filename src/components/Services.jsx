import React from 'react'
import assets from '../images/assets'
import Title from './Title'
import Servicescard from './Servicescard'

const Services = () => {

    const servicedata =[
        {
            title:"advertisig",
            description: "we turn bold ideas into powerful digital solutions that connect",
            icon:assets.ads_icon
        },
         {
            title:"marketing",
            description: "we turn bold ideas into powerful digital solutions that connect",
            icon:assets.marketing_icon
        },
         {
            title:"content writing",
            description: "we turn bold ideas into powerful digital solutions that connect",
            icon:assets.content_icon
        },
         {
            title:"social media",
            description: "we turn bold ideas into powerful digital solutions that connect",
            icon:assets.social_icon
        },
    ]
  return (
    <div id='services' className=' container mx-auto max-w-7xl relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>

<img src={assets.bgImage2} className='absolute -top-110 -left-70 -z-1 dark:hidden'/>
<Title title='  Now can we help?' desc='from strategy to execution we craft digital soloutions that moves your bussiness forward'/>
<div className=' flex flex-col md:grid md:grid-cols-2 gap-6'>

{servicedata.map((service,index)=>(
   <Servicescard key={index} service={service} index={index}  /> 
))}</div> 

    </div>
   
  )
}

export default Services