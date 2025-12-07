import type { ReactElement } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { photos } from '../../data/photos';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { auto } from '@popperjs/core';

const Portfolio = (): ReactElement => {
  return (
    <section className="container gap-[4rem] px-[2rem] py-[6rem] flex bg-secondary min-h-[91.4rem]">
      <div className="gap-[4rem] w-full flex flex-col">
        <div className="gap-[1.2rem] w-[36rem] min-h-[10rem]">
          <h2 className="h2 text-light">my portfolio</h2>
          <span className="text-light body-base">
            Every shoot is a story. Here you’ll find portraits, love stories,
            family sessions, and more.
          </span>
        </div>
        <Swiper
          slidesPerView={auto}
          ffect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="min-h-[65.4rem] px-[2rem] gap[2rem] w-full"
        >
          {photos.map((photo) => (
            <SwiperSlide
              key={photo.id}
              style={photo.containerstyle}
              className="mx-2"
            >
              <img
                src={photo.url}
                alt="Portfolio"
                style={photo.style}
                className="object-fit-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
export default Portfolio;
