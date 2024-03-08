import React from 'react'
import ProductCard from '../components/ProductCard'
import { products } from '../constants'

const Products = () => {
  return (
    <div className='flex flex-row flex-wrap gap-28 justify-center mt-20 mb-20'>
        {products.map((product) => (
            <ProductCard product={product}></ProductCard>
        ))}
      
    </div>
  )
}

export default Products
