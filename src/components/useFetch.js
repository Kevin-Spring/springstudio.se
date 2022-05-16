import { useState, useEffect } from 'react'
import axios from 'axios'

//Custom hook made for fetching the different custom post types and its content from wordpress
export const useFetch = url => {
  const [loading, setLoading] = useState(true)
  const [posts, setPosts] = useState([])

  document.querySelector('body').classList.add('loading');

  const getPosts = async () => {
    await axios
      .get(url)
      .then(res => {
        if (res.status >= 200 && res.status <= 299) {
          setPosts(res.data)
          setLoading(false)
          document.querySelector('body').classList.remove('loading');
          //setTimeout(() => setLoading(false), 1000);
        } else {
          throw new Error(res.statusText)
        }
      })
      .catch(err => console.log(err))
  }

  //useEffect listening to the depency of url change,
  //which makes the hook get posts everytime a new url / endpoint is assigned to the hook
  useEffect(() => {
    getPosts()
  }, [url])

  //returning the posts / pages / content and loading status of the get-request
  return { loading, posts }
}
