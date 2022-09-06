import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/cart";
import StarRating from "../component/starRating";
import "../styles.css";

function Product({ data }) {
  const { id, title, description, image, price, rating } = data;
  const [quantity, setQuantity] = useState(0);
  const productObj = { ...data, quantity };
  const { addToCart, removeFromCart } = useContext(CartContext);

  let navigate = useNavigate();
  const routeChange = (productId) => {
    let path = `/${productId}`;
    navigate(path);
  };

  const updateCartItem = (productObj, q) => {
    setQuantity((prevState) => prevState + q);
    if (q < 0) {
      removeFromCart(productObj);
    } else {
      addToCart(productObj);
    }
  };
  return (
    <div className="product" key={id}>
      <div onClick={() => routeChange(id)}>
        <h1>{title}</h1>
        <img className="image" src={image} alt="" />
        <h2>{description}</h2>
        <h2>${price}</h2>
      </div>
      {rating !== undefined && <StarRating rating={rating.rate} />}
      {quantity > 0 ? (
        <div>
          <button onClick={() => updateCartItem(productObj, -1)}> - </button>
          {quantity}
          <button onClick={() => updateCartItem(productObj, 1)}>+</button>
        </div>
      ) : (
        <button onClick={() => updateCartItem(productObj, 1)}>
          Add to cart
        </button>
      )}
    </div>
  );
}

export default Product;
