// import React from "react";
// import Navbar from "./Navbar";

// function Courses() {
//   const courses = [
//     {
//       id: 1,
//       title: "Stock Market Investing Bootcamp By Udit Sir",
//       description:
//         "This bootcamp provides a comprehensive grasp of investing methods, market dynamics, and portfolio management, to equip students with long-term investment skills.",
//         image: '/img/stock1.jpg',
//       borderColor: "rgb(71, 208, 200)",
//       gradientStart: "rgb(87, 255, 245)",
//       gradientEnd: "rgb(37, 108, 103)",
//     },
//     {
//       id: 2,
//       title: "Intermediate Stock Market Course By Udit Sir",
//       description:
//         "Dive deeper into stock trading strategies, learn risk management, and take your knowledge to an intermediate level.",
//         image: '/img/stock1.jpg',
//       borderColor: "rgb(243, 146, 0)",
//       gradientStart: "rgb(250, 197, 123)",
//       gradientEnd: "rgb(194, 91, 0)",
//     },
//     {
//       id: 3,
//       title: "Advanced Stock Trading Masterclass By Udit Sir",
//       description:
//         "Learn advanced trading strategies, algorithmic trading, and master the art of high-risk investments.",
//         image: '/img/stock1.jpg',
//       borderColor: "rgb(255, 99, 132)",
//       gradientStart: "rgb(255, 172, 186)",
//       gradientEnd: "rgb(161, 26, 57)",
//     },
//     {
//         id: 4,
//         title: 'A Complete Course Bundle (Beginner + Intermediate + Advance)',
//         description:
//           'Learn everything about the stock market in one comprehensive course. Duration: 1 month.',
//         image: '/img/stock1.jpg',
//         price: { original: '₹22,000', discounted: '₹17,999' },
//         borderColor: 'rgb(33, 150, 243)',  // Blue border
//         gradientStart: 'rgb(100, 181, 246)',  // Light blue start gradient
//         gradientEnd: 'rgb(21, 101, 192)',  // Dark blue end gradient
//         buttonColor: 'bg-blue-500',  // Blue button
//       },
//   ];

//   return (
//     <>
//     <Navbar/>
//     <div className=" min-h-screen py-10 px-12">
//       <div className="container mx-auto px-4">
//       <h2 className="lg:text-[6em] text-6xl p-4 font-bold  text-white font-serif  mb-6 lg:pl-24 lg:text-start text-center">

// Cour<span className=" text-yellow-500">se</span>

// </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {courses.map((course) => (
//             <div
//               key={course.id}
//               className="max-w-fit p-4 border-2 rounded-lg shadow-md"
//               style={{ borderColor: course.borderColor }}
//             >
//               <div className="flex flex-col space-y-2">
//                 <h2
//                   className="text-xl font-bold"
//                   style={{
//                     backgroundImage: `linear-gradient(${course.gradientStart}, ${course.gradientEnd})`,
//                     WebkitBackgroundClip: "text",
//                     WebkitTextFillColor: "transparent",
//                   }}
//                 >
//                   {course.title}
//                 </h2>
//                 <p className="text-gray-300">{course.description}</p>
//               </div>
//               <div className="mt-4 flex justify-between items-center">
//                 <a href="/course-details">
//                   <button
//                     className="px-4 py-2 rounded-md text-white text-sm font-medium"
//                     style={{
//                       border: `2px solid ${course.borderColor}`,
//                       backgroundColor: course.borderColor,
//                     }}
//                   >
//                     Explore
//                   </button>
//                 </a>
//                 <img
//                   src={course.image}
//                   alt="Course Cover"
//                   className="w-24 h-24 rounded-md object-cover"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//     </>
//   );
// }

// export default Courses;








































// import React from 'react';
// import { Link } from 'react-router-dom';
// import Footer from './pages/Footer';
// import Navbar from './Navbar';
// import TopSlider from './TopSlider'

// const courses = [
//   {
//     id: 1,
//     title: 'A Complete Beginner Course of Stock Market',
//     description: 'Learn the fundamentals of the stock market with Danish Sir.',
//     price: { original: '₹5,999', discounted: '₹3,499' },
//     image: '/img/auth2.jpg',
//     borderColor: 'rgb(71, 208, 200)', // Light Teal border
//     gradientStart: 'rgb(87, 255, 245)', // Light Teal gradient start
//     gradientEnd: 'rgb(37, 108, 103)', // Dark Teal gradient end
//     buttonColor: 'bg-teal-500', // Teal button color
//   },
//   {
//     id: 2,
//     title: 'Intermediate Course of Stock Market',
//     description: 'Take your stock market skills to the next level with Danish Sir.',
//     price: { original: '₹7,999', discounted: '₹5,999' },
//     image: '/img/auth2.jpg',
//     borderColor: 'rgb(243, 146, 0)', // Orange border
//     gradientStart: 'rgb(250, 197, 123)', // Light Orange gradient start
//     gradientEnd: 'rgb(194, 91, 0)', // Dark Orange gradient end
//     buttonColor: 'bg-orange-500', // Orange button color
//   },
//   {
//     id: 3,
//     title: 'Advanced Course of Stock Market',
//     description: 'Master advanced stock market strategies with Danish Sir.',
//     price: { original: '₹13,999', discounted: '₹9,999' },
//     image: '/img/auth2.jpg',
//     borderColor: 'rgb(255, 99, 132)', // Red border
//     gradientStart: 'rgb(255, 172, 186)', // Light Red gradient start
//     gradientEnd: 'rgb(161, 26, 57)', // Dark Red gradient end
//     buttonColor: 'bg-red-500', // Red button color
//   },
//   {
//     id: 4,
//     title: 'A Complete Course Bundle (Beginner + Intermediate + Advance)',
//     description: 'Learn everything about the stock market in one comprehensive course.',
//     price: { original: '₹22,000', discounted: '₹17,999' },
//     image: '/img/auth2.jpg',
//     borderColor: 'rgb(33, 150, 243)', // Blue border
//     gradientStart: 'rgb(100, 181, 246)', // Light Blue gradient start
//     gradientEnd: 'rgb(21, 101, 192)', // Dark Blue gradient end
//     buttonColor: 'bg-blue-500', // Blue button color
//   },
//   {
//     id: 5,
//     title: 'Technical Analysis ',
//     description: 'coming soon...',
//     // price: { original: '₹5,999', discounted: '₹3,499' },
//     image: '/img/auth2.jpg',
//     borderColor: 'rgb(71, 208, 200)', // Light Teal border
//     gradientStart: 'rgb(87, 255, 245)', // Light Teal gradient start
//     gradientEnd: 'rgb(37, 108, 103)', // Dark Teal gradient end
//     buttonColor: 'bg-teal-500', // Teal button color
//   },
//   {
//     id: 6,
//     title: 'Dedicated SMC Course',
//     description: 'coming soon...',
//     // price: { original: '₹7,999', discounted: '₹5,999' },
//     image: '/img/auth2.jpg',
//     borderColor: 'rgb(243, 146, 0)', // Orange border
//     gradientStart: 'rgb(250, 197, 123)', // Light Orange gradient start
//     gradientEnd: 'rgb(194, 91, 0)', // Dark Orange gradient end
//     buttonColor: 'bg-orange-500', // Orange button color
//   },
//   {
//     id: 7,
//     title: 'Complete option buying course ',
//     description: 'coming soon...',
//     // price: { original: '₹13,999', discounted: '₹9,999' },
//     image: '/img/auth2.jpg',
//     borderColor: 'rgb(255, 99, 132)', // Red border
//     gradientStart: 'rgb(255, 172, 186)', // Light Red gradient start
//     gradientEnd: 'rgb(161, 26, 57)', // Dark Red gradient end
//     buttonColor: 'bg-red-500', // Red button color
//   },
//   {
//     id: 8,
//     title: 'A Dedicated Option Selling Course ',
//     description: 'coming soon...',
//     // price: { original: '₹22,000', discounted: '₹17,999' },
//     image: '/img/auth2.jpg',
//     borderColor: 'rgb(33, 150, 243)', // Blue border
//     gradientStart: 'rgb(100, 181, 246)', // Light Blue gradient start
//     gradientEnd: 'rgb(21, 101, 192)', // Dark Blue gradient end
//     buttonColor: 'bg-blue-500', // Blue button color
//   },
//   {
//     id: 9,
//     title: 'Complete leadership program course  ',
//     description: 'coming soon...',
//     // price: { original: '₹13,999', discounted: '₹9,999' },
//     image: '/img/auth2.jpg',
//     borderColor: 'rgb(255, 99, 132)', // Red border
//     gradientStart: 'rgb(255, 172, 186)', // Light Red gradient start
//     gradientEnd: 'rgb(161, 26, 57)', // Dark Red gradient end
//     buttonColor: 'bg-red-500', // Red button color
//   },
// ];

// const CoursesPage = () => {
//   return (
//     <>
//     <TopSlider/>
//     <Navbar/>
//     <div className="min-h-screen py-10 px-12">
//       <div className="container mx-auto px-4">
//         <h2 className="lg:text-[6em] text-6xl p-4 font-bold text-white font-serif mb-6 lg:pl-24 lg:text-start text-center">
//           Cour<span className="text-yellow-500">se</span>
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {courses.map((course) => (
//             <div
//               key={course.id}
//               className="max-w-fit p-4 border-2 rounded-lg shadow-md"
//               style={{ borderColor: course.borderColor }}
//             >
//               <div className="flex flex-col space-y-2">
//                 <h2
//                   className="text-xl font-bold"
//                   style={{
//                     backgroundImage: `linear-gradient(${course.gradientStart}, ${course.gradientEnd})`,
//                     WebkitBackgroundClip: 'text',
//                     WebkitTextFillColor: 'transparent',
//                   }}
//                 >
//                   {course.title}
//                 </h2>
//                 <p className="text-gray-300">{course.description}</p>
//               </div>
//               <div className="mt-4 flex justify-between items-center">
//                 <Link to={`/course-details/${course.id}`}>
//                   <button
//                     className="px-4 py-2 rounded-md text-white text-sm font-medium"
//                     style={{
//                       border: `2px solid ${course.borderColor}`,
//                       backgroundColor: course.buttonColor,
//                     }}
//                   >
//                     Explore
//                   </button>
//                 </Link>
//                 <img
//                   src={course.image}
//                   alt="Course Cover"
//                   className="w-24 h-24 rounded-md object-cover"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//     <Footer/>
//     </>
//   );
// };

// export default CoursesPage;














































































import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './pages/Footer';
import Navbar from './Navbar';
import TopSlider from './TopSlider'

const courses = [
  {
    id: 1,
    title: 'A Complete Beginner Course of Stock Market',
    description: 'Learn the fundamentals of the stock market with Danish Sir.',
    price: { original: '₹5,999', discounted: '₹3,499' },
    image: '/img/auth2.jpg',
    borderColor: 'rgb(71, 208, 200)', // Light Teal border
    gradientStart: 'rgb(87, 255, 245)', // Light Teal gradient start
    gradientEnd: 'rgb(37, 108, 103)', // Dark Teal gradient end
    buttonColor: 'bg-teal-500', // Teal button color
  },
  {
    id: 2,
    title: 'Intermediate Course of Stock Market',
    description: 'Take your stock market skills to the next level with Danish Sir.',
    price: { original: '₹7,999', discounted: '₹5,999' },
    image: '/img/auth2.jpg',
    borderColor: 'rgb(243, 146, 0)', // Orange border
    gradientStart: 'rgb(250, 197, 123)', // Light Orange gradient start
    gradientEnd: 'rgb(194, 91, 0)', // Dark Orange gradient end
    buttonColor: 'bg-orange-500', // Orange button color
  },
  {
    id: 3,
    title: 'Advanced Course of Stock Market',
    description: 'Master advanced stock market strategies with Danish Sir.',
    price: { original: '₹13,999', discounted: '₹9,999' },
    image: '/img/auth2.jpg',
    borderColor: 'rgb(255, 99, 132)', // Red border
    gradientStart: 'rgb(255, 172, 186)', // Light Red gradient start
    gradientEnd: 'rgb(161, 26, 57)', // Dark Red gradient end
    buttonColor: 'bg-red-500', // Red button color
  },
  {
    id: 4,
    title: 'A Complete Course Bundle (Beginner + Intermediate + Advance)',
    description: 'Learn everything about the stock market in one comprehensive course.',
    price: { original: '₹22,000', discounted: '₹17,999' },
    image: '/img/auth2.jpg',
    borderColor: 'rgb(33, 150, 243)', // Blue border
    gradientStart: 'rgb(100, 181, 246)', // Light Blue gradient start
    gradientEnd: 'rgb(21, 101, 192)', // Dark Blue gradient end
    buttonColor: 'bg-blue-500', // Blue button color
  },
  {
    id: 5,
    title: 'Technical Analysis ',
    description: 'coming soon...',
    // price: { original: '₹5,999', discounted: '₹3,499' },
    image: '/img/auth2.jpg',
    borderColor: 'rgb(71, 208, 200)', // Light Teal border
    gradientStart: 'rgb(87, 255, 245)', // Light Teal gradient start
    gradientEnd: 'rgb(37, 108, 103)', // Dark Teal gradient end
    buttonColor: 'bg-teal-500', // Teal button color
  },
  {
    id: 6,
    title: 'Dedicated SMC Course',
    description: 'coming soon...',
    // price: { original: '₹7,999', discounted: '₹5,999' },
    image: '/img/auth2.jpg',
    borderColor: 'rgb(243, 146, 0)', // Orange border
    gradientStart: 'rgb(250, 197, 123)', // Light Orange gradient start
    gradientEnd: 'rgb(194, 91, 0)', // Dark Orange gradient end
    buttonColor: 'bg-orange-500', // Orange button color
  },
  {
    id: 7,
    title: 'Complete option buying course ',
    description: 'coming soon...',
    // price: { original: '₹13,999', discounted: '₹9,999' },
    image: '/img/auth2.jpg',
    borderColor: 'rgb(255, 99, 132)', // Red border
    gradientStart: 'rgb(255, 172, 186)', // Light Red gradient start
    gradientEnd: 'rgb(161, 26, 57)', // Dark Red gradient end
    buttonColor: 'bg-red-500', // Red button color
  },
  {
    id: 8,
    title: 'A Dedicated Option Selling Course ',
    description: 'coming soon...',
    // price: { original: '₹22,000', discounted: '₹17,999' },
    image: '/img/auth2.jpg',
    borderColor: 'rgb(33, 150, 243)', // Blue border
    gradientStart: 'rgb(100, 181, 246)', // Light Blue gradient start
    gradientEnd: 'rgb(21, 101, 192)', // Dark Blue gradient end
    buttonColor: 'bg-blue-500', // Blue button color
  },
  {
    id: 9,
    title: 'Complete leadership program course  ',
    description: 'coming soon...',
    // price: { original: '₹13,999', discounted: '₹9,999' },
    image: '/img/auth2.jpg',
    borderColor: 'rgb(255, 99, 132)', // Red border
    gradientStart: 'rgb(255, 172, 186)', // Light Red gradient start
    gradientEnd: 'rgb(161, 26, 57)', // Dark Red gradient end
    buttonColor: 'bg-red-500', // Red button color
  },
];

const CoursesPage = () => {
  return (
    <>
    <TopSlider/>
    <Navbar/>
    <div className="min-h-screen py-10 px-12">
      <div className="container mx-auto px-4">
        <h2 className="lg:text-[6em] text-6xl p-4 font-bold text-white font-serif mb-6 lg:pl-24 lg:text-start text-center">
          Cour<span className="text-yellow-500">se</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {courses.map((course) => (
    <div
      key={course.id}
      className="w-full max-w-sm mx-auto p-4 border-2 rounded-lg shadow-md"
      style={{ borderColor: course.borderColor }}
    >
      <div className="flex flex-col space-y-2">
        <h2
          className="text-xl font-bold"
          style={{
            backgroundImage: `linear-gradient(${course.gradientStart}, ${course.gradientEnd})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {course.title}
        </h2>
        <p className="text-gray-300">{course.description}</p>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <Link to={`/course-details/${course.id}`}>
          <button
            className="px-4 py-2 rounded-md text-white text-sm font-medium"
            style={{
              border: `2px solid ${course.borderColor}`,
              backgroundColor: course.buttonColor,
            }}
          >
            Explore
          </button>
        </Link>
        <img
          src={course.image}
          alt="Course Cover"
          className="w-24 h-24 rounded-md object-cover"
        />
      </div>
    </div>
  ))}
</div>

      </div>
    </div>
    <Footer/>
    </>
  );
};

export default CoursesPage;
