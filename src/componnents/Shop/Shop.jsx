import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCarAlt } from '@fortawesome/free-solid-svg-icons'
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import { Link } from 'react-router-dom';
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(()=>{
    const loadProductsData = async ()=> {
     try{
      const jsonData = ('products.json')
      const res = await fetch(jsonData)
      const data = await res.json()
      setProducts(data)
     }
     catch(error){
      console.log(error)
     }
    };
    loadProductsData()
  },[]);

useEffect(()=>{
const storedCart = getShoppingCart();
let savedCart = []
for(const id in storedCart){
  // step 2: get the product by using id 
  const addedProduct = products.find(product => product.id === id);
if(addedProduct){
    // step 3: get quantity of the products
    const quantity = storedCart[id];
    addedProduct.quantity = quantity;
    // step 4: add the added product to the save cart 
    savedCart.push(addedProduct)
}
};
// step 5 set the cart 
setCart(savedCart)
}, [products])

  const handleAddToCart = (product) =>{
    let newCart = [];
    // const newCart = [...cart, product];
    // if product doesn't exist in the cart, the set quantity = 1;
    // if exist update quantity by 1
    const exist = cart.find(pd => pd.id === product.id);
    if(!exist){
      product.quantity = 1;
      newCart = [...cart, product]
    }
    else{
      exist.quantity = exist.quantity + 1;
      const remaining = cart.filter(pd => pd.id !== product.id);
      newCart = [...remaining, exist]
    };
    
    setCart(newCart);
    addToDb(product.id)
  };

 const handleClearCart = () =>{
  setCart([])
  deleteShoppingCart()
  }

  return (
    <div className='shop-container'>
   <div className='product-container'>
   {
      products.map(product => <Product 
      key = {product.id}
      product = {product}
      handleAddToCart = {handleAddToCart}
      
      /> )
    }
   </div>
    <div className='col-span-1'>
      <Cart handleClearCart = {handleClearCart}
       cart = {cart}> 
     <Link to = "/orders">
     <button className='bg-yellow-300 flex justify-between  text-black w-[88%] m-5 rounded-md text-xl p-2 items-center'>Review Order
     <FontAwesomeIcon icon={faCarAlt}/>
     </button>
     </Link>
        </Cart>
    </div>
    </div>
  );
};

export default Shop;