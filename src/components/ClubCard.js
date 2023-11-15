// ClubCard.js
import React from "react";

const ClubCard = ({ name, logo, description, website, tags }) => {
  return (
    <div className="bg-white flex flex-col justify-between shadow-lg rounded-lg overflow-hidden w-[250px] h-[390px] border border-gray-200 hover:shadow-2xl transition-all duration-300">
      <div>
        <img
          src={logo}
          alt={`${name} Logo`}
          className="w-full h-32 object-cover object-center"
        />
        <div className="p-4">
          <div className="mb-2">
            {tags.map((tag) => (
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                {tag}
              </span>
            ))}
            {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              Tag2
            </span> */}
          </div>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">{name}</h2>

          <p className="text-gray-600 mb-4">{description}</p>
        </div>
      </div>
      <div className="flex justify-around items-center mb-5">
        <a
          href={website}
          target="__blank"
          className="bg-[#14a4d4] py-1 px-2 rounded-lg text-white"
        >
          Visit Website
        </a>
        <a
          href="/club/id"
          className="bg-gray-300 py-1 px-2 rounded-lg text-black"
        >
          Get Details
        </a>
      </div>
    </div>
  );
};

export default ClubCard;
