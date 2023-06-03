import React, { useEffect, useState } from "react";
import { fetchDataApi } from "../../utils/Api";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading("Loading....");
    setData(null); 
    setError(null);

    fetchDataApi(url)
      .then((res) => {
        setLoading(false);
        setData(res);
      })
      .catch((err) => {
        setLoading(false);
        setError("somthing went wrong.....");
      });
  }, [url]);
  console.log("resltrrrr",data);

  return {data, loading, error};
};

export default useFetch;
