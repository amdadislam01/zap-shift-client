import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import brands1 from "../assets/brands/amazon.png";
import brands2 from "../assets/brands/amazon_vector.png";
import brands3 from "../assets/brands/casio.png";
import brands4 from "../assets/brands/moonstar.png";
import brands5 from "../assets/brands/randstad.png";
import brands6 from "../assets/brands/star.png";
import brands7 from "../assets/brands/start_people.png";

const brandsLogos = [
  brands1,
  brands2,
  brands3,
  brands4,
  brands5,
  brands6,
  brands7,
];

const Brands = () => {
  return (
    <div className="w-full flex flex-col items-center py-6 md:py-10">
      <h2 className="text-center font-extrabold text-[#03373D] text-lg md:text-xl">
        We've helped thousands of sales teams
      </h2>

      <div className="w-full max-w-6xl mt-6">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          grabCursor={true}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          speed={3500}
          spaceBetween={8}
          breakpoints={{
            0: { slidesPerView: 3 },
            450: { slidesPerView: 4 },
            640: { slidesPerView: 5 },
            768: { slidesPerView: 6 },
            1024: { slidesPerView: 7 },
          }}
        >
          {brandsLogos.map((logo, i) => (
            <SwiperSlide key={i} className="flex justify-center items-center">
              <img
                src={logo}
                alt=""
                className="w-14 sm:w-16 md:w-20 opacity-90 hover:opacity-100 transition"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Brands;
