import Profile from './Profile';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const PostEdit = (props) => {
  const [isVisible, setIsVisible] = useState(true);
  const location = useLocation();
  const [now, setNow] = useState(new Date());
  const createdAt = new Date(location.state.post.created);

  const handleButtonClick = () => {
    setIsVisible(false);
    props.onButtonClick();
  };

  const handleClick = () => {
    console.log('Удалилось')
    console.log(location.state.id)
    axios.delete(`http://localhost:7070/posts/${ location.state.post.id }`)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    isVisible && 
    <div>
      <div className='w-600 h-auto bg-white border-x border-t border-slate-300 pt-4 px-4 rounded-t-lg shadow-sm shadow-slate-300'>
          <Profile created={ now.getMinutes() - createdAt.getMinutes() }/>
          <textarea className='text-3xl my-4 outline-none overflow-hidden resize-none w-full h-auto' readOnly>{ location.state.post.content }</textarea>
          <div className='flex justify-around border-t border-slate-300 py-4'>
            <button className='text-slate-600 font-bold text-sm flex flex-nowrap items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
              </svg>
              Нравится
            </button>
            <button className='text-slate-600 font-bold text-sm flex flex-nowrap items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
              </svg>
            Комментировать</button>
          </div>
      </div>
      <div className="flex justify-end bg-white w-600 p-2 mb-4 border border-slate-300 rounded-b-lg shadow-sm shadow-slate-300">
          <button 
            onClick={ handleButtonClick }
            className=' bg-blue-700 text-white py-1 px-3 rounded-sm font-bold text-sm mr-3'>Изменить</button>
          <NavLink to='/'>
            <button 
              onClick={ handleClick }
              className=' bg-red-700 text-white py-1 px-3 rounded-sm font-bold text-sm'>Удалить</button>
          </NavLink>
      </div>
    </div>
  )
};

export default PostEdit;