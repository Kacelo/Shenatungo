'useclient'
import { ProductCard } from '@/components/ProductCard'
import React, { CSSProperties } from 'react'
import { SwiperOptions } from 'swiper/types/swiper-options';
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box } from '@chakra-ui/react';

const slideStyles: CSSProperties = {
  boxSizing: 'border-box',
  maxWidth: '350px',
};

export const FeaturedProducts = () => {
  const sliderSettings: SwiperOptions = {
    modules: [Navigation, A11y, Autoplay],
    spaceBetween: 10,
    slidesPerView: 'auto',
    speed: 1000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  };
  return (
    
    <div>
      <Swiper {...sliderSettings} style={{ width: '100%', height: '100%' }}>
        <SwiperSlide style={slideStyles}>
        <ProductCard/>
        </SwiperSlide>
        <SwiperSlide style={slideStyles}>
        <ProductCard/>
        </SwiperSlide>
        <SwiperSlide style={slideStyles}>
        <ProductCard/>
        </SwiperSlide>
        <SwiperSlide style={slideStyles}>
        <ProductCard/>
        </SwiperSlide>
        <SwiperSlide style={slideStyles}>
        <ProductCard/>
        </SwiperSlide>
      </Swiper>
        <ProductCard/>

    </div>
  )
}

