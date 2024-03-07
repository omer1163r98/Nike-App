import React from 'react'
import { reviews } from '../constants'
import { star } from '../../assets/icons'

const Reviews = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h2 className='text-4xl font-semibold'>Our <span className='text-coral-red'>Customers</span></h2>
      <div className='flex flex-row gap-40 mt-20'>
      {reviews.map((review) => (
        <div className='flex flex-col gap-5 justify-center items-center'>
          <img width={175} className='rounded-full' src={review.imgURL}/>
          <p className='text-center text-slate-gray w-[400px]'>{review.feedback}</p>

          <div id='name-review' className='flex flex-row gap-4 items-center'>
            <h3 className='text-lg font-bold'>{review.customerName}</h3>
            <img width={16} src={star} className='-mr-3'/>
            <p>({review.rating})</p>
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Reviews
