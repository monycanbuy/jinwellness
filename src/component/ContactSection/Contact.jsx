import React, { useEffect, useRef, useState } from 'react';
import ScrollReveal from 'scrollreveal'; // Import ScrollReveal
import './Contact.css';

const Contact = () => {
  const formRef = useRef(null); // Reference to the form element
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form redirect

    const formData = new FormData(formRef.current); // Gather form data

    try {
      const response = await fetch('https://formspree.io/f/xqakvbnd', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setSubmitted(true); // Show success message
        formRef.current.reset(); // Clear the form fields

        // After 10 seconds, reset the submitted state to display the form again
        setTimeout(() => {
          setSubmitted(false);
        }, 10000);
      } else {
        alert('There was an error, please try again later.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while sending your message.');
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="container contact-container">
        <div className="left col">
          <div className="title">
            <h2>Get in touch</h2>
            {submitted ? (
              <p style={{ color: '#d534eb' }}>Thank you! Your message has been sent.</p>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
                <div className="form-name">
                  <input type="text" name="name" placeholder="Enter Your Name" required />
                  <input type="email" name="email" placeholder="Enter Your Email" required />
                  <input type="tel" name="phone" placeholder="Enter Your Phone Number" />
                </div>
                <input type="text" name="subject" placeholder="Subject" />
                <textarea
                  name="message"
                  cols={30}
                  rows={10}
                  placeholder="Enter Your Message"
                  required
                ></textarea>
                <button className="btn" type="submit">
                  Send Message <span></span>
                </button>
              </form>
            )}
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
          <span>
            Tel:{' '}
            <a href="tel:+2348136962412">+2348136962412</a> |{' '}
            <i className="fa-brands fa-whatsapp">-</i>
            <a href="https://wa.me/2348099400722" target="_blank" rel="noopener noreferrer">
              Chat on WhatsApp
            </a>
            <br />
            Email: <a href="mailto:jinwellnessspa@gmail.com">jinwellnessspa@gmail.com</a>
            <br />
            Address: 5B Wole Ariyo St, off Admiralty Way, Lekki Phase 1, Lagos 100001, Lagos
          </span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
