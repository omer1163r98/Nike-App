import React from 'react'
import { shoe4, shoe7, shoe8, thumbnailBackground } from '../../assets/images'
import Button from '../components/Button'
import { arrowRight } from '../../assets/icons'

const SuperQuality = () => {
  return (
    <div className='flex flex-row gap-10 justify-center items-center mt-20'>
        <div className=''>
            <h2 className='text-4xl font-semibold'>We Provide <span className='text-coral-red'>High</span> Quality Shoes</h2>
            <p className='text-slate-gray w-[500px] mt-4 mb-10'>Ensuring premium comfort and style, our team is dedicated in crafting refined and long lasting shoes. We have both online and in store products for our costumer's convineince</p>
            <Button label='View Shoes' icon={arrowRight} />
        </div>
        <div>
            <img src={shoe8}></img>
        </div>
    </div>
  )
}

export default SuperQuality
