import React from 'react'
import { useNavigate } from 'react-router-dom'

const Button = ({label, icon}) => {
  const navigate = useNavigate()
  return (
    <button className='flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red rounded-full text-white border-coral-red' onClick={() => {
      navigate('/products')
    }}>
        {label}
        <img src={icon} className='ml-2 rounded-full w-5 h-5'/>
    </button>

  )
}

export default Button
