import React, { useContext } from "react";
import Product from "./product";
import { CartContext } from "../context/cart";

function ProductList(props) {
  const { lists } = props;

  const { items } = useContext(CartContext);
  console.log("itemms cart", items);
  return (
    <div className="product-list">
      {lists.map((list) => {
        return <Product key={list.id} data={list} />;
      })}
    </div>
  );
}

export default ProductList;
