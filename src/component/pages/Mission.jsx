// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// function Mission() {
//      // Initialize AOS
//   useEffect(() => {
//     AOS.init({ duration: 1000 }); // Animation duration in milliseconds
//   }, []);

//   return (
//     <div className="flex flex-col md:flex-row items-center justify-between min-h-screen bg-gray-100 p-2">
//     {/* Left Section */}
//     <div
//       className="md:w-1/2 p-6"
//       data-aos="fade-right" // AOS Animation
//     >
//       <h1 className="text-4xl font-bold text-primary mb-4">
//       SIMPLICITY
//       IS THE ULTIMATE SOPHISTICATION
//       </h1>
//       <p className="text-gray-700 mb-6 text-lg">
//       I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you..
//       </p>
//       <button className="px-6 py-2  bg-primary text-white  hover:text-yellow-500 transition-all duration-300">
//         Learn More
//       </button>
//     </div>

//     {/* Right Section */}
//     <div
//       className="md:w-[20%] flex justify-center items-center"
//       data-aos="fade-left" // AOS Animation
//     >
//       <img
//         src="/img/girl1.png"
//         alt="Right Side Illustration"
//         className="w-full max-w-md "
//       />
//     </div>
//   </div>
//   )
// }

// export default Mission


import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

function Mission() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Animation duration in milliseconds
  }, []);

  return (
    <div className="flex flex-col items-center justify-between  bg-gray-100 p-4">
      {/* Service Heading */}
      <div
        className="w-full p-6 lg:mb-12  mb-6 text-center "
        data-aos="fade-up"
      >
        <h1 className="lg:text-5xl text-4xl font-extrabold text-primary  leading-tight tracking-tight">
          Service We Are Providing
        </h1>
        
      </div>

      {/* Mentorship Sections (1:1 and Group) */}
      <div className="flex flex-wrap md:flex-nowrap gap-8 w-full justify-between">
        {/* Left Section for 1:1 Mentorship */}
        <div
          className="md:w-1/2 p-6"
          data-aos="fade-right"
        >
          <h2 className="lg:text-4xl text-3xl font-bold text-primary mb-4">
            1:1 Mentorship
          </h2>
          <p className="text-gray-700 mb-6 text-lg leading-relaxed">
            One-to-one mentorship provides personalized guidance and fosters a supportive environment where mentees can ask questions, receive constructive feedback, and gain insights drawn from the mentor’s experience. This individualized attention accelerates learning, builds confidence, and enhances skills more effectively than generalized training methods.
          </p>
        <Link to='/Blog'>
        <button className="px-6 py-3 bg-primary text-white hover:bg-yellow-500 transition-all duration-300 rounded-lg shadow-md">
            Learn More
          </button>
        </Link>
        </div>

        {/* Right Section for Group Mentorship */}
        <div
          className="md:w-1/2 p-6 mt-6"
          data-aos="fade-right"
        >
          <h2 className="lg:text-4xl text-3xl font-bold text-primary mb-4">
            Group Mentorship
          </h2>
          <p className="text-gray-700 mb-6 text-lg leading-relaxed">
            Group mentorship provides diverse perspectives, enabling mentees to learn not only from the mentor but also from peers, fostering shared learning and collaboration.
          </p>
          <Link to='/Blog'>
        <button className="px-6 py-3 bg-primary text-white hover:bg-yellow-500 transition-all duration-300 rounded-lg shadow-md">
            Learn More
          </button>
        </Link>
        </div>
      </div>
    </div>
  );
}

export default Mission;
