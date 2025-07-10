import React from 'react';
import './carousel.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const images = [
  'https://res.cloudinary.com/dxwbzcqc0/image/upload/w_1920,h_1080,c_fill,g_auto,q_auto,f_auto/v1751225077/WhatsApp_Image_2025-06-30_at_00.46.21_yomxkl.jpg',
  'https://res.cloudinary.com/dxwbzcqc0/image/upload/w_1920,h_1080,c_fill,g_auto,q_auto,f_auto/v1751225078/WhatsApp_Image_2025-06-30_at_00.46.21_1_acdefn.png',
  ];

const Carousel = () => {
  return (
    <div className="carousel-container">
      <Swiper
        className="carousel-swiper"
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
      >
        {images.map((imgUrl, index) => (
          <SwiperSlide key={index}>
            <img src={imgUrl} alt={`Slide ${index + 1}`} className="carousel-image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
