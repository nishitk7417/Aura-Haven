import React from 'react';
import './About.css';

function About(props) {
  return (
    <div className="about-container" style={{background: props.mode==='dark'?'rgb(33,37,41)':'white'}} >
      <div className="about-hero" style={{background: props.mode==='dark'?'rgb(5,37,21)':'linear-gradient(135deg, #66bb6a, #26a69a)'}}>
        <h1 className="about-title">Discover Your Haven</h1>
        <p className="about-tagline">
          Welcome to <span className="highlight">Aura Haven</span>, where tranquility meets inspiration.
        </p>
      </div>
      <section className="about-content" style={{color: props.mode==='dark'?'white':'black'}} >
        <h2>Who We Are</h2>
        <p>
          Aura Haven is more than a name—it's a promise. We are dedicated to creating a serene and welcoming environment where your mind, body, and soul can find balance. Our mission is to inspire wellness, harmony, and a sense of community for everyone.
        </p>
      </section>
      <section className="about-values-section" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Our Core Values</h2>
        <div className="values-grid" >
          <div className="value-card" style={{background: props.mode==='dark'?'rgb(33,37,41)':'white'}}>
            <h3>🌿 Wellness</h3>
            <p>We promote holistic well-being through thoughtful practices and resources.</p>
          </div>
          <div className="value-card" style={{background: props.mode==='dark'?'rgb(33,37,41)':'white'}}>
            <h3>💫 Harmony</h3>
            <p>We create a balance between the chaos of modern life and the simplicity of nature.</p>
          </div>
          <div className="value-card" style={{background: props.mode==='dark'?'rgb(33,37,41)':'white'}}>
            <h3>🤝 Community</h3>
            <p>We foster meaningful connections to build a strong sense of belonging.</p>
          </div>
        </div>
      </section>
      <section className="about-offerings" >
        <h2 style={{color: props.mode==='dark'?'white':'black'}} >What We Offer</h2>
        <ul className="offerings-list">
          <li>🧘 Relaxation techniques to calm your mind</li>
          <li>🌻 Nature-inspired wellness tips</li>
          <li>🎉 Engaging community workshops and events</li>
          <li>📖 Curated mindfulness resources</li>
        </ul>
      </section>
      <section className="call-to-action" style={{background: props.mode==='dark'?'rgb(5,37,21)':'linear-gradient(135deg, #66bb6a, #26a69a)'}}>
        <h2>Join the Journey</h2>
        <p>Are you ready to embrace a life filled with peace and positivity?</p>
        <button className="cta-button" style={{color: props.mode==='dark'?'white':'#4e342e'}}>Explore More</button>
      </section>
    </div>
  );
}

export default About;
