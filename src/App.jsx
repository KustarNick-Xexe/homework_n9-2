import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Posts from './components/Posts';
import PostCreate from './components/PostCreate';
import EditContainer from './components/EditContainer';
import Editor from './components/Editor';
import { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {

  return (
    <Router>
      <div className='bg-slate-200'>
        <div className='flex items-center p-1 w-600 flex-wrap my-0 mx-auto'>
            <Routes>
              <Route path="/" exact element={ <Posts /> } />
              <Route path="/posts/new" element={ <PostCreate /> } />
              <Route path="/posts/:id" element={ <EditContainer /> } />
              <Route path="/posts" element={ <Editor />} />
            </Routes>
        </div>
      </div>
    </Router>
  )
};

export default App;