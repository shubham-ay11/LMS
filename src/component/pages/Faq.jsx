


// import React, { useState } from 'react';




// function Faq() {
//   const [open, setOpen] = useState(null);

//   const toggleFAQ = (index) => {
//     setOpen(open === index ? null : index);
//   };

//   const faqs = [
//     {
//       question: "Q: What is FIT ESPER?",
//       answer: "Ans: FIT ESPER is a platform designed to help you achieve your fitness goals with expert guidance and resources."
//     },
//     {
//       question: "Q: How can I join?",
//       answer: "Ans: You can join by signing up on our website and choosing a membership plan that suits your needs."
//     },
//     {
//       question: "Q: What services do you offer?",
//       answer: "Ans: We offer personalized fitness plans, diet consultations, and a community of like-minded individuals to keep you motivated."
//     }
//   ];

//   return (
//   <div>
//       <div className="p-6 mt-24 font-[Archivo]">
//       <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-12">
//         {/* Main Image and Text */}
//         <div className="relative md:flex-1 text-center md:text-left">
//           {/* <h2 className="  absolute inset-0 bottom-[600px] lg:left-32 text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] font-extrabold text-black leading-tight flex items-center justify-center md:justify-start">
//             <span>Query</span>
//             <span className=" text-yellow-500">ESPER</span>
//             <img src={titleimg} alt="Title" className="ml-2 w-10 sm:w-12 md:w-14" />
//           </h2> */}
//           <img
//             src='/img/comp.png'
//             alt="Image description"
//             loading="lazy"
//             title="Load"
//             className="relative w-full max-w-xs mx-auto md:max-w-md"
//           />
//         </div>

//         {/* FAQ Section */}
//         <div className="w-full md:flex-1 p-6 flex flex-col items-center md:items-start md:text-left text-center">
//           <h3 className="text-xl font-bold text-white mb-2">FAQs</h3>
//           <h3 className="text-3xl font-bold   text-yellow-500 mb-2">Frequently Asked Questions</h3>
//           <h3 className="text-white mb-6">Welcome to Your Fitness Journey: Your Go-To Guide for Gym FAQs!</h3>
//           <div className="space-y-4 w-full">
//             {faqs.map((faq, index) => (
//               <div key={index} className="border-b pb-4 w-full">
//                 <button
//                   onClick={() => toggleFAQ(index)}
//                   className="flex justify-between items-center w-full text-left text-lg  text-yellow-500 bg-black p-2 rounded-md focus:outline-none"
//                 >
//                   <span>{faq.question}</span>
//                   <span className="ml-2">{open === index ? '-' : '+'}</span>
//                 </button>
//                 {open === index && (
//                   <p className="mt-2 bg-black rounded-md p-2 text-yellow-500">
//                     {faq.answer}
//                   </p>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>

  
//   </div>
//   );
// }

// export default Faq;





import React, { useState, useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

function Faq() {
  const [open, setOpen] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 50,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const toggleFAQ = (index) => {
    setOpen(open === index ? null : index);
  };

  const faqs = [
    {
      question: "01) How does Stock Upp help us?",
      answer: "Ans: A Stock Upp individuals gain the knowledge and skills needed to navigate the world of investing and trading confidently. It provides comprehensive resources like courses, Marketing strategies, and analysis and financial analysis 																									"
    },
    {
      question: "02) How many years of experience does a Stock Upp have in Trading and Investing? ",
      answer: "Ans: Stock Upp team has gained 10+ years of hands-on experience in stock the market, With a deep understanding of market cycles and trends."
    },
    {
      question: "03) Does Stock Upp provides any types of special courses?",
      answer: "Ans: stock Upp provides the facilities of One-to-one mentorship and personalized guidance and It fosters a supportive environment where mentees can ask questions, receive constructive feedback, and gain insights drawn from the mentor’s experience. This individualized attention accelerates learning, builds confidence, and enhances skills more effectively than generalized training methods."
    }
  ];

  return (
    <div className="p-6 mt-24 font-[Archivo]">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-12">
        {/* Main Image and Text */}
        <div
          className="relative md:flex-1 text-center md:text-left"
          data-aos="fade-up"
        >
          <img
            src="/img/comp.png"
            alt="Image description"
            loading="lazy"
            title="Load"
            className="relative w-full max-w-xs mx-auto md:max-w-md"
          />
        </div>

        {/* FAQ Section */}
        <div
          className="w-full md:flex-1 p-6 flex flex-col items-center md:items-start md:text-left text-center"
          data-aos="fade-right"
        >
          <h3 className="text-xl font-bold text-white mb-2">FAQs</h3>
          <h3 className="text-3xl font-bold text-yellow-500 mb-2">
            Frequently Asked Questions
          </h3>
          {/* <h3 className="text-white mb-6">
            Welcome to Your Fitness Journey: Your Go-To Guide for Gym FAQs!
          </h3> */}
          <div className="space-y-4 w-full">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b pb-4 w-full"
                data-aos="fade-up"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex justify-between items-center w-full text-left text-lg text-yellow-500 bg-black p-2 rounded-md focus:outline-none"
                >
                  <span>{faq.question}</span>
                  <span className="ml-2">{open === index ? '-' : '+'}</span>
                </button>
                {open === index && (
                  <p className="mt-2 bg-black rounded-md p-2 text-yellow-500">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
