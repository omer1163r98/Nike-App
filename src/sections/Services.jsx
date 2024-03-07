import React from 'react'
import ServiceCard from '../components/ServiceCard'
import { services } from '../constants'
import {shieldTick, support, truckFast} from "../../assets/icons"

const Services = () => {
  return (
    <div className='flex justify-center gap-20 -mt-9'>
      {services.map((service) => (
        <div key={service.label}>
            <ServiceCard icon={service.imgURL} title={service.label} description={service.subtext}/>
        </div>
      ))}
    </div>
  )
}

export default Services
