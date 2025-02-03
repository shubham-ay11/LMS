import React, { useState } from "react";

function Avg() {
  const [activeVideo, setActiveVideo] = useState(null);

  const handleVideoClick = (videoId) => {
    if (activeVideo === videoId) {
      setActiveVideo(null); // If the same video is clicked, toggle off
    } else {
      setActiveVideo(videoId); // Otherwise, set the active video
    }
  };

  const cardData = [
    {
      id: 1,
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnailUrl: "/img/boy.png",
    },
    {
      id: 2,
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnailUrl: "/img/boy.png",
    },
    {
      id: 3,
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnailUrl: "/img/boy.png",
    },
  ];

  return (
    <div className="p-6 bg-primary">
{/* Community Stats */}
{/* Community Stats */}
<div className="flex justify-center items-center mb-12 px-4">
  <div className="  p-8    text-white w-full max-w-6xl">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
      Our Community at a Glance
    </h2>

    {/* Stat Row */}
    <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-6">
      {/* Stat 1 */}
      <div className="flex flex-col items-center md:w-1/3">
        <p className="text-4xl md:text-5xl font-bold text-center mb-2">
          <span className="block text-white">200K+</span>
        </p>
        <p className="text-lg text-white text-center">
          Strong Learners Community
        </p>
      </div>

      {/* Vertical Divider */}
      <div className="hidden md:block border-l-2 border-white h-24"></div>

      {/* Stat 2 */}
      <div className="flex flex-col items-center md:w-1/3">
        <p className="text-4xl md:text-5xl font-bold text-center mb-2">
          <span className="block text-white">4.7/5</span>
        </p>
        <p className="text-lg text-white text-center">
          Rating from Learners
        </p>
      </div>

      {/* Vertical Divider */}
      <div className="hidden md:block border-l-2 border-white h-24"></div>

      {/* Stat 3 */}
      <div className="flex flex-col items-center md:w-1/3">
        <p className="text-4xl md:text-4xl font-bold text-center mb-2">
          <span className="block text-white">Certified Experts</span>
        </p>
        <p className="text-lg text-white text-center">
          Trained by Industry Leaders
        </p>
      </div>
    </div>
  </div>
</div>



      {/* Offering Section */}
      <div className="mb-12 text-center">

        <h2 className="lg:text-[6em] text-5xl p-2 font-bold  text-white font-serif  mb-6 lg:pl-24 lg:text-start text-center">

        OFFER<span className=" text-yellow-500">ING</span>

</h2>
        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardData.map((card) => (
            <div
              key={card.id}
              className="relative cursor-pointer border-2 border-gray-300 rounded-lg overflow-hidden shadow-lg"
              onClick={() => handleVideoClick(card.id)}
            >
              {/* Show image or video based on activeVideo */}
              {activeVideo === card.id ? (
                <iframe
                  className="w-full h-56"
                  src={card.videoUrl}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <img
                  src={card.thumbnailUrl}
                  alt={`Video ${card.id} Thumbnail`}
                  className="w-full h-56 object-cover"
                />
              )}

              {/* Overlay Play Button */}
              {activeVideo !== card.id && (
                <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white">
                  <span className="text-xl font-semibold">Click to Play Video</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Avg;
