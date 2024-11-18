import React from 'react';
import './Service.css';
import { Link } from 'react-router-dom';

function Service(props) {
  const services = [
    {
      title: "Personalized Wellness Plans",
      description:
        "Tailored strategies to help you achieve your wellness goals, personalized for your unique lifestyle.",
      icon: "📝",
    },
    {
      title: "Mindfulness Workshops",
      description:
        "Learn and practice mindfulness techniques with expert guidance to bring clarity and peace.",
      icon: "🧘",
    },
    {
      title: "Nature Retreats",
      description:
        "Experience rejuvenation with our immersive retreats in tranquil natural settings.",
      icon: "🌿",
    },
    {
      title: "Community Events",
      description:
        "Join a vibrant community through fun and interactive workshops, seminars, and meetups.",
      icon: "🤝",
    },
    {
      title: "Relaxation Therapies",
      description:
        "Unwind with therapies designed to rejuvenate your mind, body, and spirit.",
      icon: "💆",
    },
    {
      title: "Wellness Products",
      description:
        "Explore our range of curated products designed to complement your wellness journey.",
      icon: "🛍️",
    },
    {
      title: "Life Coaching Sessions",
      description:
        "Gain insights and actionable advice to overcome challenges and build a purposeful life.",
      icon: "📈",
    },
    {
      title: "Digital Resources",
      description:
        "Access e-books, guided meditation tracks, and other resources to support your well-being.",
      icon: "📚",
    },
  ];

  const testimonials = [
    {
      name: "Roronoa Zoro",
      feedback:
        "Aura Haven's mindfulness workshop transformed my life. I feel more centered and focused than ever before!",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStjCG75-khBLIwWH_rut8zUQMtsbSnkcyvKg&s",
    },
    {
      name: "Monkey D Luffy",
      feedback:
        "The nature retreat was exactly what I needed to recharge. The serene environment and activities were perfect!",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ60xVxRfiU7xIz01zg-9aMrweOUgCwoa02sQ&s",
    },
    {
      name: "Vinsmoke Sanji",
      feedback:
        "Their personalized wellness plans are amazing! They really understand what you need.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6s1Cmx9_0gShJd3TVR6Hu3WI7XPFFDmHgEA&s",
    },
  ];

  return (
    <div className="services-container" style={{background: props.mode==='dark'?'rgb(33,37,41)':'white'}}>
      <div className="services-hero" style={{background: props.mode==='dark'?'rgb(5,37,21)':'linear-gradient(135deg, #66bb6a, #26a69a)'}}>
        <h1>Discover Our Services</h1>
        <p>
          Explore a variety of offerings crafted to enhance your wellness, nurture your soul, and inspire personal growth.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card" style={{background: props.mode==='dark'?'rgb(33,37,41)':'white'}}>
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description "style={{color: props.mode==='dark'?'white':'black'}}>{service.description}</p>
          </div>
        ))}
      </div>

      <div className="testimonials-section">
        <h2 style={{color: props.mode==='dark'?'white':'black'}} >What Our Clients Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card" style={{background: props.mode==='dark'?'rgb(33,37,41)':'white',color: props.mode==='dark'?'white':'black'}}>
              <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
              <p className="testimonial-feedback">"{testimonial.feedback}"</p>
              <p className="testimonial-name" style={{color: props.mode==='dark'?'white':'black'}}>- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="cta-section" style={{background: props.mode==='dark'?'rgb(5,37,21)':'linear-gradient(135deg, #66bb6a, #26a69a)'}}>
        <h2>Ready to Transform Your Life?</h2>
        <p>Take the first step towards a healthier, happier you. Join Aura Haven today!</p>
        <Link to='/'><button className="cta-button">Get Started</button></Link>
      </div>
    </div>
  );
}

export default Service;
