import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Button, Img, Line, Text } from "components";

const UploadPage = () => {
  const navigate = useNavigate();
  const [inputData, setInputData] = useState({
    stationCode: "",
    location: "",
    state: "",
    temperature: "",
    dissolvedOxygen: "",
    potentialOfHydrogen: "",
    conductivity: "",
    biochemicalOxygenDemand: "",
    nitrateNitriteConcentration: "",
    fecalColiform: "",
    totalColiformsMean: "",
    year: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

// Handler for form submission
const handleSubmit = async (e) => {
  e.preventDefault();
  console.log(inputData);
  try {
    const response = await axios.post('http://localhost:5000/upload', inputData);
    console.log('Data sent successfully:', response.data);
    window.location.reload();
  } catch (error) {
    console.error('Error sending data:', error);
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
                onClick={() => navigate("/menuupload")}
              />
        </div>
        <div className="flex flex-col py-[29px] relative w-full">
          <div className="h-[445px] mx-auto w-full">
            <Img
              className="h-[250px] m-auto object-cover w-full"
              src="images/img_waterquality1_445x1920.png"
              alt="waterqualityOne"
            />
            <div className="absolute flex flex-col items-start justify-start left-[10%] top-[50px]">
              <Text
                className="text-[30px] text-black-900"
                size="txtInterBold48"
              >
                Upload Water Quality Data{" "}
              </Text>
              <Text
                className="mt-0.5 text-[25px] text-black-900"
                size="txtInterRegular32"
              >
                <span className="text-black-900 font-inter text-left font-normal">
                  Contribute your water quality information for{" "}
                </span>
                <span className="text-black-900 font-inter text-left font-bold">
                  real time
                </span>
                <span className="text-black-900 font-inter text-left font-normal">
                  {" "}
                  analysis
                </span>
              </Text>
            </div>
          </div>
          <div className="bg-gradient flex flex-col items-start justify-end mt-[-280px] mx-auto rounded-[20px] h-[1000px] w-[90%]">
            <div className="h-72 md:h-[271px] ml-[13px] mt-0.5 relative w-[84%] md:w-full">
              <div className="absolute h-[287px] inset-[0] justify-center m-auto w-full">
                <div className=""></div>
                <div className="flex h-[264px] justify-end mt-auto mx-auto w-full">
                  {/*<div className="flex flex-col gap-7 h-full items-end justify-start mb-[45px] ml-auto mr-[79px] mt-auto w-[71%]">
                    <div className="flex flex-row gap-[25px] mt-[100px] items-start justify-end w-[95%]">
                      <Text
                        className="text-[30px] text-black-900 w-[90%]"
                        size="txtInterRegular36"
                      >
                        User ID:
                      </Text>
                      <div
                        className="common-pointer bg-white-A700 border border-black-900 border-solid h-[59px] md:mt-0 mt-[3px] rounded-[10px] w-[81%]"
                        onClick={() => navigate("")}
                      ></div>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-9 items-start justify-between w-full">
                      <Text
                        className="text-[30px] text-black-900 w-[90%]"
                        size="txtInterRegular36"
                      >
                        User Name:
                      </Text>
                      <div
                        className="common-pointer bg-white-A700 border border-black-900 border-solid h-[59px] rounded-[10px] w-3/4"
                        onClick={() => navigate("")}
                      ></div>
                    </div>
  </div>
                  <div className="absolute bg-white-A700_0c h-[264px] inset-[0] justify-center m-auto outline outline-[2px] outline-black-900 rounded-[20px] w-full"></div>*/}
                </div>
              </div>
              {/*<Text
                className="absolute left-[4%] text-[35px] text-black-900 top-[8%]"
                size="txtInterBold40"
              >
                User Information
              </Text>*/}
            </div>
            <div className="h-[1159px] sm:h-[1165px] ml-[25px] mt-[-280px] relative w-[85%] md:w-full">
              <div className="">
                <div className=""></div>
                <div className="">
                  <div className="">
                    <div className="flex flex-col items-end justify-start w-[42%] md:w-full">
                    <div className="absolute bg-white-A700_0c h-[870px] inset-[0] justify-center m-auto outline outline-[2px] outline-black-900 rounded-[20px] mt-[40px] w-full"></div>
                      <div className="flex flex-col items-start justify-start z-10">
                        <Text
                          className="ml-[290px] mt-[140px] text-[26px] text-black-900 text-right"
                          size="txtInterRegular36"
                        >
                          PinCode:
                        </Text>
                        <Text
                          className="ml-[290px] mt-[30px] text-[26px] text-black-900 text-right"
                          size="txtInterRegular36"
                        >
                          Location:
                        </Text>
                        <Text
                          className="ml-[330px] mt-[30px] text-[26px] text-black-900 text-right"
                          size="txtInterRegular36"
                        >
                          State:
                        </Text>
                        <Text
                          className="ml-[240px] mt-[30px] text-[26px] text-black-900 text-right"
                          size="txtInterRegular36"
                        >
                          Temperature:
                        </Text>
                      <Text
                        className="ml-[175px] mt-[30px] text-[26px] text-black-900 text-right"
                        size="txtInterRegular36"
                      >
                        Dissolved Oxygen:
                      </Text>
                      <Text
                        className="ml-[130px] mt-[30px] text-[26px] text-black-900 text-right"
                        size="txtInterRegular36"
                      >
                        Potential of Hydrogen:
                      </Text>
                      <Text
                        className="ml-[240px] mt-[30px] text-[26px] text-black-900 text-right"
                        size="txtInterRegular36"
                      >
                        Conductivity:
                      </Text>
                      <Text
                        className="ml-[40px] mt-[30px] text-[26px] text-black-900 text-right"
                        size="txtInterRegular36"
                      >
                        Biochemical Oxygen Demand:
                      </Text>
                      <Text
                        className="ml-[45px] mt-[30px] text-[26px] text-black-900 text-right"
                        size="txtInterRegular36"
                      >
                        Nitrate-Nitrite Concentration:
                      </Text>
                      <Text
                        className="ml-[220px] mt-[30px] text-[26px] text-black-900 text-right"
                        size="txtInterRegular36"
                      >
                        Fecal Coliform:
                      </Text>
                      <Text
                        className="ml-[135px] mt-[30px] text-[26px] text-black-900 text-right"
                        size="txtInterRegular36"
                      >
                        Total Coliforms Mean:
                      </Text>
                      <Text
                        className="ml-[340px] mt-[30px] text-[26px] text-black-900 text-right"
                        size="txtInterRegular36"
                      >
                        Year:
                      </Text>
                    </div>
                    </div>

                    {/* <div className="flex flex-col gap-8 items-center justify-start md:mt-0 mt-1 w-[57%] md:w-full">
                      <div
                        className="common-pointer bg-white-A700 border border-black-900 border-solid h-[146px] w-full"
                        onClick={() => navigate("")}
                      ></div>
                      <div
                        className="common-pointer bg-white-A700 border border-black-900 border-solid h-[146px] w-full"
                        onClick={() => navigate("")}
                      ></div>
                      <div
                        className="common-pointer bg-white-A700 border border-black-900 border-solid h-[146px] w-full"
                        onClick={() => navigate("")}
                      ></div>
                      <div
                        className="common-pointer bg-white-A700 border border-black-900 border-solid h-[146px] w-full"
                        onClick={() => navigate("")}
                      ></div>
                      <div
                        className="common-pointer bg-white-A700 border border-black-900 border-solid h-[146px] w-full"
                        onClick={() => navigate("")}
                      ></div>
                      <div
                        className="common-pointer bg-white-A700 border border-black-900 border-solid h-[146px] w-full"
                        onClick={() => navigate("")}
                      ></div>
                    </div>*/}
                  </div>
                  
                </div>
              </div>
              <Text
                className="absolute left-[5%] text-[35px] text-black-900 top-[50px]"
                size="txtInterBold40"
              >
                Water Information
              </Text>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="bg-white-A700 border-2 border-black-900 border-solid h-[50px] rounded-[20px] mt-[-890px] ml-[450px] w-[350px] relative">
                <input type="text" name="stationCode" placeholder="Enter PinCode" value={inputData.stationCode} onChange={handleInputChange} className="absolute inset-0 w-full h-full border-none bg-transparent px-4 text-black-900" required />
              </div>
              <div className="bg-white-A700 border-2 border-black-900 border-solid h-[50px] rounded-[20px] mt-[12px] ml-[450px] w-[350px] relative">
                <input type="text" name="location" placeholder="Enter Location" value={inputData.location} onChange={handleInputChange} className="absolute inset-0 w-full h-full border-none bg-transparent px-4 text-black-900" required />
              </div>
              <div className="bg-white-A700 border-2 border-black-900 border-solid h-[50px] rounded-[20px] mt-[12px] ml-[450px] w-[350px] relative">
                <input type="text" name="state" placeholder="Enter State" value={inputData.state} onChange={handleInputChange} className="absolute inset-0 w-full h-full border-none bg-transparent px-4 text-black-900" required />
              </div>
              <div className="bg-white-A700 border-2 border-black-900 border-solid h-[50px] rounded-[20px] mt-[12px] ml-[450px] w-[350px] relative">
                <input type="text" name="temperature" placeholder="Enter Temperature" value={inputData.temperature} onChange={handleInputChange} className="absolute inset-0 w-full h-full border-none bg-transparent px-4 text-black-900" required />
              </div>
              <div className="bg-white-A700 border-2 border-black-900 border-solid h-[50px] rounded-[20px] mt-[12px] ml-[450px] w-[350px] relative">
                <input type="text" name="dissolvedOxygen" placeholder="Enter Dissolved Oxygen" value={inputData.dissolvedOxygen} onChange={handleInputChange} className="absolute inset-0 w-full h-full border-none bg-transparent px-4 text-black-900" required />
              </div>
              <div className="bg-white-A700 border-2 border-black-900 border-solid h-[50px] rounded-[20px] mt-[12px] ml-[450px] w-[350px] relative">
                <input type="text" name="potentialOfHydrogen" placeholder="Enter Potential of hydrogen" value={inputData.potentialOfHydrogen} onChange={handleInputChange} className="absolute inset-0 w-full h-full border-none bg-transparent px-4 text-black-900" required />
              </div>
              <div className="bg-white-A700 border-2 border-black-900 border-solid h-[50px] rounded-[20px] mt-[12px] ml-[450px] w-[350px] relative">
                <input type="text" name="conductivity" placeholder="Enter Conductivity" value={inputData.conductivity} onChange={handleInputChange} className="absolute inset-0 w-full h-full border-none bg-transparent px-4 text-black-900" required />
              </div>
              <div className="bg-white-A700 border-2 border-black-900 border-solid h-[50px] rounded-[20px] mt-[12px] ml-[450px] w-[350px] relative">
                <input type="text" name="biochemicalOxygenDemand" placeholder="Enter Biochemical Oxygen Demand" value={inputData.biochemicalOxygenDemand} onChange={handleInputChange} className="absolute inset-0 w-full h-full border-none bg-transparent px-4 text-black-900" required />
              </div>
              <div className="bg-white-A700 border-2 border-black-900 border-solid h-[50px] rounded-[20px] mt-[12px] ml-[450px] w-[350px] relative">
                <input type="text" name="nitrateNitriteConcentration" placeholder="Enter Nitrate Nitrite Concentration" value={inputData.nitrateNitriteConcentration} onChange={handleInputChange} className="absolute inset-0 w-full h-full border-none bg-transparent px-4 text-black-900" required />
              </div>
              <div className="bg-white-A700 border-2 border-black-900 border-solid h-[50px] rounded-[20px] mt-[12px] ml-[450px] w-[350px] relative">
                <input type="text" name="fecalColiform" placeholder="Enter Fecal Coliform" value={inputData.fecalColiform} onChange={handleInputChange} className="absolute inset-0 w-full h-full border-none bg-transparent px-4 text-black-900" required />
              </div>
              <div className="bg-white-A700 border-2 border-black-900 border-solid h-[50px] rounded-[20px] mt-[12px] ml-[450px] w-[350px] relative">
                <input type="text" name="totalColiformsMean" placeholder="Enter Total Coliforms Mean" value={inputData.totalColiformsMean} onChange={handleInputChange} className="absolute inset-0 w-full h-full border-none bg-transparent px-4 text-black-900" required />
              </div>
              <div className="bg-white-A700 border-2 border-black-900 border-solid h-[50px] rounded-[20px] mt-[12px] ml-[450px] w-[350px] relative">
                <input type="text" name="year" placeholder="Enter Year" value={inputData.year} onChange={handleInputChange} className="absolute inset-0 w-full h-full border-none bg-transparent px-4 text-black-900" required />
              </div>
              <Button
                type="submit"
                className="cursor-pointer font-bold ml-[55%] mt-[70px] text-[30px] text-center h-[65px] w-[280px] relative z-10"
                shape="round"
                color="orange_A700_d3"
                variant="fill"
              >
                Upload
              </Button>
            </form>
          </div>
        </div>
        <Line className="bg-black-900 h-px max-w-[1867px] mt-[47px] mx-auto w-full" />
        <Text
              className="mt-5 h-[30px] text-[35px] text-black-900 text-center"
              size="txtInterRegular40Black900"
            >
              WaterQuality
            </Text>
      </div>
    </>
  );
};

export default UploadPage;
