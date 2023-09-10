import React, { useState } from 'react'
import { HealthRecords, UserRegister } from '../components'


const EnterDetails = () => {
    const [allow, setAllow] = useState(false);
    
  return (
    <div className="min-h-screen bg-my-light dark:bg-my-dark flex md:flex-col items-center">
      <div className="w-1/2 sm:w-full">
        <UserRegister setAllow={setAllow} />
      </div>
      <div className='border h-4/5 hidden'></div>
      <div className="w-1/2 sm:w-full">
        <HealthRecords allow={allow} />
      </div>
    </div>
  );
}

export default EnterDetails