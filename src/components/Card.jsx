import React from 'react'
import { Link } from 'react-router-dom';

const Card = ({ user }) => {
  return (
    <div className="flex h-[30vh] w-[50vh] bg-my-green flex-col">
      <Link to={user.linkTo}>
        <div>{user.title}</div>
        <div>{user.desc}</div>
      </Link>
    </div>
  );
}

export default Card