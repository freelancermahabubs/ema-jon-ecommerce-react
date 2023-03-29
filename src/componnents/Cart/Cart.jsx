import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
  console.log(cart)
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
     <div className='oder-info pl-4'>
     <p className='text-xl font-semibold'>Selected Items: {quantity} </p>
        <p className='text-xl font-semibold'>Total Price: ${totalPrice}</p>
        <p className='text-xl font-semibold'>Total Shipping: ${totalShipping}</p>
        <p className='text-xl font-semibold'>Tax: ${tax.toFixed(2)}</p>
        <h6 className='text-3xl font-semibold text-center mt-4'>Grand Total <span className='text-xl'>${grandTotal.toFixed(2)}</span></h6>
     </div>
    </div>
  );
};

export default Cart;