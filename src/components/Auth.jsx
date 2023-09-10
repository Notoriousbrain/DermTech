// For Login and Register

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useUserContext } from "../context";

const PasswordInput = ({
  visible,
  toggleVisibility,
  placeholder,
  classStyles,
  value,
  onChange,
  onKeyPress
}) => {
  return (
    <div
      className={`flex justify-between items-center dark:bg-my-black-1 bg-my-light border  w-full outline-none font-poppins dark:text-my-light text-my-gray-2 text-base px-4 py-3 ${classStyles}`}
    >
      <input
        type={visible ? "text" : "password"}
        className="dark:bg-my-black-1 bg-my-light outline-none w-full"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            onKeyPress(); 
          }
        }}
      />
      {visible ? (
        <AiOutlineEyeInvisible className="w-5 h-5" onClick={toggleVisibility} />
      ) : (
        <AiOutlineEye className="w-5 h-5" onClick={toggleVisibility} />
      )}
    </div>
  );
};

const Auth = ({ title, text, linkTo }) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const {email, setEmail} = useUserContext("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const EMAIL =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const PASSWORD = /^(?=.*\d)(?=.*[a-z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;

  const validateEmail = (email) => {
    return EMAIL.test(email);
  };

  const validatePassword = (password) => {
    return PASSWORD.test(password);
  };

  const validateConfirmPassword = (password, confirmPassword) => {
    if (password && confirmPassword !== "") {
      return password === confirmPassword;
    }
    return false;
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setConfirmPasswordError("");
  };

  const handleClick = async () => {
    let isValid = true;

    if (!email) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!validateEmail(email)) {
      setEmailError("Invalid email address");
      isValid = false;
    }

    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    } else if (password.length < 8) {
      setPasswordError("Password must be atleast 8 characters long");
      isValid = false;
    } else if (!validatePassword(password)) {
      setPasswordError(
        "Password must include letter, special character, and number."
      );
      isValid = false;
    }

    if (title === "SIGN UP") {
      if (!confirmPassword) {
        setConfirmPasswordError("Confirm password is required");
        isValid = false;
      } else if (!validateConfirmPassword(password, confirmPassword)) {
        setConfirmPasswordError("Passwords do not match");
        isValid = false;
      }
    }

     if (isValid) {
       title === "SIGN IN"
         ? navigate('/')
         : navigate('/enter-details');
     }

  };

  return (
    <div className="h-full flex flex-col justify-center w-1/4 lgm:w-1/3 md:w-2/5 sm:w-4/5">
      <h1 className="text-center text-2xl text-black dark:text-white">
        {title}
      </h1>
      <div className="space-y-4 w-full">
        <div>
          <input
            className={`dark:bg-my-black-1 bg-my-light border ${
              emailError
                ? "border-red-500"
                : "dark:border-my-black-1 border-my-gray-2"
            }  w-full outline-none font-poppins rounded-md dark:text-my-light text-my-gray-2 text-base mt-4 px-4 py-3`}
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
          {emailError && (
            <p className="mt-1 text-red-500 text-sm">{emailError}</p>
          )}
        </div>
        <div>
          <PasswordInput
            visible={showPassword}
            toggleVisibility={togglePassword}
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            onKeyPress={handleClick}
            classStyles={
              passwordError
                ? "border-red-500"
                : "dark:border-my-black-1 border-my-gray-2"
            }
          />
          {passwordError && (
            <p className="mt-1 text-red-500 text-sm">{passwordError}</p>
          )}
        </div>
        <div>
          {title === "SIGN UP" && (
            <>
              <PasswordInput
                visible={showPassword}
                toggleVisibility={togglePassword}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                onKeyPress={handleClick}
                classStyles={
                  passwordError
                    ? "border-red-500"
                    : "dark:border-my-black-1 border-my-gray-2"
                }
              />
              {confirmPasswordError && (
                <p className="mt-1 text-red-500 text-sm">
                  {confirmPasswordError}
                </p>
              )}
            </>
          )}
        </div>
      </div>
      {title === "SIGN IN" && (
        <Link to="/" className="text-xs text-end mt-1 -mb-4 text-my-gray-2">
          FORGOT PASSWORD?
        </Link>
      )}
      <Button
        btnName={`${title.toUpperCase()} WITH EMAIL`}
        classStyles="mt-8 text-base md:text-sm"
        handleClick={handleClick}
      />
      <Link
        to={linkTo}
        className="text-xs mt-2 text-end text-my-gray-2 "
      >
        {text}
      </Link>
    </div>
  );
};

export default Auth;
