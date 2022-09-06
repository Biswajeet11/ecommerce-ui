import React, { useEffect, useState } from "react";

function useApi(url, text) {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const productFilter = (text) => {
    return data.filter((d) => {
      return d.title.includes(text);
    });
  };

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        if (text.trim() !== "") {
          const d = productFilter(text);
          setData(d);
        } else {
          setData(res);
        }
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  }, [url, text]);

  return { data, isLoading, error, productFilter };
}

export default useApi;
