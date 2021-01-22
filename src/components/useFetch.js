import { useState, useEffect } from "react";
import axios from "axios";

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    await axios
      .get(url)
      .then((res) => {
        if (res.status >= 200 && res.status <= 299) {
          setPosts(res.data);
          setLoading(false);
          //setTimeout(() => setLoading(false), 1000);
        } else {
          throw new Error(res.statusText);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getPosts();
  }, [url]);

  return { loading, posts };
};
