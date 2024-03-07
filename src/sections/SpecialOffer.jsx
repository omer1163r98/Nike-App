import React from 'react'
import Button from '../components/Button'
import { arrowRight, star } from '../../assets/icons'
import { offer } from '../../assets/images'

const SpecialOffer = () => {
  return (
    <section className='flex flex-row justify-center'>
      <div>
        <img width={600} height={600} src={offer}/>
      </div>
      <div >
        <h2 className='text-4xl font-semibold mb-6'>Special <span className='text-coral-red'>Offer</span></h2>
        <p className='text-slate-gray w-[500px] mb-10'>Embark on a journey with Nike. From premier selections  to incredible savings, all when you shop with us. Get up to 30% off your next order when you sign up with us using email or phone</p>
        <Button icon={arrowRight} label='Shop'></Button>
        <p className='w-[500px] text-slate-gray text-xs mt-48'> <span className='text-xs font-semibold'>Note:</span> Limited use of discounts, only applicable if you are first time user. More than three attempts with the same device will result in suspension of account and restricted accessibility for 1 week.</p>
      </div>
    </section>
  )
}

export default SpecialOffer
