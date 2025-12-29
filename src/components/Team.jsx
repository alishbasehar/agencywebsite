import React from 'react'
import Title from './Title'
import { teamData } from '../images/assets'

const Team = () => {
  return (
    <div className=' container max-auto max-w-7xl flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-800 dark:text-white'>
      <Title title='Meet the team' desc='A passionate team of digital experts dedicated to your brands success.'/>
        

 <div className="flex flex-wrap gap-8 sm:gap-5 justify-start">
  {teamData.map((team, index) => (
    <div
      key={index}
      className="flex  items-center justify-center gap-5 p-4 rounded-2xl
                 border border-gray-100 dark:border-gray-600
                 shadow-2xl shadow-gray-100 dark:shadow-white/5
                 hover:scale-105 transition-transform duration-300
                 w-full sm:w-[48%] lg:w-[23%]"
    >
      <img src={team.image} className="w-12 h-12 rounded-full" />
      <div className="text-center whitespace-nowrap">
        <h3 className="font-semibold">{team.name}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">{team.title}</p>
      </div>
    </div>
  ))}
</div>


        </div>
  )
}

export default Team