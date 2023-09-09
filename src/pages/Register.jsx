import React from "react";
import { Auth } from "../components";

const Register = () => {
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
