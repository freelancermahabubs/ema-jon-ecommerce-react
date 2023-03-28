import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
  const {img, price, seller, name, ratings} = props.product;
 const handleAddToCart = props.handleAddToCart;
  return (
    <div className='product'>

 <div className="card w-full min-h-full bg-base-100 shadow-xl">
  <img className='w-[96%] hover:scale-50 transition-all duration-500 cursor-pointer' src={img} alt="img" />
  <div className="card-body">
    <h2 className="text-xl font-semibold">
      {name}
    </h2>
    <p className='price'>Price: ${price}</p>
    <div className='my-5'>
    <p>Manufacturer: {seller}</p>
    <p>Rating: {ratings} stars</p>
    </div>
  </div>
  <button onClick={()=> handleAddToCart(props.product)} className="btn-add-to-cart bg-orange-100 text-black">Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
</div>

    </div>
  );
};

export default Product;