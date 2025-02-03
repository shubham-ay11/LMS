// import React, { useState, useEffect } from "react";

// const Slider = () => {
//   const cards = [
//     {
//       id: 1,
//       image: "/img/girl1.png",
//       title: "Card Title 1",
//       description: "This is the description for card 1.",
//       subDescription: "Additional details for card 1.",
//       buttonText: "Learn More",
//     },
//     {
//       id: 2,
//       image: "/img/boy.png",
//       title: "Card Title 2",
//       description: "This is the description for card 2.",
//       subDescription: "Additional details for card 2.",
//       buttonText: "Learn More",
//     },
//     {
//       id: 3,
//       image: "/img/boy.png",
//       title: "Card Title 3",
//       description: "This is the description for card 3.",
//       subDescription: "Additional details for card 3.",
//       buttonText: "Learn More",
//     },
//     {
//       id: 4,
//       image: "/img/girl1.png",
//       title: "Card Title 4",
//       description: "This is the description for card 4.",
//       subDescription: "Additional details for card 4.",
//       buttonText: "Learn More",
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex < cards.length - 2 ? prevIndex + 1 : 0
//     );
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex > 0 ? prevIndex - 1 : cards.length - 2
//     );
//   };

//   // Autoplay functionality
//   useEffect(() => {
//     const interval = setInterval(handleNext, 3000); // Slide every 3 seconds
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative  bg-primary w-full max-w-full  mx-auto  pb-6 overflow-hidden">
//       {/* Section Title */}
//       <h2 className="lg:text-[6em] text-6xl p-4 font-bold  text-white font-serif  mb-6 lg:pl-24 lg:text-start text-center">

//           Cour<span className=" text-yellow-500">se</span>
       
//       </h2>

//       {/* Slider Container */}
//       <div
//         className="flex max-w-6xl transition-transform duration-500"
//         style={{
//           transform: `translateX(-${currentIndex * 50}%)`,
//         }}
//       >
//         {cards.map((card) => (
//           <div
//             key={card.id}
//             className="w-1/2 sm:w-1/2 lg:w-2/3 xl:w-3/4 flex-shrink-0 px-4"
//             style={{ flexBasis: "50%" }} // Adjusted for large screens
//           >
//             <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col sm:flex-row">
//               {/* Left Image */}
//               <div className="w-full sm:w-1/2 h-48 sm:h-80">
//                 <img
//                   src={card.image}
//                   alt={card.title}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               {/* Right Content */}
//               <div className="w-full sm:w-1/2 p-4 flex flex-col justify-between">
//                 <div>
//                   <h3 className="text-xl font-bold text-gray-800">
//                     {card.title}
//                   </h3>
//                   <p className="text-gray-600 mt-2">{card.description}</p>
//                   <p className="text-gray-500 mt-1">{card.subDescription}</p>
//                 </div>
//                 <button className="mt-4 px-4 py-2  bg-primary text-white font-semibold rounded-md hover:bg-green-600 transition duration-300">
//                   {card.buttonText}
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Navigation Buttons */}
//       <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4">
//         <button
//           onClick={handlePrev}
//           className="hidden sm:block px-4 py-2 bg-yellow-500 text-white font-bold rounded-full shadow-md hover:bg-yellow-600 transition duration-300"
//         >
//           &#8592; Prev
//         </button>
//         <button
//           onClick={handleNext}
//           className="hidden sm:block px-4 py-2 bg-yellow-500 text-white font-bold rounded-full shadow-md hover:bg-yellow-600 transition duration-300"
//         >
//           Next &#8594;
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Slider;

























import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Slider = () => {
  const cards = [
    {
      id: 1,
      image: "/img/auth3.jpg",
      title: "A Complete Beginner Course of Stock Market",
      description: "Learn the fundamentals of the stock market with Danish Sir.",
      // subDescription: "Additional details for card 1.",
      buttonText: "Learn More",
    },
    {
      id: 2,
      image: "/img/auth3.jpg",
      title: "Intermediate Course of Stock Market",
      description: "Take your stock market skills to the next level with Danish Sir.",
      // subDescription: "Additional details for card 2.",
      buttonText: "Learn More",
    },
    {
      id: 3,
      image: "/img/auth3.jpg",
      title: "Advanced Course of Stock Market",
      description: "Master advanced stock market strategies with Danish Sir.",
      // subDescription: "Additional details for card 3.",
      buttonText: "Learn More",
    },
    {
      id: 4,
      image: "/img/auth3.jpg",
      title: "A Complete Course Bundle (Beginner + Intermediate + Advance)",
      description: "Learn everything about the stock market in one comprehensive course.",
      // subDescription: "Additional details for card 4.",
      buttonText: "Learn More",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < cards.length - 2 ? prevIndex + 1 : 0
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : cards.length - 2
    );
  };

  // Autoplay functionality
  useEffect(() => {
    const interval = setInterval(handleNext, 3000); // Slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative  bg-primary w-full max-w-full  mx-auto  pb-6 overflow-hidden">
      {/* Section Title */}
      <h2 className="lg:text-[6em] text-6xl p-4 font-bold  text-white font-serif  mb-6 lg:pl-24 lg:text-start text-center">

          Cour<span className=" text-yellow-500">se</span>
       
      </h2>

      {/* Slider Container */}
      <div
        className="flex max-w-6xl transition-transform duration-500"
        style={{
          transform: `translateX(-${currentIndex * 50}%)`,
        }}
      >
        {cards.map((card) => (
          <div
            key={card.id}
            className="w-1/2 sm:w-1/2 lg:w-2/3 xl:w-3/4 flex-shrink-0 px-4"
            style={{ flexBasis: "50%" }} // Adjusted for large screens
          >
            <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col sm:flex-row">
              
              {/* Right Content */}
              <div className="w-full sm:w-1/2 p-4 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{card.description}</p>
                  <p className="text-gray-500 mt-1">{card.subDescription}</p>
                </div>
               <Link to='/Courses'>
               <button className="mt-4 px-4 py-2  bg-primary text-white font-semibold rounded-md hover:bg-green-600 transition duration-300">
                  {card.buttonText}
                </button>
               </Link>
              </div>
              {/*  */}
              {/* Left Image */}
              <div className="w-full sm:w-1/2  p-2  h-full ">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4">
        <button
          onClick={handlePrev}
          className="hidden sm:block px-4 py-2 bg-yellow-500 text-white font-bold rounded-full shadow-md hover:bg-yellow-600 transition duration-300"
        >
          &#8592; Prev
        </button>
        <button
          onClick={handleNext}
          className="hidden sm:block px-4 py-2 bg-yellow-500 text-white font-bold rounded-full shadow-md hover:bg-yellow-600 transition duration-300"
        >
          Next &#8594;
        </button>
      </div>
    </section>
  );
};

export default Slider;

























