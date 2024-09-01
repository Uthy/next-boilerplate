import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          1: "#fdfdfe",
          2: "#f7f9ff",
          3: "#edf2fe",
          4: "#dfeaff",
          5: "#d0dfff",
          6: "#bdd1ff",
          7: "#a6bff9",
          8: "#87a5ef",
          9: "#3d63dd",
          10: "#3657c3",
          11: "#395bc7",
          12: "#1d2e5c",
        },
        gray: {
          1: "#fcfcfd",
          2: "#f9f9fb",
          3: "#eff0f3",
          4: "#e7e8ec",
          5: "#e0e1e6",
          6: "#d8d9e0",
          7: "#cdced7",
          8: "#b9bbc6",
          9: "#8b8d98",
          10: "#80828d",
          11: "#62636c",
          12: "#1e1f24",
        },
      }
    },
  },
  plugins: [],
};
export default config;
