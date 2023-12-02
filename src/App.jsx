import { useState } from 'react'; // Import React and useState
import './App.css';

function App(props) {
  
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const handleAddToCart = () => {
    const itemWithQuantity = { ...props, quantity: 1 }; // Add quantity property
    props.addToCart(itemWithQuantity);
    setIsAddedToCart(true);
  };

  const handleRemoveFromCart = () => {
    props.removeFromCart(props.id);
    setIsAddedToCart(false);
  };

  return (
    <div className='card h-100'>
      <img src={props.image} className='card-img-top' alt='' />
      <div className='card-body'>
        <h5 className='card-title'>{props.name}</h5>
        <p className='card-text'>Rs {props.price}</p>
        <p className='card-text'>{props.description}</p>
        {isAddedToCart ? (
          <button onClick={handleRemoveFromCart} className='btn btn-danger'>
            Remove from Cart
          </button>
        ) : (
          <button onClick={handleAddToCart} className='btn btn-primary'>
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
