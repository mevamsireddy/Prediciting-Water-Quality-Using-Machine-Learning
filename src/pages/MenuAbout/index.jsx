import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Text } from "components";

const MenuAboutPage = () => {
  const navigate = useNavigate();

  return (
    <>
    {/*<div>
      <button onClick={toggleMenu}>Toggle Menu</button>
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
            zIndex: 999, // Ensure menu is on top of other content
            animation: 'slideDown 0.5s ease', // Animation for sliding down
          }}
        >*/}


      <div className="bg-blue-A200 flex flex-col font-inter gap-[5px] justify-start h-[632px] p-12 w-full">
        <div className="flex flex-col items-end ml-100 w-full md:w-full">
          <Img
            className="common-pointer h-[130px] md:h-auto object-cover w-[130px]"
            src="images/img_close.png"
            alt="close"
            onClick={() => navigate("/about")}
          />
        </div>
        <div className="flex flex-col items-start justify-start mb-[138px] ml-36 md:ml-[0]">
          <Text
            className="common-pointer text-[60px] text-white-A700"
            size="txtInterRegular96WhiteA700"
            onClick={() => navigate("/")}
          >
            Home
          </Text>
          <Text
            className="common-pointer mt-[25px] text-[60px] text-white-A700"
            size="txtInterRegular96WhiteA700"
            onClick={() => navigate("/predict")}
          >
            Predict Now
          </Text>
          <Text
            className="common-pointer mt-[25px] text-[60px] text-white-A700"
            size="txtInterRegular96WhiteA700"
            onClick={() => navigate("/upload")}
          >
            Upload Data
          </Text>
          <Text
            className="common-pointer mt-[25px] text-[60px] text-white-A700"
            size="txtInterRegular96WhiteA700"
            onClick={() => navigate("/about")}
          >
            About
          </Text>
        </div>
      </div>
{/*      </div>
      )}
      </div>*/}
    </>
  );
};
export default MenuAboutPage;
