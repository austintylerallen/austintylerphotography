import React from "react";

const TwilightPage = () => {
  const photos = [
    "/images/twilight-exterior1.jpg",
    "/images/twilight-exterior2.jpg",
    "/images/twilight-exterior3.jpg",
    "/images/twilight-exterior4.jpg",
    "/images/twilight-exterior5.jpg",
    "/images/twilight-exterior6.jpg",
    "/images/twilight-exterior7.jpg",
    "/images/twilight-exterior8.jpg",
    "/images/twilight-exterior9.jpg",
    "/images/twilight-exterior10.jpg",
    "/images/twilight-exterior11.jpg",
    "/images/twilight-exterior12.jpg",
    "/images/twilight-interior.jpg",
    "/images/twilight-interior2.jpg",
    "/images/twilight-interior3.jpg",
    "/images/twilight-interior4.jpg",
  ];

  const randomizedPhotos = photos.sort(() => Math.random() - 0.5);

  return (
    <div className="p-8 md:ml-64">
      <h1 className="text-4xl font-bold mb-4 text-center">
        Twilight Photography
      </h1>
      {/* Single-column layout, full-width images */}
      <div className="grid grid-cols-1 gap-4">
        {randomizedPhotos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt=""
            className="w-full h-auto object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default TwilightPage;
