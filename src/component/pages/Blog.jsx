












// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// function Blog() {
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   return (
//     <div>
//       <div className="font-[AnekBangla] p-6">
//         <h2
//           className="lg:text-[6em] text-6xl p-4 font-bold text-white font-serif mb-6 lg:pl-24 lg:text-start text-center"
//           data-aos="fade-down"
//         >
//           Miss<span className="text-yellow-500">ion</span>
//         </h2>

//         {/* Section 1: Fitness & Training Tips */}
//         <div
//           className="flex flex-col md:flex-row justify-between items-center mb-16 space-y-8 md:space-y-0"
//           data-aos="fade-up"
//         >
//           <div className="md:w-1/2 space-y-6 px-4">
//             <h2 className="text-3xl font-bold leading-tight text-white">
//               Fitness & Training
//               <span className="text-yellow-500"> Tips</span>
//             </h2>
//             <p className="text-lg text-white">
//               Provide valuable advice and insights to help users improve their
//               workouts and achieve their fitness goals.
//             </p>
//             <p className="text-base font-[AnekBangla] text-gray-100">
//               Workout Routines: “5 Effective Full-Body Workouts You Can Do at
//               Home” or “The Ultimate Strength Training Routine for Beginners.”
//               Exercise Techniques: “How to Perfect Your Squat Form” or “Common
//               Mistakes to Avoid in Your Deadlift.” Training Programs: “How to
//               Design a Balanced Training Program for Weight Loss” or
//               “High-Intensity Interval Training (HIIT) for Maximum Results.”
//               Recovery Tips: “The Best Stretches for Post-Workout Recovery” or
//               “How to Prevent and Treat Exercise-Related Injuries.”
//             </p>
//           </div>

//           <div
//             className="md:w-1/2 flex justify-center items-center relative px-4"
//             data-aos="zoom-in"
//           >
//             <img
//               src="/img/Blob2.png"
//               alt="Background Box"
//               loading="lazy"
//               className="absolute z-0 w-80 h-80 object-contain"
//             />
//             <img
//               src="/img/girl1.png"
//               alt="Fitness Tips"
//               loading="lazy"
//               className="relative z-10 w-80 h-80 object-contain"
//             />
//           </div>
//         </div>

//         {/* Section 2: Nutrition & Wellness */}
//         <div
//           className="flex flex-col md:flex-row-reverse justify-between items-center mb-16 space-y-8 md:space-y-0"
//           data-aos="fade-left"
//         >
//           <div className="md:w-1/2 space-y-6 px-4">
//             <h2 className="text-3xl font-bold leading-tight text-white">
//               Nutrition &
//               <span className="text-yellow-500"> Wellness</span>
//             </h2>
//             <p className="text-lg text-white">
//               Educate readers on the importance of nutrition, hydration, and
//               overall wellness in achieving their fitness goals.
//             </p>
//             <p className="text-base font-[AnekBangla] text-gray-100">
//               Healthy Recipes: “10 Quick and Nutritious Post-Workout Snacks” or
//               “Easy Meal Prep Ideas for a Healthier Diet.” Nutritional Advice:
//               “How to Fuel Your Workouts: Essential Nutrients for Optimal
//               Performance” or “Understanding Macronutrients and Their Role in
//               Fitness.” Wellness Tips: “The Benefits of Proper Hydration and
//               How Much Water You Really Need” or “How to Balance Your Workouts
//               and Rest for Optimal Health.” Supplement Guides: “Do You Need
//               Supplements? A Guide to Essential Fitness Supplements” or “How to
//               Choose the Right Protein Powder for Your Goals.”
//             </p>
//           </div>

//           <div
//             className="md:w-1/2 flex justify-center items-center relative px-4"
//             data-aos="zoom-in"
//           >
//             <img
//               src="/img/Blob2.png"
//               alt="Background Box"
//               loading="lazy"
//               className="absolute z-0 w-80 h-80 object-contain"
//             />
//             <img
//               src="/img/girl1.png"
//               alt="Fitness Tips"
//               loading="lazy"
//               className="relative z-10 w-80 h-80 object-contain"
//             />
//           </div>
//         </div>

//         {/* Section 3: Community & Success Stories */}
//         <div className="text-center space-y-6 p-8" data-aos="fade-up">
//           <h2 className="text-3xl font-bold leading-tight text-white">
//             Community & Success
//             <span className="text-yellow-500"> Stories</span>
//           </h2>
//           <p className="text-base font-[AnekBangla] text-gray-100 max-w-4xl mx-auto">
//             Member Spotlights: “Meet Jane: How She Lost 30 Pounds and
//             Transformed Her Life at Our Gym” or “John’s Journey: From Couch
//             Potato to Marathon Runner.” Gym Events: “Highlights from Our Recent
//             Fitness Challenge and How Members Performed” or “Upcoming Events
//             You Don’t Want to Miss!” Success Tips: “How Our Members Achieve
//             Their Goals: Top Tips from Successful Gym Goers” or “What Keeps Our
//             Members Motivated? Insights from Our Community.” Trainer Advice:
//             “Trainer Q&A: Top Questions Answered by Our Expert Coaches” or “How
//             Our Trainers Help Members Overcome Fitness Plateaus.”
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Blog;


























import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Blog() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className=" text-white min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Mission Section */}
        <div
          className="text-center  border-2 border-y-secondary rounded-2xl shadow-lg p-10 mb-10"
          data-aos="fade-up"
        >
          <h2 className="text-4xl font-bold text-yellow-400 mb-4">
            Mission
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
          "At Stock Upp, our mission is to provide learners of all backgrounds with high-quality, accessible, and engaging educational content that fosters growth, knowledge, and empowerment. We strive to make learning flexible, personalized, and impactful by offering innovative courses, expert-led guidance, and a user-friendly platform. Our goal is to support lifelong learning by equipping individuals with the skills and tools they need to succeed in both their personal and professional lives. We are committed to creating an inclusive learning environment that encourages curiosity, enhances skills, and prepares learners for the challenges and opportunities of the future.







"
          </p>
        </div>

        {/* Vision Section */}
        <div
          className="text-center border-2 border-y-secondary rounded-2xl shadow-lg p-10"
          data-aos="fade-up"
        >
          <h2 className="text-4xl font-bold text-yellow-400 mb-4">
            Vision
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
          Stock Upp vission is to empower individuals worldwide with accessible, innovative, and practical learning solutions that foster personal and professional growth. We aspire to be a leading e-learning platform that bridges the gap between knowledge and opportunity, enabling learners to unlock their full potential, stay competitive in a rapidly evolving world, and achieve their goals with confidence. Through high-quality, engaging, and diverse educational content, we aim to create a global community of lifelong learners driven by curiosity, ambition, and success.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Blog;
