import React from 'react';

const Home = () => (
  <section className="container-fluid min-vh-100 d-flex align-items-start justify-content-center pt-5 bg-white">
    <div className="row w-100 align-items-center justify-content-center">
      
      {/* Text bên trái */}
      <div className="col-lg-6 text-lg-end text-center mb-5 mb-lg-0">
        <div className="mb-2 text-info fw-bold" style={{ fontSize: '1.1rem' }}>
          Hello World, I&apos;m
        </div>
        <h1 className="fw-bold display-3 text-dark">Nguyen Truong</h1>
        <h3 className="fw-normal text-dark mb-3">
          Web <span className="text-info fw-bold">Developer</span>
        </h3>
        <div className="text-secondary fs-5">
          Welcome to My personal portfolio. <span role="img" aria-label="wave">👋🏻</span>
        </div>
      </div>
      
      {/* Ảnh avatar bên phải */}
      <div className="col-lg-6 d-flex justify-content-lg-start justify-content-center">
        <div className="avatar-glow position-relative">
          <img
            src="/images/z6946900614155_02e44d2ebc84aa97cc418a202a321445.jpg" 
            alt="Avatar"
            className="rounded-circle border border-info border-5"
            style={{
              width: 400,
              height: 400,
              objectFit: 'cover',
              boxShadow: '0 0 40px 8px rgba(13,202,240,0.6)',
            }}
          />
        </div>
      </div>
    </div>
  </section>
);

export default Home;
