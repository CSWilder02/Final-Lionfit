import React, { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function SingleProduct() {
  const { id } = useParams();
  const [card, setCard] = useState({});
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/form/${id}`)
      .then(res => setCard(res.data))
      .catch(err => console.error(err))
  }, [id]);

  const handleAddToCart = () => {
    const existingCart = JSON.parse(sessionStorage.getItem("cart")) || [];

    const isProductInCart = existingCart.some((item) => item.id === id);

    if (!isProductInCart) {
      existingCart.push({ id, ...card });

      sessionStorage.setItem("cart", JSON.stringify(existingCart));
      setIsAddedToCart(true); // Set the state to indicate that the product has been added to the cart
    }
  };

  return (
    <div className='SinglePage' style={{ height: '763px'}}>
      <div className="container4">
        <img className='ProductSingle' src={card.image} alt={card.name} />
        <div>
          <h1 className='TitleSingle'>{card.name}</h1>
          <p className='NikeAd'>{card.category}</p>
          <p className='NikeDiscription' style={{color: 'white'}}>
            Price: R {card.price} <br /><br />
            Stock: {card.stock} in store
          </p>
        </div>
      </div>
      <button className="button9" onClick={handleAddToCart}>
        {isAddedToCart ? "ADDED" : "ADD TO CART"} {/* Conditionally render button text */}
      </button>
      <Link to="/cart" style={{paddingLeft: '120px', paddingRight: '120px', paddingTop: '27px', paddingBottom: '27px', textDecoration: 'none', color: 'white'}} className='button8'>View Cart</Link>
    </div>
  );
}

export default SingleProduct;

