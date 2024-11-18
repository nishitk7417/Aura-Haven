import React from 'react';
import './Contact.css'; 

function Contact(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Your message has been sent successfully!'); 
  };

  return (
    <section className="contact-section" style={{background: props.mode==='dark'?'rgb(33,37,41)':'white'}}>
      <div className="container py-5" style={{background: props.mode==='dark'?'rgb(5,37,21)':'#fff'}}>
        <h2 className="text-center fw-bold mb-4"style={{color: props.mode==='dark'?'white':'#198754'}}>Contact Us</h2>
        <p className="text-center mb-5" style={{color: props.mode==='dark'?'white':'#555'}} >
          Have questions or need assistance? We'd love to hear from you! Fill out the form below or reach out using the provided details.
        </p>
        <div className="row">
          <div className="col-lg-6 mb-4">
            <div className="contact-info">
              <h4 className="fw-bold" style={{color: props.mode==='dark'?'white':'#198754'}}>Our Office</h4>
              <p style={{color: props.mode==='dark'?'white':'#555'}}>XXX Main Street, Suite XXX<br />Cityville, State 56789</p>
              <h4 className="fw-bold" style={{color: props.mode==='dark'?'white':'#198754'}}>Email Us</h4>
              <p>
                <a href="mailto:contact@aurahaven.com" className="text-success">
                  contact@aurahaven.com
                </a>
              </p>
              <h4 className="fw-bold" style={{color: props.mode==='dark'?'white':'#198754'}}>Call Us</h4>
              <p>
                <a href="tel:+1234567890" className="text-success">
                  +1 (234) 567-890
                </a>
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label" style={{color: props.mode==='dark'?'white':'black'}}>
                  Full Name
                </label>
                <input type="text" className="form-control" id="name" placeholder="Enter your full name" required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label" style={{color: props.mode==='dark'?'white':'black'}}>
                  Email Address
                </label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email address" required />
              </div>
              <div className="mb-3">
                <label htmlFor="subject" className="form-label" style={{color: props.mode==='dark'?'white':'black'}}>
                  Subject
                </label>
                <input type="text" className="form-control" id="subject" placeholder="Enter the subject" />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label" style={{color: props.mode==='dark'?'white':'black'}}>
                  Message
                </label>
                <textarea className="form-control" id="message" rows="4" placeholder="Enter your message" required></textarea>
              </div>
              <button type="submit" className="btn btn-success w-100">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
