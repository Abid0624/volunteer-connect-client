import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Slide from "./Slide";

// slider image
import carousel1 from "../assets/images/carousel1.webp";
import carousel2 from "../assets/images/carousel2.jpg";
import carousel3 from "../assets/images/carousel3.jpg";

const Carousel = () => {
  return (
    <div className="container mx-auto px-6 py-10">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide
            image={carousel1}
            text="Be the reason someone smiles today. Join hands. Make a difference."
          ></Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={carousel2}
            text="Connecting volunteers with causes that matter."
          ></Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={carousel3}
            text="Your time is powerful. Your help is hope."
          ></Slide>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
