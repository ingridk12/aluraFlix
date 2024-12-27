import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import "./Banner.css";
const Banner = ({ videos }) => {
  return (
    <div className="banner">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        className="swiper-container"
      >
        {videos.map((video, index) => (
          <SwiperSlide key={index}>
            <div className="video-container">
              <iframe
                src={video.url}
                title={video.title}
                width="100%"
                height="400"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ border: "none" }}
              ></iframe>
              <p className="video-title">{video.title}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
