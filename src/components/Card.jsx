import React from 'react'
import { Link } from 'react-router-dom';

const Card = ({ user }) => {
  return (
    <div className="flex h-[35vh] w-[50vh] bg-my-green dark:bg-neutral-800 flex-col items-center ">
      <img src="https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg" alt="male img" className='w-[15vh] text-center' />

    <div className='dark:text-white'>
      {user.desc }
    </div>
    </div>
    
  );
}

export default Card