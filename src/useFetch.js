import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [blogs, setBlogs] = useState();
  const [error, setEroor] = useState(null);
  const [pending, setPending] = useState(true);
  useEffect(() => {
    const abortCont = new AbortController();
    fetch(url, { signal: abortCont.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("no data has been there are didn't fetched anything");
        }
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
        setPending(false);
        setEroor(null);
      })
      .catch((e) => {
        if (e.name == "AbortError") {
          console.log("fetch aborted");
        } else {
          console.log("error could not connect to network");
          setEroor(e.message);
          setPending(false);
        }
      });
    return () => abortCont.abort();
  }, [url]);
  return { blogs, pending, error };
};
export default useFetch;
