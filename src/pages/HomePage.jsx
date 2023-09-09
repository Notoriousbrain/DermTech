import React, { useEffect, useState } from 'react'

const HomePage = () => {
  const [home, setHome] = useState("Home");
  const userName = [
    {
      name: "Rohit",
      Comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum laudantium, possimus eos aliquid quae fugiat vel consequuntur? Officia, corrupti quos."
    },
    {
      name: "Suhani",
      Comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum laudantium, possimus eos aliquid quae fugiat vel consequuntur? Officia, corrupti quos."
    },
  ];

  
  

  return (
    <div>
      <div>
        {userName.map((user, key) => (
          <div key={key}>
            <div>{user.name}</div>
            <div>{user.Comment}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage