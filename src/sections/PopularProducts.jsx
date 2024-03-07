import React from 'react'
import { products } from '../constants'
import { star } from '../../assets/icons'
import ProductCard from '../components/ProductCard'
const PopularProducts = () => {
  return (
    <section>
      <div>
        <h2 className='text-4xl font-semibold font-palanquin'>Our <span className='text-coral-red'>Popular</span> Products</h2>
        <p className='text-slate-gray mt-4'>Experience luxury comfort and style with our exclusive releases.</p>
      </div>

      <div className='flex flex-row gap-10 justify-center mt-20'>
        {products.map((product) => (
         <div>
          <ProductCard product={product}/>
         </div>
        ))}
      </div>
    </section>
  )
}

export default PopularProducts
