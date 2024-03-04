import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Img, Line, List, Text } from "components";
import PredictTwoRow from "components/PredictTwoRow";

const PredictTwoPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const prediction = location.state?.prediction;
  console.log("Prediction value:", prediction);

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  // Function to determine if prediction is suitable
  const isDrinking = (prediction) => {
    if (prediction >= 80 && prediction <= 100) {
      return "✔️";
    } else {
      return "❌";
    }
  };
  const isRecreational = (prediction) => {
    if (prediction >= 70 && prediction <= 100) {
      return "✔️";
    } else {
      return "❌";
    }
  };
  const isAgricultural = (prediction) => {
    if (prediction >= 60 && prediction <= 100) {
      return "✔️";
    } else {
      return "❌";
    }
  };
  const isIndustrial = (prediction) => {
    if (prediction >= 50 && prediction <= 100) {
      return "✔️";
    } else {
      return "❌";
    }
  };
  const isAquatic = (prediction) => {
    if (prediction >= 40 && prediction <= 100) {
      return "✔️";
    } else {
      return "❌";
    }
  };
  const isFishery = (prediction) => {
    if (prediction >= 40 && prediction <= 100) {
      return "✔️";
    } else {
      return "❌";
    }
  };
  const isRecommended = (prediction) => {
    if (prediction >= 0 && prediction <= 0) {
      return "✔️";
    } else {
      return "❌";
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
        <div className="h-[790px] sm:h-[600px] md:px-5 py-[29px] relative w-full">
          <Img
            className="h-[790px] m-auto object-cover w-full"
            src="images/img_waterquality1.png"
            alt="waterqualityOne"
          />
          <div className="absolute bg-white-A700_87 flex flex-col h-full inset-[0] items-center justify-center m-auto p-[69px] mt-[29px] md:px-10 sm:px-5 rounded-[180px] w-[85%]">
            <div className="flex flex-col items-center justify-start mb-[147px] w-[93%] md:w-full">
              <div className="flex sm:flex-col flex-row font-inter md:gap-10 items-center justify-between w-[97%] md:w-full">
                <Text
                  className="sm:text-[20px] md:text-[25px] text-[35px] mt-[100px] text-black-900 text-center"
                  size="txtInterBold45"
                >
                  Predicted water quality
                </Text>
                <Img
                  className="common-pointer h-[60px] md:h-auto object-cover mt-[100px] w-[60px]"
                  src="images/img_close.png"
                  alt="close"
                  onClick={() => navigate("/predict")}
                />
              </div>
              <Line className="bg-black-900 h-px mt-2 w-full" />
              <Text
                className="mt-[30px] sm:text-[20px] md:text-[25px] text-[28px] text-black-900 text-center"
                size="txtInterBold45"
              >
                Your Predicted Water Quality Index (WQI): {prediction}%
              </Text>
              <Text
                className="mt-[20px] text-[30px] sm:text-[20px] md:text-[30px] text-black-900 text-center"
                size="txtRobotoRomanBold48"
              >
                use cases
              </Text>
              {/*<List
                className="flex flex-col font-inter gap-px items-center mt-[10px] w-[70%]"
                orientation="vertical"
              >
                <div className="bg-blue-50_a8 border-[2px] border-black-900 border-solid flex md:flex-col flex-row md:gap-5 h-[57px] md:h-auto items-start justify-start max-w-[901px] rounded-[20px] w-full">
                  <div className="bg-white-A700_0c border-gray-700  border-solid flex flex-1 flex-col h-full items-start justify-start w-full">
                    <div className="flex flex-col items-start justify-start px-3 py-2.5 w-full">
                      <Text
                        className="text-[25px] sm:text-[15px] md:text-[20px] text-black-900 text-center w-full"
                        size="txtInterBold36"
                      >
                        Purpose
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700_0c border-gray-700  border-solid border-l flex flex-1 flex-col h-full items-start justify-start w-full">
                    <div className="flex flex-col items-start justify-start px-3 py-2.5 w-full">
                      <Text
                        className="text-[25px] sm:text-[15px] md:text-[20px] text-black-900 text-center w-full"
                        size="txtInterBold36"
                      >
                        Suitable / Not Suitable
                      </Text>
                    </div>
                  </div>
                </div>
                <PredictTwoRow className="bg-blue-50_a8 border-2 border-black-900 border-solid flex md:flex-col flex-row md:gap-5 h-[57px] md:h-auto items-start justify-start max-w-[901px] rounded-[20px] w-full" />
                <PredictTwoRow
                  className="bg-blue-50_a8 border-2 border-black-900 flex md:flex-col flex-row md:gap-5 h-[57px] md:h-auto items-start justify-start max-w-[901px] rounded-[20px] w-full"
                  languagetext="Recreational Use (Swimming)"
                  imagetext="images/img_text_39x36.png"
                />
                <PredictTwoRow
                  className="bg-blue-50_a8 border-2 border-black-900 border-solid flex md:flex-col flex-row md:gap-5 h-[58px] md:h-auto items-start justify-start max-w-[901px] rounded-[20px] w-full"
                  languagetext="Agricultural Irrigation"
                  imagetext="images/img_text_39x36.png"
                />
                <PredictTwoRow
                  className="bg-blue-50_a8 border-2 border-black-900 border-solid flex md:flex-col flex-row md:gap-5 h-14 md:h-auto items-start justify-start max-w-[901px] rounded-[20px] w-full"
                  languagetext="Industrial Use"
                  imagetext="images/img_text_39x36.png"
                />
                <PredictTwoRow
                  className="bg-blue-50_a8 border-2 border-black-900 border-solid flex md:flex-col flex-row md:gap-5 h-[57px] md:h-auto items-start justify-start max-w-[901px] rounded-[20px] w-full"
                  languagetext="Aquatic Ecosystem Support"
                  imagetext="images/img_text_39x36.png"
                />
                <PredictTwoRow
                  className="bg-blue-50_a8 border-2 border-black-900 border-solid flex md:flex-col flex-row md:gap-5 h-[57px] md:h-auto items-start justify-start max-w-[901px] rounded-[20px] w-full"
                  languagetext="Fishery Support"
                  imagetext="images/img_text_39x36.png"
                />
                <PredictTwoRow
                  className="bg-blue-50_a8 border-2 border-black-900 border-solid flex md:flex-col flex-row md:gap-5 h-[57px] md:h-auto items-start justify-start max-w-[901px] rounded-[20px] w-full"
                  languagetext=" No Recommended Use"
                  imagetext="images/img_text_1.png"
                />
  </List>*/}
          <List className="flex flex-col font-inter gap-px items-center mt-[10px] w-[90%]" orientation="vertical">
          <div className="bg-blue-50_a8 border-[2px] border-black-900 border-solid flex md:flex-col flex-row md:gap-5 h-[57px] md:h-auto items-start justify-start max-w-[901px] rounded-[20px] w-full">
                  <div className="bg-white-A700_0c border-gray-700  border-solid flex flex-1 flex-col h-full items-start justify-start w-full">
                    <div className="flex flex-col items-start justify-start px-3 py-2.5 w-full">
                      <Text
                        className="text-[25px] sm:text-[15px] md:text-[20px] text-black-900 text-center w-full"
                        size="txtInterBold36"
                      >
                        Purpose
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700_0c border-gray-700  border-solid border-l flex flex-1 flex-col h-full items-start justify-start w-full">
                    <div className="flex flex-col items-start justify-start px-3 py-2.5 w-full">
                      <Text
                        className="text-[25px] sm:text-[15px] md:text-[20px] text-black-900 text-center w-full"
                        size="txtInterBold36"
                      >
                        Suitable / Not Suitable
                      </Text>
                    </div>
                  </div>
                </div>
            {/* Add more rows as needed */}
            <div className="bg-blue-50_a8 border-2 border-black-900 flex md:flex-col flex-row md:gap-5 h-[57px] md:h-auto items-start justify-start max-w-[901px] rounded-[20px] w-full">
              <div className="bg-white-A700_0c border-gray-700 border-solid flex flex-1 flex-col h-full items-start justify-start w-full">
                <div className="flex flex-col items-start justify-start px-3 py-2.5 w-full">
                  <Text className="text-[25px] sm:text-[15px] md:text-[20px] text-black-900 text-center w-full" size="txtInterBold36">Drinking Water</Text>
                </div>
              </div>
              <div className="bg-white-A700_0c border-gray-700 border-solid border-l flex flex-1 flex-col h-full items-start justify-start w-full">
                <div className="flex flex-col items-start justify-start px-3 py-2.5 w-full">
                  <Text className="text-[25px] sm:text-[15px] md:text-[20px] text-black-900 text-center w-full" size="txtInterBold36">{isDrinking(prediction)}</Text>
                </div>
              </div>
            </div>
            <div className="bg-blue-50_a8 border-2 border-black-900 flex md:flex-col flex-row md:gap-5 h-[57px] md:h-auto items-start justify-start max-w-[901px] rounded-[20px] w-full">
              <div className="bg-white-A700_0c border-gray-700 border-solid flex flex-1 flex-col h-full items-start justify-start w-full">
                <div className="flex flex-col items-start justify-start px-3 py-2.5 w-full">
                  <Text className="text-[25px] sm:text-[15px] md:text-[20px] text-black-900 text-center w-full" size="txtInterBold36">Recreational Use (Swimming)</Text>
                </div>
              </div>
              <div className="bg-white-A700_0c border-gray-700 border-solid border-l flex flex-1 flex-col h-full items-start justify-start w-full">
                <div className="flex flex-col items-start justify-start px-3 py-2.5 w-full">
                  <Text className="text-[25px] sm:text-[15px] md:text-[20px] text-black-900 text-center w-full" size="txtInterBold36">{isRecreational(prediction)}</Text>
                </div>
              </div>
            </div>
            <div className="bg-blue-50_a8 border-2 border-black-900 flex md:flex-col flex-row md:gap-5 h-[57px] md:h-auto items-start justify-start max-w-[901px] rounded-[20px] w-full">
              <div className="bg-white-A700_0c border-gray-700 border-solid flex flex-1 flex-col h-full items-start justify-start w-full">
                <div className="flex flex-col items-start justify-start px-3 py-2.5 w-full">
                  <Text className="text-[25px] sm:text-[15px] md:text-[20px] text-black-900 text-center w-full" size="txtInterBold36">Agricultural Irrigation</Text>
                </div>
              </div>
              <div className="bg-white-A700_0c border-gray-700 border-solid border-l flex flex-1 flex-col h-full items-start justify-start w-full">
                <div className="flex flex-col items-start justify-start px-3 py-2.5 w-full">
                  <Text className="text-[25px] sm:text-[15px] md:text-[20px] text-black-900 text-center w-full" size="txtInterBold36">{isAgricultural(prediction)}</Text>
                </div>
              </div>
            </div>
            <div className="bg-blue-50_a8 border-2 border-black-900 flex md:flex-col flex-row md:gap-5 h-[57px] md:h-auto items-start justify-start max-w-[901px] rounded-[20px] w-full">
              <div className="bg-white-A700_0c border-gray-700 border-solid flex flex-1 flex-col h-full items-start justify-start w-full">
                <div className="flex flex-col items-start justify-start px-3 py-2.5 w-full">
                  <Text className="text-[25px] sm:text-[15px] md:text-[20px] text-black-900 text-center w-full" size="txtInterBold36">Industrial Use</Text>
                </div>
              </div>
              <div className="bg-white-A700_0c border-gray-700 border-solid border-l flex flex-1 flex-col h-full items-start justify-start w-full">
                <div className="flex flex-col items-start justify-start px-3 py-2.5 w-full">
                  <Text className="text-[25px] sm:text-[15px] md:text-[20px] text-black-900 text-center w-full" size="txtInterBold36">{isIndustrial(prediction)}</Text>
                </div>
              </div>
            </div>            <div className="bg-blue-50_a8 border-2 border-black-900 flex md:flex-col flex-row md:gap-5 h-[57px] md:h-auto items-start justify-start max-w-[901px] rounded-[20px] w-full">
              <div className="bg-white-A700_0c border-gray-700 border-solid flex flex-1 flex-col h-full items-start justify-start w-full">
                <div className="flex flex-col items-start justify-start px-3 py-2.5 w-full">
                  <Text className="text-[25px] sm:text-[15px] md:text-[20px] text-black-900 text-center w-full" size="txtInterBold36">Aquatic Ecosystem Support</Text>
                </div>
              </div>
              <div className="bg-white-A700_0c border-gray-700 border-solid border-l flex flex-1 flex-col h-full items-start justify-start w-full">
                <div className="flex flex-col items-start justify-start px-3 py-2.5 w-full">
                  <Text className="text-[25px] sm:text-[15px] md:text-[20px] text-black-900 text-center w-full" size="txtInterBold36">{isAquatic(prediction)}</Text>
                </div>
              </div>
            </div>
            <div className="bg-blue-50_a8 border-2 border-black-900 flex md:flex-col flex-row md:gap-5 h-[57px] md:h-auto items-start justify-start max-w-[901px] rounded-[20px] w-full">
              <div className="bg-white-A700_0c border-gray-700 border-solid flex flex-1 flex-col h-full items-start justify-start w-full">
                <div className="flex flex-col items-start justify-start px-3 py-2.5 w-full">
                  <Text className="text-[25px] sm:text-[15px] md:text-[20px] text-black-900 text-center w-full" size="txtInterBold36">Fishery Support</Text>
                </div>
              </div>
              <div className="bg-white-A700_0c border-gray-700 border-solid border-l flex flex-1 flex-col h-full items-start justify-start w-full">
                <div className="flex flex-col items-start justify-start px-3 py-2.5 w-full">
                  <Text className="text-[25px] sm:text-[15px] md:text-[20px] text-black-900 text-center w-full" size="txtInterBold36">{isFishery(prediction)}</Text>
                </div>
              </div>
            </div>
            <div className="bg-blue-50_a8 border-2 border-black-900 flex md:flex-col flex-row md:gap-5 h-[57px] md:h-auto items-start justify-start max-w-[901px] rounded-[20px] w-full">
              <div className="bg-white-A700_0c border-gray-700 border-solid flex flex-1 flex-col h-full items-start justify-start w-full">
                <div className="flex flex-col items-start justify-start px-3 py-2.5 w-full">
                  <Text className="text-[25px] sm:text-[15px] md:text-[20px] text-black-900 text-center w-full" size="txtInterBold36">No Recommended Use</Text>
                </div>
              </div>
              <div className="bg-white-A700_0c border-gray-700 border-solid border-l flex flex-1 flex-col h-full items-start justify-start w-full">
                <div className="flex flex-col items-start justify-start px-3 py-2.5 w-full">
                  <Text className="text-[25px] sm:text-[15px] md:text-[20px] text-black-900 text-center w-full" size="txtInterBold36">{isRecommended(prediction)}</Text>
                </div>
              </div>
            </div>
          </List>
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

export default PredictTwoPage;
