import React, { useEffect } from 'react'
import ScrollReveal from 'scrollreveal';
import './Testimonial.css'
import { iconsImgs } from '../../Utils/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation,Pagination } from 'swiper/modules';

const Testimonial = () => {

    useEffect(() => {
        const sr = ScrollReveal({
          distance: '60px',
          duration: 2500,
          delay: 400,
          reset: false,
        });
    
        sr.reveal('.testimonial-container .profile img', { delay: 200, origin: 'bottom' });
        sr.reveal('.testimonial-container .profile p', { delay: 400, origin: 'top' });
      }, []);
    return (
        <section className="testimonial">
            <div className="container testimonial-container">
                <Swiper
                    modules={[Navigation, Pagination]}
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
                    className="swiper mySwiper testimonial-swiper">
                    <div className='swiper-wrapper'>
                        <SwiperSlide className='swiper-slide'>
                            <div className="quote">
                                <img src={iconsImgs.quote} />
                            </div>
                            <div className="profile">
                                <img src={iconsImgs.user1} />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam modi praesentium exercitationem est, nostrum molestias dolorem sunt optio vero laborum itaque, minima fugit?</p>
                            </div>
                            <div className="det">
                                <div className="rating">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star-half"></i>
                                </div>
                                <h4>Indiana Rose</h4>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='swiper-slide'>
                            <div className="quote">
                                <img src={iconsImgs.quote} />
                            </div>
                            <div className="profile">
                                <img src={iconsImgs.user2} />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam modi praesentium exercitationem est, nostrum molestias dolorem sunt optio vero laborum itaque, minima fugit?</p>
                            </div>
                            <div className="det">
                                <div className="rating">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star-half"></i>
                                </div>
                                <h4>Indiana Rose</h4>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='swiper-slide'>
                            <div className="quote">
                                <img src={iconsImgs.quote} />
                            </div>
                            <div className="profile">
                                <img src={iconsImgs.user3} />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam modi praesentium exercitationem est, nostrum molestias dolorem sunt optio vero laborum itaque, minima fugit?</p>
                            </div>
                            <div className="det">
                                <div className="rating">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star-half"></i>
                                </div>
                                <h4>Indiana Rose</h4>
                            </div>
                        </SwiperSlide>
                    </div>
                </Swiper>
            </div>
        </section>
    )
}

export default Testimonial
