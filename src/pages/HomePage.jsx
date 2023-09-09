import React, { useEffect, useState } from 'react'
import { Button } from '../components';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';

const HomePage = () => {
const user = [
  {
    title: "Card 1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dolore rerum optio corrupti modi deleniti corporis debitis harum dolorem laudantium?",
    linkTo: "/login",
  },
  {
    title: "Card 2",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dolore rerum optio corrupti modi deleniti corporis debitis harum dolorem laudantium?",
    linkTo: "/register",
  },
  {
    title: "Card 3",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dolore rerum optio corrupti modi deleniti corporis debitis harum dolorem laudantium?",
    linkTo: "/register",
  },
];

  return (
    <div className="flex justify-evenly">
      <Card user={user[0]} />
      <Card user={user[1]} />
      <Card user={user[2]} />
    </div>
  );
}

export default HomePage