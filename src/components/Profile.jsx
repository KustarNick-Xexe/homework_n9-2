const Profile = ({ created }) => {
  return (
      <div className='flex items-center w-full'>
        <div className='bg-slate-500 rounded-full w-10 h-10 mr-2'></div>
        <div className='flex flex-col justify-between w-60'>
          <p className='text-blue-700 font-bold'>Имя пользователя</p>
          <p className='text-slate-600 font-bold text-sm'>Кто он такой<span>&nbsp;•&nbsp;{ created }</span></p>
        </div>
      </div>
  );
};

export default Profile;