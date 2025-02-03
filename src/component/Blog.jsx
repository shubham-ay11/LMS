import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import Navbar from './Navbar';
import Footer from './pages/Footer';
import TopSlider from './TopSlider'
import Faq from './pages/Faq';

function Blog() {
  return (
    <>
    <TopSlider/>
    <Navbar/>
    <div className="flex flex-wrap gap-8 justify-center p-8">
      {/* Card 1 */}
      <div className="group cursor-pointer bg-white bg-opacity-10 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 w-80 h-96">
        <div className="relative">
          <img
            loading="lazy"
            width="500"
            height="500"
            className="w-full h-48 object-cover"
           
             src="/img/bl2.png"
            alt="Blog Image 1"
          />
        </div>
        <div className="p-4 lg:p-6 md:p-6 text-white mb-4 group-hover:text-yellow-400">
          <h3 className="text-sm md:text-lg lg:text-xl transition-colors">
            How to Master Trading
          </h3>
          <p className="text-gray-400 mb-4 line-clamp-2 overflow-hidden text-ellipsis">
            Master the art of trading with these tips and tricks that help you achieve consistency and profitability.
          </p>
          <div className="flex items-center justify-between">
            <Link to="/blog/1" className="text-sm md:text-lg lg:text-lg flex items-center">
              Read More
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="group cursor-pointer bg-white bg-opacity-10 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 w-80 h-96">
        <div className="relative">
          <img
            loading="lazy"
            width="500"
            height="500"
            className="w-full h-48 object-cover"
           
            src="/img/bl3.jpg"

            alt="Blog Image 2"
          />
        </div>
        <div className="p-4 lg:p-6 md:p-6 text-white mb-4 group-hover:text-yellow-400">
          <h3 className="text-sm md:text-lg lg:text-xl transition-colors">
            How to Become a Profitable and Professional Trader
          </h3>
          <p className="text-gray-400 mb-4 line-clamp-2 overflow-hidden text-ellipsis">
            Learn the secrets to becoming a successful trader and turn your passion into a profession with these actionable steps.
          </p>
          <div className="flex items-center justify-between">
            <Link to="/blog/2" className="text-sm md:text-lg lg:text-lg flex items-center">
              Read More
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="group cursor-pointer bg-white bg-opacity-10 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 w-80 h-96">
        <div className="relative">
          <img
            loading="lazy"
            width="500"
            height="500"
            className="w-full h-48 object-cover"
             src="/img/bl1.jpg"
            alt="Blog Image 3"
          />
        </div>
        <div className="p-4 lg:p-6 md:p-6 text-white mb-4 group-hover:text-yellow-400">
          <h3 className="text-sm md:text-lg lg:text-xl transition-colors">
            How to Start Trading from Scratch
          </h3>
          <p className="text-gray-400 mb-4 line-clamp-2 overflow-hidden text-ellipsis">
            If you're a beginner, this guide will walk you through the essentials of getting started with trading.
          </p>
          <div className="flex items-center justify-between">
            <Link to="/blog/3" className="text-sm md:text-lg lg:text-lg flex items-center">
              Read More
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
    <Faq/>
    <Footer/>
   </>
  );
}

export default Blog;
