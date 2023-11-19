// EventCard.js
import React from "react";

const EventCard = ({ event }) => {
  const { image, title, description } = event;

  return (
    <div className="flex bg-white shadow-lg">
      <img src={image} alt={title} className="h-[250px]" />

      <div className="w-1/2 p-4 flex flex-col justify-start items-start">
        <h2 className="text-2xl font-bold mb-2 text-[#14a4d4]">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default EventCard;
