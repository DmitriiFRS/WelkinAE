/** @type {import('next').NextConfig} */
module.exports = {
   trailingSlash: true,
   images: {
      remotePatterns: [
         {
            protocol: "http",
            hostname: "localhost",
         },
      ],
   },
};
