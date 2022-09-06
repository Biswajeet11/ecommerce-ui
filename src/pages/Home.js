import React, { useState } from "react";
import useApi from "../hooks/useApi";
import ProductList from "../component/productList";
import Form from "../component/form";
import { debounce } from "../utils";
import { url } from "../constants/url";

const Home = () => {
  const [text, setText] = useState("");

  let { data, isLoading, error, productFilter } = useApi(url, text);

  const handleSearch = () => {
    if (text.trim() !== " ") {
      debounce(productFilter(text), 0);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setText(e.target.value);
    handleSearch();
  };

  return (
    <div>
      <Form handleSearch={handleChange} />
      {isLoading ? "isLoading" : <ProductList lists={data} />}
    </div>
  );
};

export default Home;
