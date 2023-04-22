import Post from './Post';
import Create from './Create';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:7070/posts`)
      .then(response => {
        console.log(response.data);
        setPosts(prevState => {
          return [
            ...response.data
          ]
        })
      })
      .catch(error => {
        console.log(error);
      });
  }, [])

  return (
    <>
        <Create />
        { posts.map((post, index) => 
                { return <Post key={ index } info={ post } /> } ) }
    </>
  )
};

export default Posts;