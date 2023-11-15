import React from "react";

function IntroComponent() {
  return (
    <section className="flex justify-between items-center h-[80vh] mt-7">
      <div className="flex flex-col justify-end items-center">
        <h1 className="text-6xl font-bold mb-6 text-shadow">
          <span className="text-[#14a4d45b]">Explore</span> <br />
          <span className="text-[#14a4d4a0]">Engage</span> <br />
          <span className="text-[#14a4d4]">Elevate</span> <br />
        </h1>
        <p className="px-8 py-4 text-center text-md text-[#14a4d4]">
          Unveiling the Vibrancy of Campus Life - NIT Jalandhar Events and Clubs
          Hub.
        </p>
      </div>
      <div className="hidden md:block relative h-full w-[600px]">
        <img
          className="h-[270px] w-[300px] object-cover rounded-[50%/20%_80%_40%_40%] drop-shadow-[0px_15px_3px_rgba(0,0,0,0.25)] absolute top-0 right-[25%] z-20"
          src="/assets/bgphoto.avif"
          alt="bgphoto"
        />
        <img
          className="h-[270px] w-[300px] object-cover rounded-[50%/20%_80%_40%_40%] drop-shadow-[0px_15px_3px_rgba(0,0,0,0.25)] absolute top-1/3 right-[5%]"
          src="/assets/bgphoto1.avif"
          alt="bgphoto"
        />
        <img
          className="h-[270px] w-[300px] object-cover rounded-[50%/20%_80%_40%_40%] drop-shadow-[0px_15px_3px_rgba(0,0,0,0.25)] absolute top-1/3 right-[45%] z-30"
          src="/assets/bgphoto2.avif"
          alt="bgphoto"
        />
      </div>
    </section>
  );
}

export default IntroComponent;
