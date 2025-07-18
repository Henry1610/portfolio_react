import React from 'react';

const Contact = () => (
  <div className="bg-white text-dark  d-flex align-items-center justify-content-center py-5 px-3 font-montserrat shadow-sm rounded">
    <div className="container">
      <div className="mx-auto" style={{ maxWidth: '600px' }}>
        <div className='py-4'>
          <h1 className="display-5 fw-bold text-center mb-2">CONTACT</h1>
          <p className="text-uppercase small text-secondary text-center mb-4">
            Reach Out And Collaborate With Me
          </p>
        </div>


        <div className="d-flex justify-content-center gap-4 mb-4 fs-4">
          <a href="#" aria-label="GitHub" className="text-dark text-decoration-none hover-dark"><i className="fab fa-github"></i></a>
          <a href="#" aria-label="Google" className="text-dark text-decoration-none hover-dark"><i className="fab fa-google"></i></a>
          <a href="#" aria-label="LinkedIn" className="text-dark text-decoration-none hover-dark"><i className="fab fa-linkedin-in"></i></a>
          <a href="#" aria-label="Instagram" className="text-dark text-decoration-none hover-dark"><i className="fab fa-instagram"></i></a>
          <a href="#" aria-label="Facebook" className="text-dark text-decoration-none hover-dark"><i className="fab fa-facebook-f"></i></a>
        </div>

        <form className="d-grid gap-4">
          <input
            type="text"
            placeholder="Name"
            className="form-control"
          />
          <input
            type="email"
            placeholder="Email"
            className="form-control"
          />
          <textarea
            rows="5"
            placeholder="Enter your message"
            className="form-control"
          ></textarea>
          <button
            type="submit"
            className="btn btn-dark text-uppercase fw-semibold py-3 w-auto px-4 mx-auto"
          >
            Send Message
          </button>

        </form>
      </div>
    </div>
  </div>
);


export default Contact; 