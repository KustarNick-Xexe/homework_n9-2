import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';
import { useRef } from 'react';

const PostCreate = () => {
    const text = useRef();
    const handleClick = () => {
        const post = {"id": uuidv4(), "content": text.current.value };
        axios.post('http://localhost:7070/posts', post)
          .then(response => {
            console.log(response.data);
          })
          .catch(error => {
            console.log(error);
          });
    };

  return (
    <>
    <div className='w-600 h-auto bg-white border-x border-t border-slate-300 pt-4 px-4 rounded-t-lg shadow-sm shadow-slate-300'>
        <div className=' flex justify-between border-b border-slate-300 pb-4'>
            <ul className='flex'>
                <li className=' mr-2 pr-4 border-r border-slate-300'>
                    <button className='flex justify-center items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                        </svg>
                        Публикация
                    </button>
                </li>
                <li className=' mx-2 pr-4 border-r border-slate-300'>
                    <button className='flex justify-center items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                        </svg>
                        Фото/видео
                    </button>
                </li>
                <li className=' mx-2 pr-4 border-r border-slate-300'>
                    <button className='flex justify-center items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                        </svg>
                        Прямой эфир
                    </button>
                </li>
                <li className=' ml-2'>
                    <button className='flex justify-center items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                        Еще
                    </button>
                </li>
            </ul>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>
        </div>
        <textarea 
            ref={ text }
            className='text-3xl my-4 outline-none overflow-hidden resize-none w-full block h-auto'>Какой-то контент внутри поста</textarea>   
    </div>
    <div className="flex justify-end bg-white w-600 p-2 mb-4 border border-slate-300 rounded-b-lg shadow-sm shadow-slate-300">
        <button 
            onClick={ handleClick }
            className=' bg-blue-700 text-white py-1 px-3 rounded-sm font-bold text-sm'>Опубликовать</button>
    </div>
    </>
  );
};

export default PostCreate;