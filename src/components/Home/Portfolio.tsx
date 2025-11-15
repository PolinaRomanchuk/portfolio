import type { ReactElement } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { photos } from '../../data/photos';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { auto } from '@popperjs/core';

const Portfolio = (): ReactElement => {
  return (
    <section
      className="container-xl d-flex py-5 d-flex gap-5 bg-secondary"
      style={{ height: '914px' }}
    >
      <div className="px-2 w-100 py-4">
        <div style={{ width: '360px' }} className="d-flex flex-column gap-4">
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
          className="py-5"
          style={{ height: '650px' }}
        >
          {photos.map((photo) => (
            <SwiperSlide
              key={photo}
              style={photo.containerstyle}
              className="mx-2"
            >
              <img src={photo.url} alt="Portfolio" style={photo.style} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
export default Portfolio;
