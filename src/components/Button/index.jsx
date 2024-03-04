import React from "react";
import PropTypes from "prop-types";

const shapes = { square: "rounded-none", round: "rounded-[20px]" };
const variants = {
  fill: {
    blue_gray_100: "bg-blue_gray-100 text-black-900",
    gray_700_7f: "bg-gray-700_7f text-white-A700",
    orange_A700_d3: "bg-orange-A700_d3 text-white-A700",
  },
};
const sizes = {
  xs: "p-[5px]",
  sm: "p-3.5",
  md: "p-[23px] sm:px-5",
  lg: "p-[34px] sm:px-5",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["blue_gray_100", "gray_700_7f", "orange_A700_d3"]),
};

export { Button };
