import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import './HeroSliderSection.css';

const HeroSliderSection = () => {
  return (
    <section className="home" id="home">
      <div className="home-container">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          className="mySwiper home-swiper"
        >
          <SwiperSlide className="swiper-slide slide1">
            <div className="content">
              <h1>Relax, Rejuvenate, Restore</h1>
              <p>Experience the perfect escape with our soothing massages that melt away stress and tension.</p>
              <form action="" className="home-search">
                <input type="text" name="search" placeholder="search here" />
                <button type="submit" className="btn">
                  <span className="lnr lnr-magnifier"></span>
                </button>
              </form>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide slide2">
            <div className="content">
              <h1>Your Path to Ultimate Relaxation</h1>
              <p>Indulge in expert massage therapies designed to heal your body and calm your mind.</p>
              <form action="" className="home-search">
                <input type="text" name="search" placeholder="search here" />
                <button type="submit" className="btn">
                  <span className="lnr lnr-magnifier"></span>
                </button>
              </form>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </div>
    </section>
  );
};

export default HeroSliderSection;
