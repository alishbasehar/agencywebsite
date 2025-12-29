import React, { useState } from 'react'

const Servicescard = ({ service }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  return (
    <div
      className="relative max-w-lg m-4 rounded-xl group"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        setPosition({
          x: e.clientX - rect.left - rect.width/ 2 ,
          y: e.clientY - rect.top - rect.height/ 2 ,
        })
      }}
      onMouseLeave={() => setPosition({ x: 0, y: 0 })}
    >
     
      <div
        className="absolute inset-0 rounded-xl border-2 border-indigo-500 opacity-0 group-hover:opacity-40
        transition-all duration-500 ease-out pointer-events-none"
        style={{
          transform: `translate(${position.x / 40}px, ${position.y / 40}px)`,
        }}
      />

      {/* CARD CONTENT */}
      <div className="relative z-10 flex items-center gap-6 p-8 rounded-xl bg-white dark:bg-gray-900">
        <div className="bg-gray-100 dark:bg-gray-700 rounded-full">
          <img
            src={service.icon}
            alt={service.title}
            className="max-w-24 bg-white dark:bg-gray-900 rounded-full m-2"
          />
        </div>

        <div className="flex-1">
          <h3 className="font-bold capitalize text-lg">{service.title}</h3>
          <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">
            {service.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Servicescard
