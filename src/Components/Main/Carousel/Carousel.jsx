import React from 'react';

export default function Carousel(props) {
  return (
    <div>
      <div id="carouselExampleDark" className="carousel carousel-dark slide mt-5">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img
              src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGFpciUyMHNhbG9ufGVufDB8fDB8fHww"
              className="d-block w-100"
              alt="Saloon-img"
              style={{ height: "400px", objectFit: "cover" }}
            />
            <div className="carousel-caption">
                <h5 className="display-4 fw-bold text-success">Unisex Salon & Spa at Its Best</h5>
                <p className="fs-5 text-light bg-dark d-inline-block px-2 rounded">From haircuts to massages, we cater to your every need.</p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src="https://canvashotel.com.vn/files/files/massage-couple.jpg"
              className="d-block w-100"
              alt="Saloon-img"
              style={{ height: "400px", objectFit: "cover" }}
            />
            <div className="carousel-caption ">
              <h5 className="display-4 fw-bold text-success">Relax, Rejuvenate, and Glow</h5>
              <p className="fs-5 text-light bg-dark d-inline-block px-2 rounded">Indulge in spa treatments that revitalize your body and mind.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://cdn1.treatwell.net/images/view/v2.i9997291.w1280.h800.x796FA723/"
              className="d-block w-100"
              alt="Saloon-img"
              style={{ height: "400px", objectFit: "cover" }}
            />
            <div className="carousel-caption ">
              <h5 className="display-4 fw-bold text-success">Pamper Yourself, Because You Deserve It</h5>
              <p className="fs-5 text-light bg-dark d-inline-block px-2 rounded">Experience luxury haircare and styling tailored for all genders.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
