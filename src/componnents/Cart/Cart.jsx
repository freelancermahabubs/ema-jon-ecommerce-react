import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './Cart.css';

const Cart = ({cart, handleClearCart, children}) => {
  let totalPrice = 0;
  let totalShipping = 0;
  let quantity = 0;
  for(const product of cart){
    // if(product.quantity === 0){
    //   product.quantity = 1;
    // };
    // product.quantity = product.quantity || 1;
    totalPrice += + product.price * product.quantity;
    totalShipping += + product.shipping;
    quantity += + product.quantity;
  };

  const tax = (totalPrice * 7 / 100);
  const grandTotal = (totalPrice + totalShipping + tax);

  return (
    <div className='cart ml-5'>
      <h4 className='text-3xl font-bold text-center'>Order Summary</h4>
     <div className='pl-4'>
     <p className='text-xl font-semibold'>Selected Items: {quantity} </p>
        <p className='text-xl font-semibold'>Total Price: ${totalPrice}</p>
        <p className='text-xl font-semibold'>Total Shipping: ${totalShipping}</p>
        <p className='text-xl font-semibold'>Tax: ${tax.toFixed(2)}</p>
        <h6 className='text-3xl font-semibold text-center mt-4'>Grand Total <span className='text-xl'>${grandTotal.toFixed(2)}</span></h6>
        <button onClick={handleClearCart} className='flex justify-between  text-white w-[88%] m-5 bg-red-700 rounded-md text-xl p-2 items-center'>
          <span>Clear Cart</span>
    <FontAwesomeIcon icon={faTrashAlt}/>
        </button>
        {children}
     </div>
    </div>
  );
};

export default Cart;