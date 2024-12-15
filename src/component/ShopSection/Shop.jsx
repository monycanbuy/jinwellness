import React from 'react'
import './Shop.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules';
import { iconsImgs } from '../../Utils/image';

const Shop = () => {
    return (
        <section className='shop' id='shop'>
            <div className='title'>
                <h2>Our Products</h2>
            </div>
            <div className="container shop-container">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        924: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        1200: {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                    }}
                    //modules={[Pagination]}
                    className="mySwiper shop-swiper"
                >
                    <div className='swiper-wrapper'>
                        <SwiperSlide className='siper-slide'>
                            <div className="box">
                                <div className="image">
                                    <img src={iconsImgs.shop1} alt='' />
                                    <div className="add">
                                        <span className="lnr lnr-cart"></span>
                                        <span className="lnr lnr-heart"></span>
                                        <span className="lnr lnr-magnifier"></span>
                                    </div>
                                </div>
                                <div className="info">
                                    <p>Sunblick</p>
                                    <h4>Lovely Whitening facial</h4>
                                    <span>$28.00</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='siper-slide'>
                            <div className="box">
                                <div className="image">
                                    <img src={iconsImgs.shop2} alt='' />
                                    <div className="add">
                                        <span className="lnr lnr-cart"></span>
                                        <span className="lnr lnr-heart"></span>
                                        <span className="lnr lnr-magnifier"></span>
                                    </div>
                                </div>
                                <div className="info">
                                    <p>Sunblick</p>
                                    <h4>Lovely Whitening facial</h4>
                                    <span>$28.00</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='siper-slide'>
                            <div className="box">
                                <div className="image">
                                    <img src={iconsImgs.shop3} alt='' />
                                    <div className="add">
                                        <span className="lnr lnr-cart"></span>
                                        <span className="lnr lnr-heart"></span>
                                        <span className="lnr lnr-magnifier"></span>
                                    </div>
                                </div>
                                <div className="info">
                                    <p>Sunblick</p>
                                    <h4>Lovely Whitening facial</h4>
                                    <span>$28.00</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='siper-slide'>
                            <div className="box">
                                <div className="image">
                                    <img src={iconsImgs.shop4} alt='' />
                                    <div className="add">
                                        <span className="lnr lnr-cart"></span>
                                        <span className="lnr lnr-heart"></span>
                                        <span className="lnr lnr-magnifier"></span>
                                    </div>
                                </div>
                                <div className="info">
                                    <p>Sunblick</p>
                                    <h4>Lovely Whitening facial</h4>
                                    <span>$28.00</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='siper-slide'>
                            <div className="box">
                                <div className="image">
                                    <img src={iconsImgs.shop1} alt='' />
                                    <div className="add">
                                        <span className="lnr lnr-cart"></span>
                                        <span className="lnr lnr-heart"></span>
                                        <span className="lnr lnr-magnifier"></span>
                                    </div>
                                </div>
                                <div className="info">
                                    <p>Sunblick</p>
                                    <h4>Lovely Whitening facial</h4>
                                    <span>$28.00</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    </div>
                </Swiper>
            </div>
        </section>
    )
}

export default Shop
