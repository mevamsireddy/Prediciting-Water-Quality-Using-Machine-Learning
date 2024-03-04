import React from "react";

const sizeClasses = {
  txtInterRegular96WhiteA700: "font-inter font-normal",
  txtInterBold40: "font-bold font-inter",
  txtInterRegular40: "font-inter font-normal",
  txtInterRegular96: "font-inter font-normal",
  txtInterRegular64: "font-inter font-normal",
  txtInterRegular32: "font-inter font-normal",
  txtInterBold36: "font-bold font-inter",
  txtInterBold48: "font-bold font-inter",
  txtInterRegular36: "font-inter font-normal",
  txtInterRegular48: "font-inter font-normal",
  txtInterRegular40Black900: "font-inter font-normal",
  txtInterBold45: "font-bold font-inter",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
