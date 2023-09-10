import React, { useState } from "react";
import Button from "./Button";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

const UserHealth = () => {
  const navigate = useNavigate();
  const [diseases, setDiseases] = useState(["Skin Cancer", "Rashes"]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyPress = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      setDiseases([...diseases, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleRemoveDisease = (index) => {
    const updatedDiseases = diseases.filter((_, i) => i !== index);
    setDiseases(updatedDiseases);
  };

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="text-white flex justify-center items-center md:mt-20 md:mb-20">
      <div className="h-full flex flex-col justify-center w-3/5 lgm:w-4/5 md:w-4/5 sm:w-4/5">
        <h1 className="text-center text-2xl text-black dark:text-white">
          Health Record
        </h1>

        <div className="w-full mt-10">
          <div>
            <input
              className="dark:bg-my-black-1 bg-my-light border dark:border-my-black-1 border-my-gray-2 w-full outline-none font-poppins dark:text-my-light text-my-gray-2 text-base px-4 py-3"
              placeholder="Write the disease name and press enter"
              value={inputValue}
              onChange={handleInputChange}
              onKeyPress={handleInputKeyPress}
            />
            <p className="text-sm text-my-gray-2">
              Note: If you don't have any health issue just click next
            </p>
          </div>
          <div className="flex gap-2 mt-2 flex-wrap">
            {diseases &&
              diseases.map((disease, key) => (
                <div
                  key={key}
                  className="text-white text-sm px-2 py-1 flex items-center dark:bg-my-black-1"
                >
                  <div>{disease}</div>
                  <div className="ml-2 cursor-pointer">
                    <RxCross2 onClick={() => handleRemoveDisease(key)} />
                  </div>
                </div>
              ))}
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

export default UserHealth;
