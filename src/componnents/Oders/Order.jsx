import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'

const Order = () => {
  const saveCart = useLoaderData();
  const [cart, setCart] = useState(saveCart);

  const handleRemoveFromCart = (id) =>{
    const remaining = cart.filter(product => product.id !== id);
    setCart(remaining);
    removeFromDb(id)
  };

  const handleClearCart = () =>{
    setCart([])
    deleteShoppingCart()
    }
  return (
    <div className='grid lg:grid-cols-4'>
     <div className='grid col-span-3 gap-4 px-5 mx-auto lg:grid-cols-1 my-12 w-[75%]'>
     {
      cart.map(product => <ReviewItem
         key={product.id}
         handleRemoveFromCart = {handleRemoveFromCart}
          product={product}/>)
      }
     </div>
      <div className='col-span-1 mx-auto pl-14 my-12 rounded'>
      <Cart
      handleClearCart = {handleClearCart}
       cart = {cart} >
   <div className='pl-2'>
   <Link to="/checkout">
        <button className='bg-yellow-300 flex justify-between  text-black p-2 rounded-md items-center'>Proceed Checkout
        <FontAwesomeIcon className='pl-2 py-2' icon={faLongArrowAltRight}/>
        </button>
        </Link>
   </div>
       </Cart>
    </div>
    </div>
  
  );
};

export default Order;