import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Button, Img, Line, Text } from "components";

const PredictPage = () => {
  const navigate = useNavigate();

  //Menu Start
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? 'auto' : 'hidden';
  };

  useEffect(() => {
    const handlePopState = () => {
      if (isOpen) {
        toggleMenu(); // Close the menu when user navigates back
      }
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [isOpen]);
  //Menu End

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

 // State to manage form inputs
 const [prediction, setPrediction] = useState(null);
 const [inputData, setInputData] = useState({
   do: "",
   ph: "",
   co: "",
   bod: "",
   na: "",
   tc: "",
   year: ""
 });

 // Handler for input change
 const handleInputChange = (e) => {
   const { name, value } = e.target;
   setInputData({ ...inputData, [name]: value });
 };

 // Handler for form submission
 const handleSubmit = async (e) => {
   e.preventDefault();
   try {
     const response = await axios.post('http://localhost:5000/predict', inputData);
     setPrediction(response.data.wqi_prediction);
          // Navigate to the next page
          navigate('/predicttwo', { state: { prediction: response.data.wqi_prediction.toFixed(2) } });
   } catch (error) {
     console.error('Error:', error);
   }
 };


  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-end mx-auto py-[29px] w-full">
        <div className="flex sm:flex-col flex-row md:gap-10 items-center max-w-[1200px] justify-between w-full">
        <Text
                className="md:text-6xl text-5xl text-black-900"
                size="txtInterRegular96"
              >
                <span className="text-black-900 font-inter text-left font-bold">
                  Water
                </span>
                <span className="text-blue-A200 font-inter text-left font-bold">
                  Q
                </span>
                <span className="text-black-900 font-inter text-left font-bold">
                  uality
                </span>
              </Text>
              <Img
                className="common-pointer h-16"
                src="images/img_group2.svg"
                alt="groupTwo"
                onClick={() => navigate("/menupredict")}
              />


        </div>

        <div className="h-[790px] py-[29px] relative w-full">
          <Img
            className="h-[790px] m-auto object-cover w-full"
            src="images/img_waterquality1.png"
            alt="waterqualityOne"
          />
          <div className="absolute bg-white-A700_87 flex flex-col h-full inset-y-[0] items-center justify-start my-auto p-[60px] md:px-10 sm:px- mt-7 right-[0] rounded-tl-[180px] w-[80%]">
            <div className="flex flex-col items-start justify-start mb-2 w-[96%] md:w-full">
              <Text
                className="sm:text-[25px] md:text-[35px] text-[35px] text-black-900"
                size="txtInterBold45"
              >
                Predict water quality
              </Text>
              <Line className="bg-black-900 h-px mt-3 w-full" />
              <div>

              <form onSubmit={handleSubmit}>
              <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-10 w-full">
                <Text
                  className="sm:mt-0 ml-[10px] mt-[3px] text-[25px] sm:text-[20px] md:text-[25px] text-black-900"
                  size="txtInterBold36"
                >
                  Dissolved Oxygen
                </Text>
                <Text className="sm:ml-[0] ml-[240px] sm:mt-0 mt-[3px] text-[25px] sm:text-[32px] md:text-[34px] text-black-900"
                  size="txtInterBold36">
                  Potential of Hydrogen
                </Text>

              </div>
              <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between mt-[18px] w-full">
                <div className="common-pointer bg-white-A700 border-2 border-black-900 border-solid h-[60px] rounded-[20px] w-[47%] relative">
                  <input type="text" name="do" placeholder="Enter Dissolved Oxygen" value={inputData.do} onChange={handleInputChange} className="absolute inset-0 w-full h-full border-none bg-transparent px-4 text-black-900" required />
                </div>

                <div className="bg-white-A700 border-2 border-black-900 border-solid h-[60px] rounded-[20px] w-[47%] relative">
                  <input type="text" name="ph" placeholder="Enter Potential of Hydrogen" value={inputData.ph} onChange={handleInputChange} className="absolute inset-0 w-full h-full border-none bg-transparent px-4 text-black-900" required />
                </div>
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start md:ml-[0] ml-[7px] mt-[33px] w-full">
                <Text
                  className="sm:mt-0 text-[25px] sm:text-[20px] md:text-[25px] text-black-900"
                  size="txtInterBold36"
                >
                  Conductivity
                </Text>
                {/*<Img
                  className="h-[43px] sm:ml-[0] ml-[300px]"
                  src="images/img_profile.svg"
                  alt="profile_Two"
/>*/}
                <Text
                  className="sm:ml-[0] ml-[300px] sm:mt-0 mt-0.5 text-[25px] sm:text-[32px] md:text-[34px] text-black-900"
                  size="txtInterBold36"
                >
                  Biochemical Oxygen Demand
                </Text>
                {/*<Img
                  className="h-[43px] sm:ml-[0] ml-[23px]"
                  src="images/img_profile.svg"
                  alt="profile_Three"
/>*/}
              </div>
              <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between mt-[18px] w-full">
                <div className="bg-white-A700 border-2 border-black-900 border-solid h-[60px] rounded-[20px] w-[47%] relative">
                  <input type="text" name="co" placeholder="Enter Conductivity" value={inputData.co} onChange={handleInputChange} className="absolute inset-0 w-full h-full border-none bg-transparent px-4 text-black-900" required />
                </div>
                <div className="bg-white-A700 border-2 border-black-900 border-solid h-[60px] rounded-[20px] w-[47%] relative">
                  <input type="text" name="bod" placeholder="Enter Biochemical Oxygen Demand" value={inputData.bod} onChange={handleInputChange} className="absolute inset-0 w-full h-full border-none bg-transparent px-4 text-black-900" required />
                </div>
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-[33px] w-full">
                <Text
                  className="ml-[10px] sm:mt-0 text-[25px] sm:text-[20px] md:text-[25px] text-black-900"
                  size="txtInterBold36"
                >
                  Nitrate-Nitrite Concentration
                </Text>
                {/*<Img
                  className="h-[43px] sm:ml-[0] ml-[27px] sm:mt-0 mt-[11px]"
                  src="images/img_profile.svg"
                  alt="profile_Four"
/>*/}
                <Text
                  className="mb-[10px] sm:ml-[0] ml-[100px] text-[25px] sm:text-[20px] md:text-[25px] text-black-900"
                  size="txtInterBold36"
                >
                  Total Coliforms Mean
                </Text>
                {/*<Img
                  className="h-[43px] sm:ml-[0] ml-[159px]"
                  src="images/img_profile.svg"
                  alt="profile_Five"
/>*/}
              </div>
              <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between mt-[11px] w-full">
                <div className="common-pointer bg-white-A700 border-2 border-black-900 border-solid h-[60px] rounded-[20px] w-[47%] relative">
                  <input type="text" name="na" placeholder="Enter Nitrate-Nitrite Concentration" value={inputData.na} onChange={handleInputChange} className="absolute inset-0 w-full h-full border-none bg-transparent px-4 text-black-900" required />
                </div>
                <div className="common-pointer bg-white-A700 border-2 border-black-900 border-solid h-[60px] rounded-[20px] w-[47%] relative">
                  <input type="text" name="tc" placeholder="Enter Total Coliforms Mean" value={inputData.tc} onChange={handleInputChange} className="absolute inset-0 w-full h-full border-none bg-transparent px-4 text-black-900" required />
                </div>
              </div>
              <div className="flex flex-row sm:gap-10 items-center justify-between mt-8 w-[47%] md:w-full">
                <Text
                  className="ml-[10px] text-[25px] sm:text-[20px] md:text-[25px] text-black-900"
                  size="txtInterBold36"
                >
                  Year
                </Text>
                {/*<Img
                  className="h-[43px]"
                  src="images/img_profile.svg"
                  alt="profile_Six"
/>*/}
              </div>
              <div className="bg-white-A700 border-2 border-black-900 border-solid h-[60px] mt-[10px] rounded-[20px] w-[47%] relative">
                <input type="text" name="year" placeholder="Enter Year" value={inputData.year} onChange={handleInputChange} className="absolute inset-0 w-full h-full border-none bg-transparent px-4 text-black-900" />
              </div>
              <Button
                type="submit"

                className="cursor-pointer font-bold leading-[normal] min-w-[300px] md:ml-[0] ml-[520px] mt-[10px] sm:text-4xl md:text-[38px] text-[30px] text-center"
                shape="round"
                color="orange_A700_d3"
                size="md"
                variant="fill"
              >
                Submit
              </Button>
              </form>

            </div>
            </div>
          </div>
          <Text
              className="mt-5 h-[60px] text-[35px] text-black-900 text-center"
              size="txtInterRegular40Black900"
            >
              WaterQuality
              <br/><br/>
            </Text>
        </div>
      </div>
    </>
  );
};

export default PredictPage;
