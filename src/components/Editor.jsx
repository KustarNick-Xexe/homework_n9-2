import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';
import { useState, useRef } from 'react';
import { useLocation, NavLink } from 'react-router-dom';

const Editor = (props) => {
  const text = useRef();
  const [isVisible, setIsVisible] = useState(true);
  const location = useLocation();
  

  const handleClick = () => {
    setIsVisible(true);
    props.onButtonClick();
  };

  const handleButtonClick = () => { 
    console.log('Обновилось')
    const post = { "content": text.current.value };
    axios.put(`http://localhost:7070/posts/${ location.state.post.id }`, post)
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
      <div className='w-600 h-auto bg-slate-100 border border-slate-300 py-2 px-4 rounded-t-lg shadow-sm shadow-slate-300 box-border'>
        <div className=' flex justify-between'>
            <p>Редактировать публикацию</p>
            <button onClick={ handleClick }>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div> 
      </div>
      <div className='w-600 h-auto bg-white border-x border-slate-300 p-4'>
      <div className='flex border-b border-slate-300 relative'>
        <div className='w-8 h-8 bg-slate-500 rounded-full mr-4'></div>
        <textarea 
          ref = { text }
          className='text-xl outline-none overflow-hidden resize-none w-full min-h-min'>{ location.state.post.content }</textarea>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 absolute right-0 bottom-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
        </svg>
      </div>
      <ul className='flex w-full flex-wrap gap-2 m-2'>
        <li className=' flex bg-slate-200 rounded-full min-w-[48%] min-h-min gap-2 p-2'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
          </svg>
          Фото/видео
        </li>
        <li className=' flex bg-slate-200 rounded-full min-w-[48%] min-h-min gap-2 p-2'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
          </svg>
          Отметить друзей
        </li>
        <li className=' flex bg-slate-200 rounded-full min-w-[48%] min-h-min gap-2 p-2'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
          </svg>
          Чувства/действия
        </li>
        <li className=' flex bg-slate-200 rounded-full min-w-[48%] min-h-min gap-2 p-2'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
          Отметить посещение
        </li>
        <li className=' flex bg-slate-200 rounded-full min-w-[48%] min-h-min gap-2 p-2'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 8.25v7.5m6-7.5h-3V12m0 0v3.75m0-3.75H18M9.75 9.348c-1.03-1.464-2.698-1.464-3.728 0-1.03 1.465-1.03 3.84 0 5.304 1.03 1.464 2.699 1.464 3.728 0V12h-1.5M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
          </svg>
          GIF
        </li>
      </ul>
      </div>
      <div className="flex justify-end bg-slate-100 w-600 p-2 mb-4 border border-slate-300 rounded-b-lg shadow-sm shadow-slate-300">
        <NavLink to='/'>
          <button 
          className=' bg-blue-700 text-white py-1 px-3 rounded-sm font-bold text-sm'
          onClick={ handleButtonClick }>Сохранить</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Editor;