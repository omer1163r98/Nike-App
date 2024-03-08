import React from 'react'

const Cart = ({array, setArr}) => {

    function removeProductFromCart (product) {
        const index = array.indexOf(product)
        const newArr = [...array]
        newArr.splice(index, 1);
        setArr(newArr)
    }
  return (
    <div className='m-4 flex flex-row gap-24 justify-center items-start flex-wrap'>
      {array.map((item) => (
        <div className='flex flex-col gap-2'>
        <img width={300} src={item.imgURL}/>
        <h3 className='font-semibold text-lg'>{item.name}</h3>
        <h3 className='font-semibold text-md'>{item.price}</h3>
        <button className='bg-coral-red text-white p-2 w-14 h-6 flex justify-center items-center text-[10px] rounded-full' onClick={() => removeProductFromCart(item)}>Remove</button>
        </div>
        
      ))}
    </div>
  )
}

export default Cart
