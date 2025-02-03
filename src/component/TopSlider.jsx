// // import React from "react";
// // import Slider from "react-slick";
// // import "slick-carousel/slick/slick.css";
// // import "slick-carousel/slick/slick-theme.css";

// // const TopSlider = () => {
// //     // Slider settings for reel effect
// //     const sliderSettings = {
// //         dots: false,
// //         infinite: true,
// //         speed: 3000, // Speed for smooth scrolling
// //         slidesToShow: 4, // Number of slides visible at once
// //         slidesToScroll: 1,
// //         autoplay: true,
// //         autoplaySpeed: 0, // Enables continuous scrolling
// //         cssEase: "linear", // Smooth scrolling effect
// //         responsive: [
// //           {
// //             breakpoint: 768, // For mobile screens
// //             settings: {
// //               slidesToShow: 2,
// //             },
// //           },
// //           {
// //             breakpoint: 1024, // For tablets
// //             settings: {
// //               slidesToShow: 3,
// //             },
// //           },
// //         ],
// //       };
    

// //   // Data for the slider (images and corresponding text)
// //   const sliderData = [
// //     { img: "/img/comLogo.png", text: "Company Logo 1" },
// //     { img: "/img/comLogo2.png", text: "Company Logo 2" },
// //     { img: "/img/comLogo4.png", text: "Company Logo 3" },
// //     { img: "/img/comLogo2.png", text: "Company Logo 4" },
// //     { img: "/img/comLogo.png", text: "Company Logo 5" },
// //     { img: "/img/comLogo4.png", text: "Company Logo 6" },
// //   ];

// //   return (
// //     <div className="sticky top-0 z-50">
// //       {/* Promotional Slider */}
// //       <div className=" bg-primary  text-white ">
// //         <Slider {...sliderSettings}>
// //           {sliderData.map((item, index) => (
// //             <div key={index} className="flex flex-col items-center">
// //               <div className="flex  items-center space-x-4">
// //                 <img
// //                   src={item.img}
// //                   alt={`Logo ${index + 1}`}
// //                   className=" h-12 w-12 mt-1 bg-white rounded-full object-contain"
// //                 />
// //                 <p className="text-sm   text-secondary">{item.text}</p>
// //               </div>
// //             </div>
// //           ))}
// //         </Slider>
// //       </div>

// //     </div>
// //   );
// // };

// // export default TopSlider;




import React, { useEffect, useRef } from "react";

const FinlogixWidget = () => {
  const widgetInitialized = useRef(false); // Track if the widget is already initialized

  useEffect(() => {
    // Check if the widget has already been initialized
    if (!widgetInitialized.current) {
      widgetInitialized.current = true; // Mark as initialized

      // Dynamically load the Finlogix Widget script
      const script = document.createElement("script");
      script.src = "https://widget.finlogix.com/Widget.js";
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        // Initialize the widget once the script is loaded
        if (window.Widget) {
          window.Widget.init({
            widgetId: "ad1194c6-90f8-4f28-947a-48853b904c69",
            type: "StripBar",
            language: "en",
            showBrand: true,
            isShowTradeButton: true,
            isShowBeneathLink: true,
            isShowDataFromACYInfo: true,
            symbolPairs: [
              { symbolId: "19", symbolName: "EUR/USD" },
              { symbolId: "36", symbolName: "USD/JPY" },
              { symbolId: "20", symbolName: "GBP/AUD" },
              { symbolId: "44", symbolName: "XAU/USD" },
              { symbolId: "45", symbolName: "WTI" },
              { symbolId: "52", symbolName: "SP500" },
              { symbolId: "83", symbolName: "INDIA50" },
            ],
            isAdaptive: true,
          });
        }
      };
    }
  }, []);

  return (
    <div className=" ">
      <div className="finlogix-container "></div>
    </div>
  );
};

export default FinlogixWidget;























