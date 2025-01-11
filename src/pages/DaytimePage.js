import React from "react";

const DaytimePage = () => {
  const photos = [
    "/images/daytime-interior.jpg",
    "/images/daytime-interior2.jpg",
    "/images/daytime-interior3.jpg",
    "/images/daytime-interior4.jpg",
    "/images/daytime-interior5.jpg",
    "/images/daytime-interior6.jpg",
    "/images/daytime-exterior1.jpg",
    "/images/daytime-exterior2.jpg",
    "/images/daytime-exterior3.jpg",
    "/images/daytime-exterior4.jpg",
  ];

  const randomizedPhotos = photos.sort(() => Math.random() - 0.5);

  return (
    <div className="p-8 md:ml-64">
      <h1 className="text-4xl font-bold mb-4 text-center">
        Daytime Photography
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

export default DaytimePage;
