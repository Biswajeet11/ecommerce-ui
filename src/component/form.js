import React from "react";

function Form({ handleSearch }) {
  return <input type="text" onChange={handleSearch} />;
}

export default Form;
