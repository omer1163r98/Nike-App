import React from 'react'
import Button from '../components/Button'
import { arrowRight } from '../../assets/icons'

const Subscribe = () => {
  return (
      <div className='flex flex-col justify-center items-center w-full gap-8'>
        <h2 className='text-4xl font-semibold'>Sign up for Updates & Offers</h2>
        <form className='flex flex-row w-full items-center justify-center'>
          <div className='relative w-[60%]'>
            <input className='w-full border-2 rounded-full p-6 border-slate-gray' placeholder='example@gmail.com'></input>
            <div className='absolute flex top-2 right-0 pr-3 h-[80%]'>
              <Button label={'signup'} icon={arrowRight}/>
            </div>
          </div>
        </form>
      </div>
    );
    
  
}

export default Subscribe
