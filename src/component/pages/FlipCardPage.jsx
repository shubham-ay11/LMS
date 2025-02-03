// import React from "react";
// import "./FlipCardPage.css"; // Import the custom CSS

// const FlipCardPage = () => {
//   const cards = [
//     {
//       id: 1,
//       image: "/img/boy.png",
//       title: "Card 1",
//       description: "This is the description for Card 1.",
//     },
//     {
//       id: 2,
//       image: "/img/girl1.png",
//       title: "Card 2",
//       description: "This is the description for Card 2.",
//     },
//     {
//       id: 3,
//       image: "/img/boy.png",
//       title: "Card 3",
//       description: "This is the description for Card 3.",
//     },
//     {
//       id: 4,
//       image: "/img/girl1.png",
//       title: "Card 4",
//       description: "This is the description for Card 4.",
//     },
//   ];

//   return (
//     <div
//     className="h-screen w-full flex items-center justify-center bg-cover bg-center"
//     style={{
//       backgroundImage: "url('/img/boy.png')", // Replace with your image
//       backgroundBlendMode: "overlay",
//     }}
//   >
//     <div className="flex flex-col lg:flex-row justify-between items-center min-h-screen bg-gray-100 p-12">
//       {/* Cards Section (Left) */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:w-[50%]">
//         {cards.map((card) => (
//           <div key={card.id} className="flip-card">
//             <div className="flip-card-inner">
//               {/* Front Side */}
//               <div className="flip-card-front">
//                 <img
//                   src={card.image}
//                   alt={card.title}
//                   className="w-full h-full object-cover rounded-lg"
//                 />
//               </div>
//               {/* Back Side */}
//               <div className="flip-card-back">
//                 <p className="title">{card.title}</p>
//                 <p>{card.description}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Text Section (Right) */}
//       <div className="mt-12 text-primary lg:mt-0  flex font-serif justify-center items-center">
//         <h2 className="text-4xl md:text-[4em] font-extrabold text-center     ">
//           WE'RE THE ONLY ONE
//         </h2>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default FlipCardPage;









// import React from "react";
// import "./FlipCardPage.css"; // Import the custom CSS

// const FlipCardPage = () => {
//   const cards = [
//     {
//       id: 1,
//       image: "/img/boy.png",
//       title: "Card 1",
//       description: "This is the description for Card 1.",
//     },
//     {
//       id: 2,
//       image: "/img/girl1.png",
//       title: "Card 2",
//       description: "This is the description for Card 2.",
//     },
//     {
//       id: 3,
//       image: "/img/boy.png",
//       title: "Card 3",
//       description: "This is the description for Card 3.",
//     },
//     {
//       id: 4,
//       image: "/img/girl1.png",
//       title: "Card 4",
//       description: "This is the description for Card 4.",
//     },
//   ];

//   return (
  
//     <div className="flex flex-col lg:flex-row justify-between items-center min-h-screen bg-gray-100 p-12 ">
//       {/* Cards Section (Left) */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:w-[50%]">
//         {cards.map((card) => (
//           <div key={card.id} className="flip-card">
//             <div className="flip-card-inner">
//               {/* Front Side */}
//               <div className="flip-card-front">
//                 <img
//                   src={card.image}
//                   alt={card.title}
//                   className="w-full h-full object-cover rounded-lg"
//                 />
//               </div>
//               {/* Back Side */}
//               <div className="flip-card-back">
//                 <p className="title">{card.title}</p>
//                 <p>{card.description}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Text Section (Right) */}
//       <div
      
//        className="mt-12 text-primary lg:mt-0  flex font-serif justify-center items-center">
//         <h2 className="text-6xl md:text-[6em] font-extrabold text-center     ">
//           WE'RE THE ONLY ONE
//         </h2>
//       </div>
//     </div>
   
//   );
// };

// export default FlipCardPage;


















import React from "react";
import "./FlipCardPage.css"; // Import the custom CSS

const FlipCardPage = () => {
  const cards = [
    {
      id: 1,
      image: "/img/boy.png",
      title: "Card 1",
      description: "This is the description for Card 1.",
    },
    {
      id: 2,
      image: "/img/girl1.png",
      title: "Card 2",
      description: "This is the description for Card 2.",
    },
    {
      id: 3,
      image: "/img/boy.png",
      title: "Card 3",
      description: "This is the description for Card 3.",
    },
    {
      id: 4,
      image: "/img/girl1.png",
      title: "Card 4",
      description: "This is the description for Card 4.",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center min-h-screen bg-gray-100 p-12">
      {/* Cards Section (Left) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:w-[50%]">
        {cards.map((card) => (
          <div key={card.id} className="flip-card">
            <div className="flip-card-inner">
              {/* Front Side */}
              <div className="flip-card-front">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              {/* Back Side */}
              <div className="flip-card-back">
                <p className="title">{card.title}</p>
                <p>{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Text Section (Right) */}
      <div
        className="mt-12 text-primary lg:mt-0 flex font-serif justify-center items-center relative w-[50%] h-[300px]"
        style={{
          backgroundImage: "url('/img/circle.png')",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h2 className="text-6xl md:text-[6em] font-extrabold text-center z-10">
          WE'RE THE ONLY ONE
        </h2>
      </div>
    </div>
  );
};

export default FlipCardPage;


