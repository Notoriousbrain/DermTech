import React, { useEffect } from "react";
import { Auth } from "../components";
import { useUserContext } from "../context";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { email } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
   if(email){
    navigate('/');
   }
  },[])

  return (
    <div className="h-screen bg-my-light dark:bg-my-dark flex flex-col items-center ">
      <Auth title="SIGN IN" text="NEW USER? SIGN UP" linkTo="/register" />
    </div>
  );
};

export default Login;
