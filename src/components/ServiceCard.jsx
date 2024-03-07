import React from 'react'
import {shieldTick, support, truckFast} from "../../assets/icons"

const ServiceCard = ({ icon, title, description}) => {
  return (
    <div className='w-[300px] h-[300px] shadow-lg bg-white rounded-xl flex justify-center'>
      <div className='flex flex-col p-6 justify-center relative'>
        <img alt='icon-img' className='w-[45px] p-2 bg-coral-red z-10 rounded-full absolute top-12' src={icon}></img>
        <h2 className='text-2xl font-bold top-28 absolute'>{title}</h2>
        <p className='text-slate-gray mt-24'>{description}</p>
      </div>
    </div>
  )
}

export default ServiceCard
