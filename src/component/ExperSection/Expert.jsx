import React, { useEffect } from 'react'
import ScrollReveal from 'scrollreveal';
import './Expert.css'
import { iconsImgs } from '../../Utils/image'

const Expert = () => {

    useEffect(() => {
        const sr = ScrollReveal({
          distance: '60px',
          duration: 2500,
          delay: 400,
          reset: false,
        });
    
        sr.reveal('.experts-container', { delay: 200, origin: 'left' });
      }, []);
  return (
    <section className="experts" id='experts'>
        <div className="title">
            <h2>Meet our therapist</h2>
        </div>
        <div className="container experts-container">
            <div className="box">
                <div className="image">
                    <img src={iconsImgs.nexpert1} alt="" />
                    <div className="social">
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-linkedin"></i>
                    </div>
                    <span></span>
                </div>
                <div className="info">
                    <h3>Lizy Doha</h3>
                    <span>Massage Therapist</span>
                    <div className="rating">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star-half"></i>
                    </div>
                    <span></span>
                </div>
            </div>
            <div className="box">
                <div className="image">
                    <img src={iconsImgs.nexpert2} alt="" />
                    <div className="social">
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-linkedin"></i>
                    </div>
                    <span></span>
                </div>
                <div className="info">
                    <h3>Rui KinMon</h3>
                    <span>Massage Therapist</span>
                    <div className="rating">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star-half"></i>
                    </div>
                </div>
            </div>
            <div className="box">
                <div className="image">
                    <img src={iconsImgs.nexpert3} alt="" />
                    <div className="social">
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-linkedin"></i>
                    </div>
                    <span></span>
                </div>
                <div className="info">
                    <h3>Mary Joda</h3>
                    <span>Massage Therapist</span>
                    <div className="rating">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star-half"></i>
                    </div>
                </div>
            </div>
            <div className="box">
                <div className="image">
                    <img src={iconsImgs.nexpert4} alt="" />
                    <div className="social">
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-linkedin"></i>
                    </div>
                    <span></span>
                </div>
                <div className="info">
                    <h3>Linda Currys</h3>
                    <span>Massage Therapist</span>
                    <div className="rating">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star-half"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Expert
