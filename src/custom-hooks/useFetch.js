import { useState, useEffect } from "react";

const useFetch = url => {
  const initFeatch = {
    data: null,
    loading: true,
    error: null
  };

  const [state, setState] = useState(initFeatch);

  const getData = async () => {
    const res = await fetch(url);
    const data = await res.json();

    setState({
      data: data,
      loading: false,
      error: null
    });
  };

  useEffect(() => {
    setState(initFeatch);
    getData();
  }, [url]);

  return state;
};

export default useFetch;
