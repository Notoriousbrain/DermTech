import React, { useState, useRef } from "react";
import { Button } from ".";
import { FaUser } from "react-icons/fa";

const UserProfile = () => {
  const [userFullName, setUserFullName] = useState("Rohit Singh");
  const [phoneNo, setPhoneNo] = useState(9876543210);
  const [age, setAge] = useState(20);
  const [ageError, setAgeError] = useState("");
  const [userProfileImage, setUserProfileImage] = useState("");
  const [nameError, setNameError] = useState("");
  const [phoneNoError, setPhoneNoError] = useState("");

  const imgFile = useRef(null);
  const [userProfileImageUrl, setUserProfileImageUrl] = useState("");

  const NAME = /^(?!\s)(?![\s\S]*\s$)[A-Za-z0-9 ]+$/;

  const handleNameChange = (e) => {
    setUserFullName(e.target.value);
    setNameError("");
  };

  const handlePhoneNoChange = (e) => {
    const value = e.target.value;
    if (value === "" || !isNaN(value)) {
      setPhoneNo(value === "" ? "" : parseInt(value, 10));
      setPhoneNoError("");
    } else {
      setPhoneNoError("Invalid phone number");
    }
  };

  const handleAgeChange = (e) => {
    const value = e.target.value;
    if (value === "" || !isNaN(value)) {
      setAge(value === "" ? "" : parseInt(value, 10));
      setAgeError("");
    } else {
      setAgeError("Invalid age");
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setUserProfileImage(file);
    setUserProfileImageUrl(URL.createObjectURL(file));
  };

  const handleUploadImg = () => {
    imgFile.current.click();
  };

  const handleRemoveImg = () => {
    setUserProfileImage("");
    document.getElementById("inputImg").value = "";
  };

  const handleClick = async () => {
    let isValid = true;

    if (!userFullName) {
      setNameError("Full name is required");
      isValid = false;
    } else if (!NAME.test(userFullName)) {
      setNameError("Invalid name");
      isValid = false;
    }

    if (phoneNo.length < 10) {
      setPhoneNoError("Enter Valid Phone No");
      isValid = false;
    }

    if (!age) {
      setAgeError("Age is required");
      isValid = false;
    }

    if (isValid) { 
    }
  };

  return (
    <div className="min-h-[91vh] md:h-full bg-my-light dark:bg-my-dark flex flex-col items-center">
      <div className="h-full mt-10 md:mt-16 flex flex-col justify-center w-1/2 lgm:w-3/5 md:w-4/5 sm:w-4/5">
        <h1 className="text-center text-2xl text-black dark:text-white">
          Your Details
        </h1>
        <div className="space-y-4 w-full">
          <div className="flex items-center mt-4 flex-col">
            <input
              id="inputImg"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
              ref={imgFile}
            />
            {userProfileImage ? (
              <img
                onClick={handleUploadImg}
                src={userProfileImageUrl}
                alt="profile"
                className="w-[90px] h-[90px] rounded-full cursor-pointer object-contain"
              />
            ) : (
              <FaUser
                title="Upload Image"
                onClick={handleUploadImg}
                size={90}
                className="filter invert cursor-pointer text-my-light dark:text-my-dark"
              />
            )}
            {userProfileImage && (
              <p
                className="text-red-500 mt-1 cursor-pointer font-semibold"
                onClick={handleRemoveImg}
              >
                Remove Image
              </p>
            )}
          </div>
          <div>
            <input
              className={`dark:bg-my-black-1 bg-my-light border ${
                nameError
                  ? "border-red-500"
                  : "dark:border-my-black-1 border-my-gray-2"
              } w-full outline-none font-poppins dark:text-my-light text-my-gray-2 text-base px-4 py-3`}
              placeholder="Enter Name"
              value={userFullName}
              onChange={handleNameChange}
            />
            {nameError && (
              <p className="mt-1 text-red-500 text-sm">{nameError}</p>
            )}
          </div>
          <div>
            <input
              type="text"
              inputMode="numeric"
              maxLength={10}
              className={`dark:bg-my-black-1 bg-my-light border ${
                phoneNoError
                  ? "border-red-500"
                  : "dark:border-my-black-1 border-my-gray-2"
              } w-full outline-none font-poppins dark:text-my-light text-my-gray-2 text-base px-4 py-3`}
              placeholder="Enter Phone No"
              value={phoneNo}
              onChange={(e) => {
                handlePhoneNoChange(e);
              }}
            />
            {phoneNoError && (
              <p className="mt-1 text-red-500 text-sm">{phoneNoError}</p>
            )}
          </div>

          <div>
            <input
              type="text"
              inputMode="numeric"
              className={`dark:bg-my-black-1 bg-my-light border ${
                ageError
                  ? "border-red-500"
                  : "dark:border-my-black-1 border-my-gray-2"
              } w-full outline-none font-poppins dark:text-my-light text-my-gray-2 text-base px-4 py-3`}
              placeholder="Enter Age"
              value={age}
              onChange={(e) => {
                handleAgeChange(e);
              }}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleClick();
                }
              }}
            />
            {ageError && (
              <p className="mt-1 text-red-500 text-sm">{ageError}</p>
            )}
          </div>
        </div>

        <Button
          btnName="SAVE"
          classStyles="mt-8 text-base"
          handleClick={handleClick}
        />
      </div>
    </div>
  );
};

export default UserProfile;
