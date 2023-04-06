import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './ReviewItem.css';

const ReviewItem = ({product, handleRemoveFromCart}) => {
  const {img, name, price, id, quantity} = product;
  return (
    <div>
      <div className='border-solid flex items-center border-2 rounded-lg bg-slate-300'>
     <img src={img} alt="product Image" className='rounded-xl w-20 p-2'/>
     <div className='reviewDetails'>
     <p className='text-xl'>{name}</p>
      <p>Price <span className='text-orange-600'>${price}</span></p>
      <p>Order Quantity: <span className='text-orange-600'>{quantity}</span></p>
     </div>
     <button onClick={()=>handleRemoveFromCart(id)} className='delete-btn text-red-500'><FontAwesomeIcon icon={faTrashAlt}/></button>
    </div>
    </div>
  );
};

export default ReviewItem;