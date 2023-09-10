import React from 'react'
import { Link } from 'react-router-dom';

const Card = ({ user }) => {
  return (
    <div className="flex h-[30vh] w-[50vh] bg-my-green flex-col items-center">
      <img src="https://xsgames.co/randomusers/assets/avatars/male/46.jpg" alt="maleimg" className='w-[30vh]'/>
    <div>
      {user.desc}
    </div>
    </div>
    
  );
}

export default Card