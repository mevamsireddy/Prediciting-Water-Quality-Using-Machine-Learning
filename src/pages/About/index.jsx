import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";

const AboutPage = () => {
  const navigate = useNavigate();

{/*  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts
*/}
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-end mx-auto py-[25px] w-full">
        <div className="flex flex-col md:gap-10 gap-[110px] items-center justify-start mt-1 w-full">
          <div className="bg-gradient flex flex-col font-inter items-center justify-start w-full">
            <div className="flex flex-col md:gap-10 gap-[180px] items-center justify-start max-w-[1200px] mb-[120px] mx-auto w-full">
              <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <Text
                className="text-5xl text-black-900"
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
                  onClick={() => navigate("/menuabout")}
                />
              </div>
              <div className="flex md:flex-col flex-row gap-[50px] items-center justify-start w-[95%] md:w-full">
                <Text
                  className="md:text-5xl text-[50px] text-black-900 w-[40%] sm:w-full font-bold"
                  size="txtInterBold64"
                >
                  Water Quality Prediction Model
                </Text>
                <Text
                  className="text-[35px] text-black-900 w-[75%]"
                  size="txtRobotoMonoRegular40"
                >
                  Our predictive model employs state-of-the-art machine learning
                  algorithms to forecast water quality based on essential
                  parameters. It has been trained on a comprehensive dataset,
                  ensuring accuracy and reliability in its predictions.
                </Text>
              </div>
            </div>
          </div>
          <Text
            className="text-[40px] text-black-900 text-center w-[95%]"
            size="txtRobotoSerifRegular40"
          >
            <span className="text-black-900 font-robotoserif text-[60px] font-bold">
              <>
                Model Overview
                <br />
              </>
            </span>
            <span className="text-black-900 font-robotoserif font-normal">
              <>
                <br />
                Our predictive model employs a{" "}
              </>
            </span>
            <span className="text-gray-700 font-robotoserif font-bold">
              Random Forest Regressor
            </span>
            <span className="text-black-900 font-robotoserif font-normal">
              , a powerful ensemble learning algorithm capable of delivering
              accurate and robust predictions. This model has been specifically
              trained to analyze water quality based on key parameters.
            </span>
          </Text>
          <div className="font-robotoserif h-[400px] max-w-[1920px] mt-[10px] mx-auto md:px-5 relative w-[95%]">
            <Img
              className="absolute h-[450px] inset-y-[0] my-auto object-cover right-[0] w-[30%]"
              src="images/img_machinelearning1e.png"
              alt="machinelearning"
            />
            <Text
              className="absolute mt-[-40px] inset-y-[0] left-[0] text-[40px] text-black-900 w-[72%]"
              size="txtRobotoSerifRegular48"
            >
              <span className="text-orange-A700_d3 font-robotoserif text-left text-[60px] font-bold">
                <>
                  Key Features
                  <br />
                </>
              </span>
              <span className="text-black-900 font-robotoserif text-left font-bold">
                Ensemble Learning
              </span>
              <span className="text-black-900 font-robotoserif text-left font-normal">
                <>
                  : Combines multiple decision trees to enhance prediction
                  accuracy.
                  <br />
                </>
              </span>
              <span className="text-black-900 font-robotoserif text-left font-bold">
                Robustness:
              </span>
              <span className="text-black-900 font-robotoserif text-left font-normal">
                <>
                  {" "}
                  Handles a variety of input data and adapts well to different
                  scenarios.
                  <br />
                </>
              </span>
              <span className="text-black-900 font-robotoserif text-left font-bold">
                Non-linearity:
              </span>
              <span className="text-black-900 font-robotoserif text-left font-normal">
                {" "}
                Captures complex relationships between parameters for precise
                predictions.
              </span>
            </Text>
          </div>
          <div className="bg-black-900 flex flex-col font-robotoserif items-center justify-start mt-12 pt-16 md:px-10 px-16 sm:px-5 h-[660px] w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start max-w-[1920px] mx-auto w-full">
              <Text
                className="text-[50px] text-white-A700"
                size="txtRobotoSerifRegular48WhiteA700"
              >
                <span className="md:text-5xl text-white-A700 font-robotoserif text-left text-[60px] font-bold">
                  <>
                    Training Process
                    <br />
                  </>
                </span>
                <span className="md:text-5xl text-white-A700 font-robotoserif text-left text-[40px] font-normal">
                  The model has been meticulously trained using a diverse and
                  extensive dataset, ensuring it can generalize well to a wide
                  range of water quality conditions. The training dataset
                  comprises records with various environmental parameters.
                </span>
              </Text>
              <div className="flex md:flex-1 flex-col gap-[18px] items-start justify-start md:mt-0 mt-[80px] w-[35%] md:w-full">
                <Text
                  className="bg-blue_gray-100 h-[33px] justify-centers px-[31px] rounded-[26px] text-[25px] text-black-900 w-[295px]"
                  size="txtRobotoSerifRegular36"
                >
                  Dissolved Oxygen
                </Text>
                <Text
                  className="bg-blue_gray-100 h-[33px] justify-centers px-[31px] rounded-[26px] text-[25px] text-black-900 w-[345px]"
                  size="txtRobotoSerifRegular36"
                >
                  Potential of Hydrogen
                </Text>
                <Text
                  className="bg-blue_gray-100 h-[33px] justify-centers px-[31px] rounded-[26px] text-[25px] text-black-900 w-[235px]"
                  size="txtRobotoSerifRegular36"
                >
                  Conductivity
                </Text>
                <Text
                  className="bg-blue_gray-100 h-[33px] justify-centers px-[31px] rounded-[26px] text-[25px] text-black-900 w-[325px]"
                  size="txtRobotoSerifRegular36"
                >
                  Biochemical Oxygen Demand
                </Text>
                <Text
                  className="bg-blue_gray-100 h-[33px] justify-centers px-[31px] rounded-[26px] text-[25px] text-black-900 w-[345px]"
                  color="blue_gray_100"
                >
                  Nitrate Concentration
                </Text>
                <Text
                  className="bg-blue_gray-100 h-[33px] justify-centers px-[31px] rounded-[26px] text-[25px] text-black-900 w-[255px]"
                  color="blue_gray_100"
                >
                  Fecal Coliform
                </Text>
                <Text
                  className="bg-blue_gray-100 h-[33px] justify-centers px-[31px] rounded-[26px] text-[25px] text-black-900 w-[340px]"
                  size="txtRobotoSerifRegular36"
                >
                  Total Coliforms Mean
                </Text>
                <Text
                  className="bg-blue_gray-100 h-[33px] justify-centers px-[31px] rounded-[26px] text-[25px] text-black-900 w-[225px]"
                  size="txtRobotoSerifRegular36"
                >
                  Temperature
                </Text>
                <Text
                  className="bg-blue_gray-100 h-[33px] justify-centers px-[31px] rounded-[26px] text-[25px] text-black-900 w-[345px]"
                  size="txtRobotoSerifRegular36"
                >
                  Water Quality Index
                </Text>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-robotoserif gap-[30px] items-center justify-between max-w-[1920px] mt-[-50px] mx-auto w-[95%]">
            <div className="flex flex-col gap-[20px] items-center justify-start">
              <div className="flex flex-row gap-[30px] items-center justify-between w-full">
                <div className="bg-black-900 flex md:flex-1 flex-row gap-[10px] items-start justify-start rounded-[10px] w-[100%] md:w-full">
                  <Img
                    className="h-[104px] md:h-auto ml-[25px] object-cover rounded-[10px] w-[104px]"
                    src="images/img_image4.png"
                    alt="imageFour"
                  />
                  <Text
                    className="mt-[30px] text-[40px] text-white-A700"
                    size="txtRobotoSerifNormalRomanBold40"
                  >
                    numpy
                  </Text>
                </div>
                <div className="bg-black-900 flex flex-row gap-[10px] items-center justify-center rounded-[10px] w-[100%]">
                  <Img
                    className="h-[104px] ml-[25px] object-cover rounded-[10px] w-[104px]"
                    src="images/img_image5.png"
                    alt="imageFive"
                  />
                  <Text
                    className="mr-[80px] text-[40px] text-white-A700"
                    size="txtRobotoSerifNormalRomanBold40"
                  >
                    pandas
                  </Text>
                </div>
              </div>
              <div className="flex flex-row gap-[30px] items-center justify-between w-full">
                <div className="h-[119px] relative w-[43%] md:w-full">
                  <div className="bg-black-900 flex md:flex-1 flex-row gap-[10px] items-start justify-start rounded-[10px] w-[330px] md:w-full">
                  <Img
                    className="h-[104px] ml-[25px] object-cover rounded-[10px] w-[104px]"
                    src="images/img_image6.png"
                    alt="imageSix"
                  />
                    <Text
                      className=" mr-[80px] mt-[30px] text-[40px] text-white-A700"
                      size="txtRobotoSerifNormalRomanBold40"
                    >
                      seaborn
                    </Text>
                  </div>

                </div>
                <div className="bg-black-900 flex flex-row gap-[10px] items-center justify-center rounded-[10px] mt-[-15px] h-[104px] w-[330px]">
                  <Img
                    className="h-[60px]  object-cover rounded-[10px] w-[250px]"
                    src="images/img_image7.png"
                    alt="imageSeven"
                  />
                </div>
              </div>
            </div>
            <Text
              className="md:text-5xl text-[60px] ml-[20px] text-black-900"
              size="txtRobotoSerifNormalRomanBold64"
            >
              Python Libraries Used
            </Text>
          </div>
          <Line className="bg-black-900 h-px mt-[-80px] w-[99%]" />
          <div className="flex flex-col font-robotoserif gap-10 items-center justify-start max-w-[1920px] mt-[-60px] mx-auto w-[95%]">
            <div className="flex flex-row items-start justify-between w-full">
              <Text
                className="text-[30px] text-black-900"
                size="txtRobotoSerifRegular36"
              >
                <span className="text-[30px] text-black-900 font-bold">
                  <>
                  Data Collection
                    <br />
                  </>
                </span>
                <>
                  Our dataset is a compilation of water quality measurements
                  gathered from diverse sources, including monitoring stations,
                  environmental agencies, and research institutions. The dataset
                  spans multiple years and geographic locations, providing a
                  comprehensive view of water quality across different
                  scenarios.
                </>
              </Text>
              <Img
                className="h-[220px] mt-[40px]"
                src="images/img_dataset1.png"
                alt="datasetOne"
              />
            </div>
          </div>
          <div className="bg-cyan-A200_33 flex flex-col font-robotoserif gap-[25px] items-center justify-start mt-[-100px] p-[30px] w-full">
            <Text
              className="text-[60px] text-black-900 text-center"
              size="txtRobotoSerifNormalRomanBold64"
            >
              Model Evaluation
            </Text>
            <div className="h-36 max-w-[1920px] mb-[70px] mx-auto relative w-full">
              <div className="absolute bg-cyan-A200_19 border border-black-900 border-solid h-36 inset-y-[0] my-auto right-[0] rounded-[20px] w-[30%]"></div>
              <div className="bg-cyan-A200_19 border border-black-900 border-solid h-36 m-auto rounded-[20px] w-[30%]"></div>
              <div className="absolute flex md:flex-col flex-row md:gap-10 h-full inset-[0] items-start justify-between m-auto w-full">
                <div className="bg-cyan-A200_19 border border-black-900 border-solid flex flex-col items-center justify-start h-36 rounded-[20px] w-[30%]">
                  <Text
                    className="mb-[13px] text-[25px] text-black-900 text-center mt-[30px]"
                    size="txtRobotoSerifRegular36"
                  >
                    <span className="text-black-900 font-robotoflex text-[30px] font-bold">
                      <>
                        0.87
                        <br />
                      </>
                    </span>
                    <span className="text-black-900 font-robotoflex font-normal">
                      Mean Absolute Error (MAE)
                    </span>
                  </Text>
                </div>
                <Text
                  className="mb-[13px] text-[25px] text-black-900 text-center mt-[30px]"
                  size="txtRobotoSerifRegular36"
                >
                  <span className="text-black-900 font-robotoflex text-[30px] font-bold">
                    <>
                      4.10
                      <br />
                    </>
                  </span>
                  <span className="text-black-900 font-robotoflex font-normal">
                    Mean Squared Error (MSE)
                  </span>
                </Text>
                <Text
                  className="mb-[13px] text-[25px] text-black-900 text-center mt-[30px] ml-[350px]"
                  size="txtRobotoSerifRegular36"
                >
                  <span className="text-black-900 font-robotoflex text-[30px] font-bold ml-[-350px]">
                    <>
                      0.97
                      <br />
                    </>
                  </span>
                  <span className="text-black-900 font-robotoflex font-normal ml-[-350px]">
                    R-squared
                  </span>
                </Text>
              </div>
            </div>
          </div>
          <Text
            className="mt-[-50px] text-[35px] text-black-900 text-center w-[80%] sm:w-full"
            size="txtRobotoMonoRegular40"
          >
            <>
              Our machine learning model, backed by comprehensive training
              datasets, is geared to provide you with reliable water quality
              predictions. Whether you&#39;re a researcher, environmentalist, or
              concerned citizen, WaterFlow aims to empower you with valuable
              insights into the health of our water bodies. Dive into the world
              of water quality prediction and contribute to the collective
              effort for a sustainable future.
            </>
          </Text>
          <Line className="bg-black-900 h-px max-w-[1724px] mt-[-60px] mx-auto w-[99%]" />
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-center mt-[-60px] md:px-5 w-[45%] md:w-full">
              <Text
                className="common-pointer mb-1 md:ml-[0] ml-[51px] text-[20px] text-black-900"
                size="txtInterRegular40Black900"
                onClick={() => navigate("/")}
              >
                Home
              </Text>
              <Text
                className="common-pointer mb-1 md:ml-[0] ml-[54px] text-[20px] text-black-900"
                size="txtInterRegular40Black900"
                onClick={() => navigate("/predict")}
              >
                PredictNow
              </Text>
              <Text
                className="common-pointer mb-1 md:ml-[0] ml-[57px] md:mt-0 text-[20px] text-black-900"
                size="txtInterRegular40Black900"
                onClick={() => navigate("/upload")}
              >
                UploadData
              </Text>
              <Text
                className="common-pointer mb-1 md:ml-[0] ml-[60px] md:mt-0 text-[20px] text-black-900"
                size="txtInterRegular40Black900"
                onClick={() => navigate("/about")}
              >
                About
              </Text>
            </div>
            <Line className="bg-black-900 h-px max-w-[1920px] mt-[-60px] mx-auto w-full" />
            <Text
              className="mt-[-80px] text-[35px] text-black-900"
              size="txtInterRegular40Black900"
            >
              WaterQuality
            </Text>
          </div>
      </div>
    </>
  );
};

export default AboutPage;
