import React, { useEffect, useState } from "react";
import useApi from "./useApi";

function UseProduct(url, productId) {
  const { data, error, isLoading } = useApi(url, "");
  const [productData, setProductData] = useState({});

  useEffect(() => {
    const product = data.find((d) => d.id === Number(productId));
    setProductData(product);
  }, [data, productId]);

  return { productData, error, isLoading };
}

export default UseProduct;
