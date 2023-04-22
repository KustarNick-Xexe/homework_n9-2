import { NavLink } from 'react-router-dom';

const Create = () => {
  return (
    <div className='w-600 flex justify-end bg-white border border-slate-300 p-2 rounded-lg my-4 shadow-sm shadow-slate-300'>
      <NavLink to='/posts/new'>
        <button className=' bg-blue-700 text-white py-1 px-3 rounded-sm font-bold text-sm'>Создать пост</button>
      </NavLink>
    </div>
  )
};

export default Create;