import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Cart from './Cart.jsx'

function Main() {
 
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const updateCartItem = (updatedItem) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === updatedItem.id ? updatedItem : item
    );
    setCartItems(updatedCartItems);
  };

  const removeFromCart = (itemId) => {
    const updatedCartItems = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  const calculateTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + (item.quantity || 0), 0);
  };

  return (
<React.StrictMode>
       
    <header>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">Products</a></li>
        </ul>
      </nav>
      <div >
      
  <span>
  <button className = "btn btn-outline-info" onClick={toggleCart}><i className="fa-duotone fa-cart-shopping-fast fa-fade fa-xl" style={{
    '--fa-primary-color': '#0f574f',
    '--fa-secondary-color': '#1534ac',
    '--fa-secondary-opacity': 0.8,
  }}></i>
  Cart 
  <span class="badge bg-dark text-white ms-1 rounded-pill">{calculateTotalQuantity()}</span>
  </button>
  </span>
      </div>
    </header>
    <div class="alert alert-success text-center" role="alert">
  <h4 class="alert-heading">Ithu Nammu Ooru Shopping Paa!</h4>
  </div>

{
  showCart? <Cart cartItems={cartItems} updateCartItem ={updateCartItem} /> : 

  <div className='container-fluid'>

    <div className='row justify-content-center'>

      <div className='col-3'>
  <App id={1} name="Watch" price={1200} description="The Watch has unique Style" 
  image="https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80"
  addToCart={addToCart} removeFromCart={removeFromCart}></App> 
  </div>

  <div className='col-3'>
  <App id={1} name="Watch" price={1200} description="The Watch has unique Style" 
  image="https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80"
  addToCart={addToCart} removeFromCart={removeFromCart}></App>
  </div>

  <div className='col-3'>
  <App id={1} name="Watch" price={1200} description="The Watch has unique Style" 
  image="https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80"
  addToCart={addToCart} removeFromCart={removeFromCart}></App>
  </div>

  <div className='col-3'>
  <App id={1} name="Watch" price={1200} description="The Watch has unique Style" 
  image="https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80"
  addToCart={addToCart} removeFromCart={removeFromCart}></App>
  </div>

  </div>

  <br />

  <div className='row justify-content-center'>

  <div className='col-3'>
  <App id={1} name="Watch" price={1200} description="The Watch has unique Style" 
  image="https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80"
  addToCart={addToCart} removeFromCart={removeFromCart}></App>
  </div>

  <div className='col-3'>
  <App id={1} name="Watch" price={1200} description="The Watch has unique Style" 
  image="https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80"
  addToCart={addToCart} removeFromCart={removeFromCart}></App>
  </div>

  <div className='col-3'>
  <App id={1} name="Watch" price={1200} description="The Watch has unique Style" 
  image="https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80"
  addToCart={addToCart} removeFromCart={removeFromCart}></App>
  </div>
  
  <div className='col-3'>
  <App id={1} name="Watch" price={1200} description="The Watch has unique Style" 
  image="https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80"
  addToCart={addToCart} removeFromCart={removeFromCart}></App>
  </div>

  </div>

  <br />

  </div> 
}

    </React.StrictMode>

  );
}


ReactDOM.createRoot(document.getElementById('root')).render(

  <Main/>

)
