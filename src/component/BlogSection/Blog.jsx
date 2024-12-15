import React, { useEffect } from 'react'
import ScrollReveal from 'scrollreveal';
import './Blog.css'
import { iconsImgs } from '../../Utils/image'

const Blog = () => {

    useEffect(() => {
        const sr = ScrollReveal({
          distance: '60px',
          duration: 2500,
          delay: 400,
          reset: false,
        });
    
        sr.reveal('.blog-container', { delay: 200, origin: 'left' });
        sr.reveal('.blog-container .left', { delay: 400, origin: 'bottom' });
        sr.reveal('.blog-container .right', { delay: 400, origin: 'bottom' });
      }, []);
  return (
    <section className='blog' id='blog'>
        <div className="title">
            <h2>Our Blog</h2>
        </div>
        <div className="container blog-container">
            <div className="box">
                <div className="image">
                    <img src={iconsImgs.blog1} alt="" />
                    <div className="tag">
                        <span>20</span>
                        <s>JUN</s>
                    </div>
                </div>
                <div className="detail">
                    <h3>People's Number One Choice</h3>
                    <div className="respnc">
                        <span>222 <i className='fa-solid fa-thumb-up'></i></span>
                        <span>42 <i className='fa-solid fa-comment'></i></span>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quia dolorem maiores eius fugiat mollitia consectetur veniam ducimus eaque? Obcaecati nisi alias inventore eum veniam aperiam expedita architecto nostrum voluptas? Amet, dicta non.</p>
                </div>
            </div>
            <div className="box">
                <div className="image">
                    <img src={iconsImgs.blog2} alt="" />
                    <div className="tag">
                        <span>20</span>
                        <s>JUN</s>
                    </div>
                </div>
                <div className="detail">
                    <h3>People's Number One Choice</h3>
                    <div className="respnc">
                        <span>222 <i className='fa-solid fa-thumb-up'></i></span>
                        <span>42 <i className='fa-solid fa-comment'></i></span>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quia dolorem maiores eius fugiat mollitia consectetur veniam ducimus eaque? Obcaecati nisi alias inventore eum veniam aperiam expedita architecto nostrum voluptas? Amet, dicta non.</p>
                </div>
            </div>
            <div className="box">
                <div className="image">
                    <img src={iconsImgs.blog3} alt="" />
                    <div className="tag">
                        <span>20</span>
                        <s>JUN</s>
                    </div>
                </div>
                <div className="detail">
                    <h3>People's Number One Choice</h3>
                    <div className="respnc">
                        <span>222 <i className='fa-solid fa-thumb-up'></i></span>
                        <span>42 <i className='fa-solid fa-comment'></i></span>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quia dolorem maiores eius fugiat mollitia consectetur veniam ducimus eaque? Obcaecati nisi alias inventore eum veniam aperiam expedita architecto nostrum voluptas? Amet, dicta non.</p>
                </div>
            </div>
            <div className="box">
                <div className="image">
                    <img src={iconsImgs.blog4} alt="" />
                    <div className="tag">
                        <span>20</span>
                        <s>JUN</s>
                    </div>
                </div>
                <div className="detail">
                    <h3>People's Number One Choice</h3>
                    <div className="respnc">
                        <span>222 <i className='fa-solid fa-thumb-up'></i></span>
                        <span>42 <i className='fa-solid fa-comment'></i></span>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quia dolorem maiores eius fugiat mollitia consectetur veniam ducimus eaque? Obcaecati nisi alias inventore eum veniam aperiam expedita architecto nostrum voluptas? Amet, dicta non.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Blog
