const path = require("path");

module.exports = (phase, { defaultConfig }) => {
  /**
   *@type {import('next').NextConfig}
   */
  const nextConfig = {
    sassOptions: {
      includePaths: [path.join(__dirname, "styles")],
    },
  };
  return nextConfig;
};
