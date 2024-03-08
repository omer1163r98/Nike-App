import React from 'react'
import {useNavigate} from 'react-router-dom'
import { star } from '../../assets/icons'
const ProductCard = ({product}) => {
  const navigate = useNavigate()
  
  return (
    <div>
       <div onClick={() => navigate(`/product-details/${product.id}`)} className=' w-[250px] h-[250px] cursor-pointer block mb-20'>
            <img className='hover:scale-105 border-2 border-coral-red rounded-[20px] transition-transform duration-200' src={product.imgURL}/>
            <span className='flex items-center'>

            <img className="w-4 mt-10" src={star}/>
            <p className='mt-10 ml-2'>({product.rating})</p>
            </span>
            <h4 className='text-lg font-bold font-montserrat mt-2'>{product.name}</h4>
            <h4 className='text-lg font-semibold text-coral-red font-montserrat mt-2'>{product.price}</h4>
          </div>
    </div>
  )
}



export default ProductCard
