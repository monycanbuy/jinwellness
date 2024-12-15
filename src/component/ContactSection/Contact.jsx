import React, { useEffect } from 'react'
import ScrollReveal from 'scrollreveal'; // Import ScrollReveal
import './Contact.css'

const Contact = () => {

    useEffect(() => {
        const sr = ScrollReveal({
          distance: '60px',
          duration: 2500,
          delay: 400,
          reset: false,
        });
    
        sr.reveal('.contact-container .left', { delay: 200, origin: 'bottom' });
        sr.reveal('.contact-container .right', { delay: 400, origin: 'top' });
      }, []);
  return (
    <section className='contact' id='contact'>
        <div className="container contact-container">
            <div className="left col">
                <div className="title">
                    <h2>Get in touch</h2>
                    <form action="" className="contact-form">
                        <div className="form-name">
                            <input type="text" name='name' placeholder='Enter Your Name'/>
                            <input type="email" name='email' id='' placeholder='Enter Your Email'/>
                            <input type="tel" name='phone' id='' placeholder='Enter Your Phone Number'/>
                        </div>
                        <input type="text" name='subject' placeholder='Subject'/>
                        <textarea name="message" id="" cols={30} rows={10} placeholder='Enter Your Message'></textarea>
                        <button className='btn'>Send Message <span></span></button>
                    </form>
                </div>
            </div>
            <div className="right col">
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.6039322166225!2d3.4589562999999997!3d6.4448716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf4ff20651c91%3A0x29db50e8256da4f1!2sJin%20wellness%20spa(Lekki%20spa)!5e0!3m2!1sen!2sng!4v1734215596640!5m2!1sen!2sng"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At in soluta aut harum fugit, libero sunt aliquam obcaecati laudantium rem impedit omnis ut!</p>
            <span>Tel: +2347054032321
                Email:jinwellnessspa@gmail.com
                Address:5B Wole Ariyo St, off Admiralty Way, Lekki Phase 1, Lagos 100001, Lagos
            </span>
            </div>
        </div>
    </section>
  )
}

export default Contact
