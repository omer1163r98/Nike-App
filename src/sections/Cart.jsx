import React, { useState } from 'react'

const Cart = ({array, setArr}) => {
    const [quantity, setQuantity] = useState({})

    function removeProductFromCart (product) {
        const index = array.indexOf(product)
        const newArr = [...array]
        newArr.splice(index, 1);
        setArr(newArr)
    }

    function updateQuantity(productId, newQuantity) {
        setQuantity(prevQuantities => ({
            ...prevQuantities,
            [productId]: newQuantity 
        }));
    }
    function increaseQuantity(productId) {
        updateQuantity(productId, (quantity[productId] || 1) + 1);
    }

    function decreaseQuantity(productId) {
        const currentQuantity = quantity[productId] || 0;
        if (currentQuantity > 0) {
            updateQuantity(productId, currentQuantity - 1);
        }
    }
  return (
    <div className='m-4 flex flex-row gap-24 justify-center items-start flex-wrap'>
      {array.map((item) => (
        <div className='flex flex-col gap-2'>
        <img width={300} src={item.imgURL}/>
        <h3 className='font-semibold text-lg'>{item.name}</h3>
        <h3 className='font-semibold text-md'>{item.price} 
        <span className='flex gap-2'>
            <button className='bg-coral-red w-4 rounded-full flex justify-center items-center text-white text-xs' onClick={() => decreaseQuantity(item.id)}>-</button>
            <input value={quantity[item.id] || 1} className='w-10 text-center' onChange={(e) => updateQuantity(item.id, e.target.value)}></input>
            <button className='bg-coral-red w-4 rounded-full flex justify-center items-center text-white text-xs' onClick={ () => increaseQuantity(item.id)}>+</button>
        </span>
        
        
        
        </h3>
        <button className='bg-coral-red text-white p-2 w-14 h-6 flex justify-center items-center text-[10px] rounded-full' onClick={() => removeProductFromCart(item)}>Remove</button>
        </div>
        
      ))}
    </div>
  )
}

export default Cart
