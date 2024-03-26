// Slider.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './slider.css';

import { register} from 'swiper/element/bundle';
register();

function Slider() {
  const data = [
    { id: '1', image: require('../media/piscina1.jpeg') },
    { id: '2', image: require('../media/piscina2.jpeg') },
    { id: '3', image: require('../media/piscina3.jpeg') },
  ]

  return (
    <div className='container'>
      <Swiper
        slidesPerView={1}
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
