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
    { id: '1', image: require('../media/piscinavinil0.jpg') },
    { id: '2', image: require('../media/piscinavinil1.jpg') },
    { id: '3', image: require('../media/piscinavinil2.jpg') },
    { id: '4', image: require('../media/piscinalonga3.png') },
    { id: '5', image: require('../media/piscinalonga2.png') },
    { id: '6', image: require('../media/piscinalonga1.png') },
    { id: '7', image: require('../media/PiscinaCarrossel3.jpg') },
    { id: '8', image: require('../media/PiscinaCarrossel4.jpg') },

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
