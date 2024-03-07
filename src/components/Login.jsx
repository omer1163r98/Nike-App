import React from 'react'
import Button from './Button'
import { arrowRight } from '../../assets/icons'
import { close } from '../../assets/icons'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
  return (
    <section className='flex justify-center mt-[10%]'>
    <div className='flex flex-col bg-white w-[500px] h-[500px] absolute z-20 items-center rounded-2xl shadow-xl'>
      <h2 className='text-2xl font-bold text-coral-red font-palanquin mt-16 mb-4'>Log in</h2>
      <form className='flex flex-col'>
        <label className='text-sm mb-2 font-montserrat font-semibold'>Email</label>
        <input placeholder='email' className='w-80 h-10 p-4 outline-none rounded-xl border-[1px] border-slate-gray mb-4' ></input>
        <label className='text-sm mb-2 font-montserrat font-semibold'>Password</label>
        <input placeholder='password' className='w-80 h-10 p-4 outline-none rounded-xl border-[1px] border-slate-gray mb-6' ></input>
      </form>
      <Button label="Log in" icon={arrowRight}></Button>
      <div className='flex flex-row gap-10 text-sm text-slate-gray mt-6'>
        <p>Forgot Password?</p>
        <p>Sign Up</p>
      </div>
      <img onClick={() => navigate('/')} width={20} src={close} className='absolute left-[92%] top-[5%] cursor-pointer'/>

    </div>
    </section>
  )
}

export default Login
