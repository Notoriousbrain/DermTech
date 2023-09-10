import React, { useEffect } from "react";
import { Auth } from "../components";
import { useUserContext } from "../context";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const { email } = useUserContext();
    const navigate = useNavigate();

    useEffect(() => {
      if (email) {
        navigate("/");
      }
    }, []);
  return (
    <div className="h-screen bg-my-light dark:bg-my-dark flex justify-center ">
      <Auth
        title="SIGN UP"
        text="ALREADY HAVE AN ACCOUNT? SIGN IN"
        linkTo="/login"
      />
    </div>
  );
};

export default Register;
