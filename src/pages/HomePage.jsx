import React from 'react'
import Card from '../components/Card';

const HomePage = () => {
const user = [
  {
    title: "Card 1",
    desc: "This website is a lifesaver! I had a mysterious rash, and the skin disease detection tool accurately identified it as contact dermatitis. The information provided was incredibly helpful in managing my condition.",

  },
  {
    title: "Card 2",
    desc: "This website is a lifesaver! I had a mysterious rash, and the skin disease detection tool accurately identified it as contact dermatitis. The information provided was incredibly helpful in managing my condition.",
    imageSrc: "https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg"
  },
  {
    title: "Card 3",
    desc: "This website is a lifesaver! I had a mysterious rash, and the skin disease detection tool accurately identified it as contact dermatitis. The information provided was incredibly helpful in managing my condition.",

  },
];

  return (
    <div className="flex justify-evenly dark:bg-back">
      <Card user={user[0]}/>
      <Card user={user[1]}/>
      <Card user={user[2]}/>

    </div>
  );
}

export default HomePage