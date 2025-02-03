import React from 'react';

const LandingPage = () => {
  return (
    <div
      className="h-screen w-full flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/img/boy.png')", // Replace with your image
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="w-full h-full bg-gradient-to-r from-green-900 via-green-800 to-green-400 opacity-95 flex items-center justify-center ">
        <div className="text-center space-y-6 ">
          <h1 className="text-3xl md:text-6xl  lg:text-[5rem] font-extrabold text-white">
            <span className="block  mb-24  text-white  ">
            
        LEARN WITH STOCK UPP
            </span>
            <span className="block lg:text-[6.5rem] text-5xl md:text-6xl  bg-gradient-to-r from-green-400 via-yellow-500 to-green-700 text-transparent bg-clip-text animate-bounce">
            India's Best Learning Platform
            </span>
            {/* <span className="block text-white">WITH STOCK UPP</span> */}
          </h1>
          <p className="text-lg md:text-4xl text-white font-medium">
          Aim to Literate People Financially
          </p>
         
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
