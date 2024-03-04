import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";

const Home1Page = () => {
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

  return (
    <>

      <div className="bg-white-A700 flex flex-col font-inter items-center justify-end mx-auto py-[25px] w-full">
        <div className="flex flex-col md:gap-10 gap-[110px] items-center justify-start mt-1 w-full">
          <div className="flex flex-col items-center justify-start max-w-[1200px] mx-auto md:px-5 w-full">
            <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
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

              {/*Menu*/}
              <div>
                <Img
                  className="common-pointer h-16"
                  src="images/img_group2.svg"
                  alt="groupTwo"
                  onClick={toggleMenu}
                />
                {isOpen && (
                  <div
                    style={{
                      position: 'fixed',
                      top: isOpen ? 0 : '-10%', // Slide from top when open
                      left: 0,
                      width: '100%',
                      height: '100%',
                      backgroundColor: 'rgba(0, 0, 0, 0.5)',
                      transition: 'top 0.5s ease-in-out', // Add transition for smooth animation
                      zIndex: 9999,
                    }}
                  >

                    <div className="bg-blue-A200 flex flex-col font-inter gap-[5px] justify-start h-[635px] p-12 w-full">
                      <div className="flex flex-col items-end ml-100 w-full md:w-full">
                        <Img
                          className="common-pointer h-[130px] md:h-auto object-cover w-[130px]"
                          src="images/img_close.png"
                          alt="close"
                          onClick={toggleMenu}
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start mb-[138px] ml-36 md:ml-[0]">
                        <Text
                          className="common-pointer text-[60px] text-white-A700"
                          size="txtInterRegular96WhiteA700"
                          onClick={toggleMenu}
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
                  </div>
                )}
              </div>

            </div>

            <Text
              className="mt-[160px] md:text-3xl text-6xl text-black-900 text-center"
              size="txtInterRegular96"
            >
              <span className="md:text-5xl text-black-900 font-inter text-[56px] font-bold">
                Water Quality Prediction
              </span>
              <span className="text-black-900 font-inter font-normal">
                <>
                  <br />
                </>
              </span>
              <span className="md:text-[44px] sm:text-[38px] text-black-900 font-inter text-4xl font-normal">
                Using Machine Learning
              </span>
            </Text>
            <Button
              className="common-pointer cursor-pointer leading-[normal] min-w-[460px] md:min-w-full mt-[30px] rounded-[75px] md:text-4xl text-[40px] text-center"
              onClick={() => navigate("/predict")}
              color="orange_A700_d3"
              size="lg"
              variant="fill"
            >
              PredictNow
            </Button>
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="bg-blue_gray-600_f2 flex flex-col items-center justify-start p-[50px] md:px-10 sm:px-5 w-full">
              <div className="flex flex-col gap-8 items-center justify-start max-w-[1080px] mb-[18px] mx-auto w-full">
                <div className="sm:h-[371px] md:h-[430px] h-[300px] relative w-full">
                  <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[100%]">
                    <div className="flex md:flex-col flex-row md:gap-9 items-center justify-between w-full">
                      <div className="bg-white-A700_47 flex flex-col items-center justify-start p-[20px] w-[45%] sm:px-5 rounded-[100px]">
                        <Text
                          className="my-5 sm:text-4xl md:text-[38px] text-[25px] text-center text-white-A700 w-full"
                          size="txtInterRegular40"
                        >

                          <span className="md:text-[15px] sm:text-[10px] text-white-A700 font-inter text-[25px] font-normal">
                            Predicts the temperature of the water
                          </span>
                        </Text>
                      </div>
                      <div className="bg-white-A700_47 flex flex-col items-center justify-start p-[40px] sm:px-5 rounded-[100px]">
                        <Text
                          className="sm:text-4xl md:text-[38px] text-[25px] text-center text-white-A700 w-full"
                          size="txtInterRegular40"
                        >
                          <span className="md:text-[34px] sm:text-[32px] text-white-A700 font-inter text-[25px] font-normal">
                            Predicts the pH level of the water
                          </span>
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Text
                    className="absolute inset-x-[0] mx-auto md:text-5xl text-[30px] text-center text-white-A700 top-[20px]"
                    size="txtInterRegular64"
                  >
                    <span className="md:text-[34px] sm:text-[32px] text-white-A700 font-inter text-[30px] font-bold">
                      FEATURES
                    </span>
                    <span className="text-white-A700 font-inter font-normal">
                      <>
                        <br />
                      </>
                    </span>
                    <span className="md:text-[44px] sm:text-[38px] text-white-A700 font-inter text-[35px] mt font-normal">
                      <>
                        Accurate Water Quality Prediction
                        <br />
                      </>
                    </span>
                    <span className="md:text-[38px] sm:text-4xl text-white-A700 font-inter text-[35px] font-normal">
                      Utilize machine learning to predict key water quality parameters
                    </span>
                  </Text>
                </div>

              
                <div className="flex flex-col gap-8 items-center justify-start w-[100%] md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                    <div className="bg-white-A700_47 flex flex-col items-center justify-start p-[20px] w-[45%] rounded-[100px]">
                      <Text
                        className="sm:text-4xl md:text-[38px] text-[25px] text-center text-white-A700 w-[90%] sm:w-full"
                        size="txtInterRegular40"
                      >

                        <span className="md:text-[34px] sm:text-[32px] text-white-A700 font-inter text-[25px] font-normal">
                          <>
                            Predicts the dissolved oxygen in the water</>
                        </span>
                      </Text>
                    </div>
                    <div className="bg-white-A700_47 flex flex-col items-center justify-start p-[20px] w-[44%] rounded-[100px]">
                      <Text
                        className="sm:text-4xl md:text-[38px] text-[25px] text-center text-white-A700 w-[90%] sm:w-full"
                        size="txtInterRegular40"
                      >

                        <span className="md:text-[34px] sm:text-[32px] text-white-A700 font-inter text-[25px] font-normal">
                          Predicts the turbidity level of the water
                        </span>
                      </Text>
                      <div className="absolute bg-white-A700_47 h-[197px] inset-[0] justify-center m-auto rotate-[180deg] rounded-[98px] w-full"></div>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-10 gap-5 items-center justify-between w-full">
                    <div className="bg-white-A700_47 flex flex-col items-center justify-start p-[20px] w-[45%] rounded-[100px]">
                      <Text
                        className=" sm:text-4xl md:text-[38px] text-[25px] text-center text-white-A700 w-[94%] sm:w-full"
                        size="txtInterRegular40"
                      >

                        <span className="md:text-[34px] sm:text-[32px] text-white-A700 font-inter text-[25px] font-normal">
                          Predicts oxygen consumed by microorganisms
                        </span>
                      </Text>
                    </div>
                    <div className="bg-white-A700_47 flex flex-col items-center justify-start p-[40px] w-[44%] rounded-[100px]">
                      <Text
                        className=" sm:text-4xl md:text-[38px] text-[25px] text-center text-white-A700 w-full"
                        size="txtInterRegular40"
                      >

                        <span className="md:text-[34px] sm:text-[32px] text-white-A700 font-inter text-[25px] font-normal">
                          Predicts the water quality index
                        </span>
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:gap-10 gap-[220px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between max-w-[1080px] mt-[50px] mx-auto md:px-5 w-[80%]">
              <Img
                className="flex-1  md:h-auto object-cover w-full"
                src="images/img_image1.png"
                alt="imageOne"
              />
              <Img
                className="flex-1  md:h-auto object-cover w-full"
                src="images/img_image2.png"
                alt="imageTwo"
              />
              <Img
                className="flex-1  md:h-auto object-cover w-full"
                src="images/img_image3.png"
                alt="imageThree"
              />
            </div>
            <div className="gap-[13px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-start max-w-[1766px] mt-[40px] mx-auto md:px-5 w-[95%]">
              <Text
                className="flex-1 sm:text-4xl md:text-[38px] text-[25px] text-black-900 text-center w-full"
                size="txtInterRegular40Black900"
              >
                <>
                  <span className="font-bold">Solve common water problems with ML</span>
                  <br />
                  Solutions to help enhance customer experiences, enable faster
                  and better decision-making, and optimize water processes.
                </>
              </Text>
              <Text
                className="flex-1 sm:text-4xl md:text-[38px] text-[25px] text-black-900 text-center w-full"
                size="txtInterRegular40Black900"
              >
                <>
                <span className="font-bold">Build New water resources</span>
                  <br /><br />
                  The easiest way to build and scale water resources with
                  foundation models.
                  <br/><br/><br/>
                </>
              </Text>
              <Text
                className="flex-1 sm:text-4xl md:text-[38px] text-[25px] text-black-900 text-center w-full"
                size="txtInterRegular40Black900"
              >
                <>
                <span className="font-bold">Generate ML predictions without writing any code</span>
                  <br />
                  Tools to generate predictions using ML for water analysts
                  across Public Health, Agriculture, Industrial, and Aquatic.<br /><br />
                </>
              </Text>
            </div>
            <Line className="mt-[20px] bg-black-900 h-px max-w-[1920px] mx-auto w-full" />
            <Text
              className="mt-[60px] text-[35px] sm:text-[38px] md:text-[44px] text-black-900 text-center"
              size="txtInterRegular48"
            >
              <span className="text-black-900 font-inter font-bold">
                <>
                  Predicting Water Quality with Machine Learning
                  <br />
                </>
              </span>
              <span className="md:text-[38px] sm:text-4xl text-black-900 font-inter text-[30px] font-normal">
                Water quality is a critical factor in ensuring the health and
                safety of communities. By leveraging the power of machine
                learning algorithms, we can accurately predict water quality
                parameters and take proactive measures to maintain clean and
                safe water sources.
              </span>
            </Text>
            <Button
              className="common-pointer cursor-pointer leading-[normal] min-w-[360px] sm:min-w-full mt-[20px] text-[40px] sm:text-[38px] md:text-[44px] text-center"
              onClick={() => navigate("/about")}
              shape="square"
              color="orange_A700_d3"
              size="sm"
              variant="fill"
            >
              Learn More
            </Button>
            <div className="bg-gray-500_59 flex sm:flex-col flex-row gap-[25px] items-start justify-end mt-[40px] p-[25px] sm:px-5 w-full">
              <Text
                className="sm:mt-0 mt-10 text-5xl text-black-900 text-center"
                size="txtInterRegular48"
              >
                <span className="text-black-900 font-inter font-bold">
                  <>
                    FAQ's
                    <br />
                  </>
                </span>
                <span className="md:text-5xl text-black-900 font-inter text-[40px] font-normal">
                  <>
                    Common questions
                    <br />
                    <br />
                  </>
                </span>
                <span className="text-[30px] text-black-900 font-inter font-normal">
                  Here are some of the most common questions that we get.
                </span>
              </Text>
              <Text
                className="mb-0.5 sm:mt-0 mt-10 text-[30px] sm:text-[38px] md:text-[44px] text-black-900"
                size="txtInterRegular48"
              >
                <span className="text-black-900 font-inter text-left font-bold">
                  <>
                    What is water quality prediction?
                    <br />
                  </>
                </span>
                <span className="text-black-900 font-inter text-left text-[25px] font-normal">
                  <>
                    Water quality prediction is the use of machine learning
                    algorithms to forecast the quality of water in a given area.
                    <br /><br />
                  </>
                </span>
                <span className="text-black-900 font-inter text-left font-bold">
                  <>
                    Why is water quality prediction important?
                    <br />
                  </>
                </span>
                <span className="text-black-900 font-inter text-left text-[25px] font-normal">
                  <>
                    Water quality prediction is important because it helps in
                    identifying potential contamination sources, monitoring
                    water treatment processes, and ensuring the safety of
                    drinking water.
                    <br /><br />
                  </>
                </span>
                <span className="text-black-900 font-inter text-left font-bold">
                  <>
                    How does machine learning help in water quality prediction?
                    <br />
                  </>
                </span>
                <span className="text-black-900 font-inter text-left text-[25px] font-normal">
                  <>
                    Machine learning algorithms analyze historical water quality
                    data and identify patterns and correlations that can be used
                    to predict future water quality based on various factors
                    such as weather conditions, pollutant levels, and
                    geographical features.
                    <br /><br />
                  </>
                </span>
                <span className="text-black-900 font-inter text-left font-bold">
                  <>
                    What are the benefits of using machine learning for water
                    quality prediction?
                    <br />
                  </>
                </span>
                <span className="md:text-[38px] sm:text-4xl text-black-900 font-inter text-left text-[25px] font-normal">
                  <>
                    Using machine learning for water quality prediction allows
                    for more accurate and timely predictions, which can help in
                    proactive decision-making, resource allocation, and
                    pollution prevention.
                    <br /><br />
                  </>
                </span>
                <span className="text-black-900 font-inter text-left font-bold">
                  <>
                    Can water quality prediction be used for different bodies of
                    water?
                    <br />
                  </>
                </span>
                <span className="md:text-[38px] sm:text-4xl text-black-900 font-inter text-left text-[25px] font-normal">
                  Yes, water quality prediction using machine learning can be
                  applied to various bodies of water such as rivers, lakes,
                  reservoirs, and even oceans, as long as sufficient data is
                  available for training the predictive models.
                </span>
              </Text>
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-center mt-[50px] md:px-5 w-[45%] md:w-full">
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
            <Line className="bg-black-900 h-px max-w-[1920px] mt-[20px] mx-auto w-full" />
            <Text
              className="mt-6 text-[35px] text-black-900"
              size="txtInterRegular40Black900"
            >
              WaterQuality
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home1Page;
