import React from 'react';
import './Home.css';
import Main from '../Main/Main';

function Home(props) {
  const features = [
    {
      title: "Holistic Approach",
      description: "We focus on your overall well-being, combining physical, mental, and emotional health.",
      icon: "🌟",
    },
    {
      title: "Expert Guidance",
      description: "Our certified professionals provide expert advice tailored to your unique journey.",
      icon: "🎓",
    },
    {
      title: "Community Support",
      description: "Join a like-minded community that supports and inspires you every step of the way.",
      icon: "🤝",
    },
    {
      title: "Flexible Plans",
      description: "Programs designed to fit your lifestyle and schedule, ensuring sustainable growth.",
      icon: "📅",
    },
  ];

  return (
    <>
    <Main/>
    <div className="home-container" style={{background: props.mode==='dark'?'rgb(33,37,41)':'white'}} >
        
      
      <div className="home-hero" style={{color: props.mode==='dark'?'white':'grey',background: props.mode==='dark'?'rgb(5,37,21)':'linear-gradient(135deg, #e8f5e9, #e0f7fa)'}}>
        <h1>Welcome to Aura Haven</h1>
        <p>Your ultimate destination for holistic wellness and personal transformation.</p>
        <button className="cta-button" style={{color: props.mode==='dark'?'white':'#4e342e'}}>Get Started</button>
      </div>

      
      <div className="home-features">
        <h2 style={{color: props.mode==='dark'?'white':'#558b2f'}} >What Makes Us Special?</h2>
        <div className="features-grid" >
          {features.map((feature, index) => (
            <div key={index} className="feature-card" style={{background: props.mode==='dark'?'rgb(5,37,21)':'linear-gradient(135deg, #e8f5e9, #e0f7fa)'}}>
              <div className="feature-icon" >{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description"  style={{color: props.mode==='dark'?'white':'grey'}}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      
      <div className="home-why-choose" style={{background: props.mode==='dark'?'rgb(5,37,21)':'linear-gradient(135deg, #e8f5e9, #e0f7fa)'}}>
        <h2 style={{color: props.mode==='dark'?'white':'#558b2f'}}>Why Choose Aura Haven?</h2>
        <p style={{color: props.mode==='dark'?'white':'#558b2f'}}>
          At Aura Haven, we prioritize your well-being by creating personalized wellness experiences. 
          From mindfulness to fitness, we blend science and compassion to bring out the best version of you.
        </p>
        <ul style={{color: props.mode==='dark'?'white':'#558b2f'}}>
          <li>Certified and experienced professionals</li>
          <li>Comprehensive wellness programs</li>
          <li>Proven track record of success</li>
          <li>Community-driven support</li>
        </ul>
      </div>

     
      <div className="home-cta" style={{background: props.mode==='dark'?'rgb(5,37,21)':'linear-gradient(135deg, #66bb6a, #26a69a)'}}>
        <h2>Begin Your Journey Today</h2>
        <p>
          Take the first step toward a healthier, happier you. Discover the Aura Haven difference.
        </p>
        <button className="cta-button "style={{color: props.mode==='dark'?'white':'#4e342e'}}>Join Us Now</button>
      </div>
    </div>
    </>
  );
}

export default Home;
