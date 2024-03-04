module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: { 700: "#5b5b5b", "700_7f": "#5b5b5b7f", "500_59": "#9ead8459" },
        blue_gray: {
          100: "#d9d9d9",
          "600_f2": "#5a587bf2",
          "100_a5": "#d9d9d9a5",
        },
        cyan: { A200_19: "#00ffe019", A200_33: "#00ffe033" },
        white: {
          A700_0c: "#ffffff0c",
          A700_87: "#ffffff87",
          A700_00: "#ffffff00",
          A700_47: "#ffffff47",
          A700: "#ffffff",
        },
        blue: {
          A200: "#6590f6",
          "50_a8": "#d3e7ffa8",
          A200_00: "#6590f600",
          A200_cc: "#6590f6cc",
        },
        black: { 900: "#000000" },
        orange: { A700_d3: "#ff6b00d3" },
      },
      fontFamily: {
        robotoserif: "Roboto Serif",
        inter: "Inter",
        robotomono: "Roboto Mono",
        roboto: "Roboto",
        robotoflex: "Roboto Flex",
      },
      backgroundImage: {
        gradient: "linear-gradient(180deg ,#6590f600,#6590f6cc)",
        gradient1: "linear-gradient(180deg ,#ffffff,#ffffff00)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
