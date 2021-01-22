import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchNav = (url) => {
  const [loadingNavbar, setLoadingNavbar] = useState(true);
  const [fetchedNavbarItems, setFetchedNavbarItems] = useState([]);

  const getPosts = async () => {
    await axios
      .get(url)
      .then((res) => {
        if (res.status >= 200 && res.status <= 299) {
          setFetchedNavbarItems(res.data);
          setLoadingNavbar(false);
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

  return { loadingNavbar, fetchedNavbarItems };
};
