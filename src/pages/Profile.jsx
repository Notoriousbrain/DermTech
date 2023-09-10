import React, { useEffect } from 'react'
import { UserHealth, UserProfile } from '../components';
import { useUserContext } from '../context';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const { email } = useUserContext();
    const navigate = useNavigate();

    useEffect(() => {
        if(!email){
            navigate('/login');
        }
    },[])
    
  return (
    <div className="min-h-[91vh] bg-my-light dark:bg-my-dark flex md:flex-col items-center">
      <div className="w-1/2 sm:w-full">
        <UserProfile />
      </div>
      <div className="border h-4/5 hidden"></div>
      <div className="w-1/2 sm:w-full">
        <UserHealth />
      </div>
    </div>
  );
}

export default Profile