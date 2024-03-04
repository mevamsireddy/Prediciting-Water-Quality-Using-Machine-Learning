import React from "react";

import { Img, Text } from "components";

const PredictTwoRow = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="border-gray-700 border-l border-solid border-t flex flex-col h-full items-start justify-start w-full">
          <div className="flex flex-col items-start justify-start px-3 py-2.5 w-full">
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 text-center w-auto"
              size="txtInterRegular36"
            >
              {props?.languagetext}
            </Text>
          </div>
        </div>
        <div className="border-gray-700 border-l border-solid border-t flex flex-col h-full items-start justify-start w-full">
          <div className="flex flex-col items-start justify-start px-3 py-2.5 w-full">
            <Img
              className="h-[39px] md:h-auto object-cover w-full"
              alt="text"
              src={props?.imagetext}
            />
          </div>
        </div>
      </div>
    </>
  );
};

PredictTwoRow.defaultProps = {
  languagetext: "Drinking Water ",
  imagetext: "images/img_text.png",
};

export default PredictTwoRow;
