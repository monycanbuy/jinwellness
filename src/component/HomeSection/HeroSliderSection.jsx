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
              <h1>We give the best body treatment</h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim quos soluta quisquam cumque! Dolorem reiciendis fuga, harum aperiam enim quis incidunt quae magnam!</p>
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
              <h1>We give body massage in town</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt error, provident explicabo nihil modi iste libero delectus, quod odit corrupti sed eius sint sit perferendis! Deserunt beatae eligendi iure vero distinctio nam odio.</p>
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
