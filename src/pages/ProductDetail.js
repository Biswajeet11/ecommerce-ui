import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../component/product";
import Comment from "../component/Comment";
import UseProduct from "../hooks/useProduct";
import { url } from "../constants/url";
import { getComments } from "../data/commentsData";

const ProductDetail = () => {
  const [commentsData, setComments] = useState([]);
  const { productId } = useParams();
  const { productData, isLoading, error } = UseProduct(url, productId, "");

  useEffect(() => {
    getComments().then((data) => {
      console.log("data", data);
      setComments(data);
    });
  }, [commentsData]);
  return (
    <div>
      <h1>Product Details</h1>
      {isLoading ? (
        "isLoading"
      ) : (
        <div>
          <Product data={{ ...productData }} />
          <Comment comments={[...commentsData]} />
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
