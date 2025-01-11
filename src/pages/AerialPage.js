import React from "react";

const AerialPage = () => {
  const photos = [
    "/images/aerial1.jpg",
    "/images/aerial2.jpg",
    "/images/aerial3.jpg",
    "/images/aerial4.jpg",
    "/images/aerial5.jpg",
    "/images/aerial6.jpg",
    "/images/aerial7.jpg",
    "/images/aerial8.jpg",
    "/images/aerial9.jpg",
    "/images/aerial10.jpg",
    "/images/aerial11.jpg",
    // "/images/aerial12.jpg",
    // "/images/aerial13.jpg",
    // "/images/aerial14.jpg",
    // "/images/aerial15.jpg",
  ];

  const randomizedPhotos = photos.sort(() => Math.random() - 0.5);

  return (
    <div className="p-8 md:ml-64">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Aerial Photography
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

export default AerialPage;
