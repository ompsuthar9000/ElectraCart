import { useState, useEffect } from "react";
import { fetchDataFromApi } from "../utils/apiner";

const useFetch = (endpoint) => {
  const [data, setData] = useState();

  useEffect(() => {
    getData();
  }, [endpoint]);

  const getData = async () => {
    const res = await fetchDataFromApi(endpoint);
    setData(res);
  };

  return { data };
};

export default useFetch;
