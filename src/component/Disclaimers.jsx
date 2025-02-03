import React from "react";

function Disclaimers() {
  return (
    <div className=" px-6 py-8 lg:px-16 lg:py-12  max-w-4xl mx-auto my-8">
      <h2 className="text-3xl lg:text-4xl font-bold text-red-800 mb-4 text-center">
        Disclaimers
      </h2>
      <p className="text-gray-300 leading-relaxed text-justify">
        The information provided on this platform is for educational and
        informational purposes only and should not be considered as financial
        or investment advice. The content, including tutorials, courses, and
        resources, is designed to enhance knowledge of stock market concepts
        and strategies but does not guarantee any specific financial outcomes.
        Investing in the stock market involves risk, and past performance is
        not indicative of future results. Please consult financial advisors
        before making any investment decisions. <span className="font-semibold text-secondary">Stock Upp Mentors</span> and its contributors are not responsible for any financial losses incurred as a result of applying the knowledge gained here. Use this platform responsibly and at your own discretion.
      </p>
    </div>
  );
}

export default Disclaimers;
