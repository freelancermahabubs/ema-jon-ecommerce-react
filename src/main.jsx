import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Shop from './componnents/Shop/Shop';
import Home from './componnents/Layout/Home';
import Order from './componnents/Oders/Order';
import Inventory from './componnents/Inventory/Inventory';
import Login from './componnents/Login/Login';
import cartProductsLoader from './loaders/cartProductsLoader';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    children: [{
      path: '/',
      element: <Shop/>,
    },
    {
      path: 'orders',
      element: <Order/>,
      loader: cartProductsLoader,
    },
    {
      path: 'inventory',
      element: <Inventory/>,
    },
    {
      path: 'login',
      element: <Login/>
    }
  ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
