import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Posts from './components/Posts';
import PostCreate from './components/PostCreate';
import PostContainer from './components/PostContainer';
import Editor from './components/Editor';
import { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.delete(`http://localhost:7070/posts`)
      .then(response => {
        console.log(response.data);
        setPosts(prevState => {
          return [
            ...prevState,
            ...response.data
          ]
        })
      })
      .catch(error => {
        console.log(error);
      });
  }, [])

  return (
    <Router>
      <div className='bg-slate-200'>
        <div className='flex items-center p-1 w-600 flex-wrap my-0 mx-auto'>
            <Routes>
              <Route path="/" exact element={ <Posts posts={ posts }/> } />
              <Route path="/posts/new" element={ <PostCreate /> } />
              <Route path="/posts/:id" element={ <PostContainer /> } />
              <Route path="/posts" element={ <Editor />} />
            </Routes>
        </div>
      </div>
    </Router>
  )
};

export default App;