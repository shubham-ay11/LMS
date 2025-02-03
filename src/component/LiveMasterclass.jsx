import React from 'react'
import Footer from './pages/Footer';
import Navbar from './Navbar';
import TopSlider from './TopSlider'


function LiveMasterclass() {
    return (
        <>
        <TopSlider/>
        <Navbar/>
        <div className="min-h-screen  py-12 px-6">
          <div className="max-w-6xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-12">
              <h1 className="text-5xl font-extrabold text-yellow-500 mb-4">
                BSE Certified Live Mentorship Program
              </h1>
              <p className="text-lg text-gray-300 mb-8">
                Join StockTutor's Live Mentorship to elevate your financial knowledge with expert-led sessions on stock market fundamentals and advanced strategies.
              </p>
    
              {/* Enroll Now Button */}
              <button className="px-8 py-3 bg-yellow-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-yellow-600 transition duration-300">
                Enroll Now
              </button>
            </div>
    
            {/* Program Info */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6  border-2 border-yellow-500 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-yellow-500">Program Details</h2>
                <p className="mt-4 text-lg text-gray-300">
                  Elevate your financial knowledge with expert-led sessions that focus on both the basics of stock trading and advanced strategies to make consistent profits.
                </p>
                <div className="mt-6">
                  <p className="text-lg font-semibold text-gray-300">Date: <span className="text-yellow-500">25th October</span></p>
                  <p className="text-lg font-semibold text-gray-300">Period: <span className="text-yellow-500">3 Months</span></p>
                  <p className="text-lg font-semibold text-gray-300">Mode: <span className="text-yellow-500">Hybrid</span></p>
                </div>
              </div>
    
              {/* Key Stats Section */}
              <div className=" border-2 border-yellow-500 rounded-lg shadow-lg p-6">
                <h2 className="text-3xl font-bold text-yellow-500">Program Highlights</h2>
                <ul className="mt-6 space-y-4">
                  <li className="text-lg text-gray-300">
                    <span className="font-semibold text-yellow-500">20k+</span> Students enrolled in the previous batch
                  </li>
                  <li className="text-lg text-gray-300">
                    <span className="font-semibold text-yellow-500">18k+</span> Students made a profit of at least 1 Lac
                  </li>
                  <li className="text-lg text-gray-300">
                    <span className="font-semibold text-yellow-500">8+</span> Faculties will teach smart ways to make money
                  </li>
                </ul>
              </div>
            </div>
    
            {/* Brochure Section */}
            <div className="mt-12 text-center">
              <button className="px-8 py-3 bg-yellow-500  text-primary text-lg font-semibold rounded-lg shadow-lg hover:bg-yellow-600 transition duration-300">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
        <Footer/>
        </>
      );
    };
export default LiveMasterclass
