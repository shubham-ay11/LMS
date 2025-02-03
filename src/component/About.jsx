import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './pages/Footer';
import Navbar from './Navbar';
// import Faq from './pages/Faq';
import TopSlider from './TopSlider'
import Blog from '../component/pages/Blog';


const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });  // Initialize AOS for animations
  }, []);

  return (
    <>
    <TopSlider/>
    <Navbar/>
    <div className="min-h-screen  py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* About Section */}
        <div className="text-center mb-12" data-aos="fade-up">
         
          <h2 className="lg:text-[6em]  text-6xl p-4 font-bold  text-white  font-serif  mb-6 lg:pl-24  text-center">

          About <span className=" text-yellow-500">Us</span>

</h2>
          <p className="text-lg text-start text-gray-200 mb-6">
            The aim of <span className="text-yellow-500 font-bold">Stock Upp</span> is to empower individuals with the knowledge and skills necessary to navigate the financial markets confidently and responsibly. We provide comprehensive, accessible, and engaging resources tailored to various learning levels, from beginners to advanced traders. By simplifying complex concepts, offering real-world examples, and incorporating interactive tools such as simulations and quizzes, we foster a practical understanding of investment strategies, risk management, and market dynamics.
          </p>
          <p className="text-lg text-gray-300">
            Ultimately, our platform equips users to make informed financial decisions, grow their wealth sustainably, and contribute to their long-term financial literacy and independence.
          </p>
        </div>

   {/* add text */}
<Blog/>
{/* contact */}
       <div className="p-6     mx-auto">
      <h2 className="text-2xl font-bold text-yellow-500 mb-4">Contact Details</h2>
      <div className="space-y-4">
        <div className=" p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-secondary">Registered Office</h3>
          <p className="text-gray-300">
            C-1272, Second Floor, J.J. Colony, Madanpur Khadar, Sarita Vihar, <br />
            <span className="font-semibold">DELHI - 110076</span>
          </p>
        </div>
        <div className=" p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-secondary">Contact no:</h3>
          <p className="text-gray-300">Mobile No: <span className="font-semibold">+918851729915</span></p>
        </div>
        <div className=" p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-secondary">Email Address:</h3>
          <p className="text-gray-300">Email: <span className="font-semibold">Contact@stockupp.in</span></p>
        </div>
      </div>
    </div> 
      </div>
    </div>
    {/* <Faq/> */}
    <Footer/>
    </>
  );
};

export default About;
