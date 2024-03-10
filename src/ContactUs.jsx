import React from 'react'
import Button from './components/Button'
import { arrowRight } from '../assets/icons'

const ContactUs = () => {
  return (
    <div className='bg-white shadow-xl p-16 w-[700px] m-auto mt-4'>
        <h2 className='text-coral-red text-2xl font-bold text-center mb-8'>Contact Us</h2>
      <form className='flex flex-col gap-4'>
        <label className='text-coral-red font-bold'>Name:</label>
        <input className='border-slate-gray border-2'></input>
        <label className = 'text-coral-red font-bold'>Email:</label>
        <input className='border-slate-gray border-2'></input>
        <label className = 'text-coral-red font-bold'>Message:</label>
        <input className='border-slate-gray border-2 h-40'></input>
        <Button label='Send Message' icon={arrowRight}></Button>
      </form>
    </div>
  )
}

export default ContactUs
