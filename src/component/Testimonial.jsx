import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiUser } from "react-icons/fi";

function Testimonial() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const testimonials = [
   
    {
      name: "Rupinder Maan Films",
      experience:
        "I reached my goal very quickly, a lot quicker than I had expected. I owe a tremendous amount of credit to Mohd. Danish Sir for challenging me, providing support, his positivity, and accessibility.",
    },
    {
      name: "Sukhchain Singh",
      experience:
        "Danish Sir is very humble and teaches very well. Thank you, sir!",
    },
    {
      name: "Shiv Shambu",
      experience:
        "A very good evening Danish Sir! Yesterday's session was mind-blowing and awesome, easily understood, and simply elaborated in simple ways.",
    },
    {
        name: "Sakshi Sharma",
        experience:
          "I had the privilege of being taught by Mohammad Danish sir, and I can confidently say that they are one of the best educators I've ever had. Their teaching methods are clear, engaging, and tailored to ensure every student understands the material. He goes above and beyond to provide support and create a positive learning environment where everyone feels comfortable asking questions. Thanks to Danish sir's dedication, I have improved significantly in trading and I feel much more confident in my abilities. I highly recommend Danish sir to anyone looking for an outstanding mentor.",
      },
  ];

  return (
    <div className="text-white min-h-screen py-12 ">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className=" lg:text-[6em] text-4xl  p-4 font-bold text-white font-serif lg:mb-24 mb-6 lg:pl-24 text-center">
          Testimon<span className="text-yellow-500">ials</span>
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="border-2  border-secondary rounded-2xl shadow-lg p-8 text-center space-y-4 "
              data-aos="fade-up"
            >
              <div className="w-24 h-24 mx-auto rounded-full  flex items-center justify-center border-4 border-yellow-400">
                <FiUser className="text-yellow-400 text-5xl" />
              </div>
              <h3 className="text-xl font-bold text-yellow-400">
                {testimonial.name}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {testimonial.experience}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
