// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Custom Colors
        light1: "#EDEDE9", // edede9
        light2: "#D6CCC2", // d6ccc2
        light3: "#F5EBE0", // f5ebe0
        light4: "#E3D5CA", // e3d5ca
        light5: "#D5BDAF", // d5bdaf
        darkText: "#333333", // Dark gray for text
        error: "#EF4444", // Red for errors
        success: "#10B981", // Green for success messages
      },
    },
  },
  plugins: [],
};
