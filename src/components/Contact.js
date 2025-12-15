import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  
  const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
  console.log(SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY);
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error('Vui lòng điền đầy đủ thông tin!');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error('Email không hợp lệ!');
      return;
    }

    setIsLoading(true);

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Nguyen Truong'
        },
        PUBLIC_KEY
      );

      toast.success('Tin nhắn đã được gửi thành công! Tôi sẽ phản hồi sớm nhất có thể.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('Có lỗi xảy ra! Vui lòng thử lại sau hoặc liên hệ trực tiếp qua email.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white text-dark d-flex align-items-center justify-content-center py-5 px-3 font-montserrat shadow-sm rounded">
      <div className="container">
        <div className="mx-auto" style={{ maxWidth: '600px' }}>
          <div className='py-4'>
            <h1 className="display-6 display-md-5 fw-bold text-center mb-2">CONTACT</h1>
            <p className="text-uppercase small text-secondary text-center mb-4">
              Reach Out And Collaborate With Me
            </p>
          </div>

          <div className="d-flex justify-content-center gap-3 gap-md-4 mb-4 fs-4">
            <a href="https://github.com/Henry1610" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-dark text-decoration-none hover-dark"><i className="fab fa-github"></i></a>
            <a href="trannguyentruong6@gmail.com" aria-label="Email" className="text-dark text-decoration-none hover-dark"><i className="fab fa-google"></i></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-dark text-decoration-none hover-dark"><i className="fab fa-instagram"></i></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-dark text-decoration-none hover-dark"><i className="fab fa-facebook-f"></i></a>
          </div>

          <form className="d-grid gap-3 gap-md-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="form-control"
              value={formData.name}
              onChange={handleChange}
              disabled={isLoading}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              disabled={isLoading}
              required
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Enter your message"
              className="form-control"
              value={formData.message}
              onChange={handleChange}
              disabled={isLoading}
              required
            ></textarea>
            <button
              type="submit"
              className="btn btn-dark text-uppercase fw-semibold py-2 py-md-3 w-auto px-4 mx-auto"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact; 