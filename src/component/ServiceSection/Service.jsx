import React, { useEffect } from 'react'
import ScrollReveal from 'scrollreveal';
import './Service.css'
import { iconsImgs } from '../../Utils/image'

const Service = () => {

    useEffect(() => {
        const sr = ScrollReveal({
          distance: '60px',
          duration: 2500,
          delay: 400,
          reset: false,
        });
    
        sr.reveal('.services-container', { delay: 200, origin: 'top' });
      }, []);
  return (
    <section className='services' id='services'>
        <div className="title">
            <h2>What We Offer</h2>
        </div>
        <div className="container services-container">
            <div className="col">
                <img src={iconsImgs.nservice1} alt=''/>
                <div className="info">
                    <h4>Deep Tissue Massage</h4>
                    <ul>
                        <li>$40</li>
                        <li className='dis'>$60</li>
                    </ul>
                    <a href="" >Book a session</a>
                </div>
            </div>
            <div className="col">
            <div className="info">
                    <h4>Swedish Massage</h4>
                    <ul>
                        <li>$65</li>
                        <li className='dis'>$60</li>
                    </ul>
                    <a href="" >Book a session</a>
                </div>
                <img src={iconsImgs.nservice2} alt=''/>
            </div>
            <div className="col">
                <img src={iconsImgs.nservice3} alt=''/>
                <div className="info">
                    <h4>Couples Massage</h4>
                    <ul>
                        <li>$53</li>
                        <li className='dis'>$60</li>
                    </ul>
                    <a href="" >Book a session</a>
                </div>
            </div>
            <div className="col">
            <div className="info">
                    <h4>Cupping Therapy Massage</h4>
                    <ul>
                        <li>$40</li>
                        <li className='dis'>$60</li>
                    </ul>
                    <a href="" >Book a session</a>
                </div>
                <img src={iconsImgs.nservice4} alt=''/>
            </div>
        </div>
    </section>
  )
}

export default Service
