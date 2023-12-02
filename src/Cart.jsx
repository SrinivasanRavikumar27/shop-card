import React, { useState } from 'react'
import  './cart.css'

function Cart({ cartItems, updateCartItem }) {

    const [cart, setCart] = useState(cartItems);
  
    // increase button function
    const increaseQuantity = (itemId) => {
      const updatedCart = cart.map((item) => {
        if (item.id === itemId) {
          const newQuantity = item.quantity + 1;
        updateCartItem({ ...item, quantity: newQuantity }); // Update the cart item
        return { ...item, quantity: newQuantity };
        }
        return item;
      });
      setCart(updatedCart);
    };
  
    // decrease button function
    const decreaseQuantity = (itemId) => {
      const updatedCart = cart.map((item) => {
        if (item.id === itemId && item.quantity > 1) {
          const newQuantity = item.quantity - 1;
          updateCartItem({ ...item, quantity: newQuantity }); // Update the cart item
          return { ...item, quantity: newQuantity };
        }
        return item;
      });
      setCart(updatedCart);
    };

    // Calculate the product amount
    const productTotal = (item) => {
      return item.price * item.quantity;
    };

    // Calculate the total amount
    const overallTotal = cart.reduce((total, item) => total + productTotal(item), 0);  
  
    return (
      <div className='cart-page'>
        <h2>Your Cart</h2>
        <table>
        {cart.map(item => (
          <div key={item.id} className='cart-item'>
            <tr>
            <td><img src={item.image} /></td>
            <td>{item.name}</td>
            <td><p>Rs {item.price}</p></td>
            <td><div className='quantity-controls'>
              <button onClick={() => decreaseQuantity(item.id)}>-</button>

              <span>{item.quantity}</span>

              <button onClick={() => increaseQuantity(item.id)}>+</button>
            </div></td>
            <td><p>Subtotal: Rs {productTotal(item)}</p></td>
            </tr>
                    </div>
        ))}
        </table>
        <div className="cart-summary">
        <p>Total Amount : Rs {overallTotal}</p>
      </div>
      </div>
    );

  }

export default Cart