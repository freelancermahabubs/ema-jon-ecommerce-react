import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
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
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.id)
  };
  return (
    <div className='shop-container'>
   <div className='grid gap-4 my-4 pl-5 lg:grid-cols-3'>
   {
      products.map(product => <Product 
      key = {product.id}
      product = {product}
      handleAddToCart = {handleAddToCart}
      
      /> )
    }
   </div>
    <div>
      <Cart cart = {cart}/>
    </div>
    </div>
  );
};

export default Shop;