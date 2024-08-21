// Slider.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./slider.css";

import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './slider.css';

import { register} from 'swiper/element/bundle';
register();

function Slider({data}) {

  return (
    <div className='container'>
      <Swiper
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{ delay: 4000 }}
        speed={500}
      >
        {data.map( (item) => (
          <SwiperSlide key={item.id}>
            <img
              src={item.image}
              alt="Slider"
              className='slider-item'
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
