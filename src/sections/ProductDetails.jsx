import React from 'react'
import ProductCard from '../components/ProductCard'
import { useParams } from 'react-router-dom';
import { products } from '../constants';
import { shoe4, shoe5, shoe6, shoe7, shoe8 } from '../../assets/images';
import Button from '../components/Button';
import { arrowRight, star } from '../../assets/icons';
const ProductDetails = ({array , setArr}) => {
    const { id } = useParams();
    const productId = parseInt(id); 
    const currentProduct = products.find(product => product.id === productId);

    function addToCart () {
        if (array.includes(currentProduct)){
            alert('item already in cart. Please check your cart.')
        }else{
            array.push(currentProduct)

        }
        console.log(array)
    }
  return (
    <div className='flex flex-row justify-start items-center h-full gap-20 m-20'>
        <img width={400} src={currentProduct.imgURL}></img>
        <div className='flex flex-col gap-2'>
        <h2 className='text-2xl font-semibold'>{currentProduct.name}</h2>
        <h3 className='text-coral-red font-semibold text-xl'>{currentProduct.price}</h3>
        <div  className='flex gap-2 items-center'>
        <img width={18} src={star}/>
        <p className='text-md'>{currentProduct.rating}</p>
        </div>
        
        <div onClick={addToCart} className='mt-10'>
        <Button label='Add to Cart' icon={arrowRight}/>

        </div>
        </div>
    </div>
  )
}

export default ProductDetails
