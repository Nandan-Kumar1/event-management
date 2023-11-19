import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import { Autoplay, EffectCube, Pagination } from "swiper/modules";
import { eventList } from "../data/events";
import EventCard from "./EventCard";

function Events() {
  return (
    <section className="max-w-6xl m-auto px-14 mt-9">
      <h1 className="text-4xl font-semibold text-[#14a4d4] my-14">
        Events At NITJ
      </h1>
      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: false,
        }}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, EffectCube, Pagination]}
        className="mySwiper"
      >
        {eventList.map((event, index) => (
          <SwiperSlide key={index}>
            <EventCard event={event} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Events;
