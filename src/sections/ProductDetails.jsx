import React from 'react'
import ProductCard from '../components/ProductCard'
import { useParams } from 'react-router-dom';
import { products } from '../constants';
const ProductDetails = () => {
    const { id } = useParams();
    const currentProduct = products.find((product) => product.id === id)
    console.log(currentProduct, id)
  return (
    <div className=''>
      {currentProduct && <h2>{currentProduct.name}</h2>}
    </div>
  )
}

export default ProductDetails
