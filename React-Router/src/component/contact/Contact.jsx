import React from 'react';

const ContactUs = () => {
  return (
    <div className="container mt-5 base-page">
      <div className="row">
        <div className="col-md-6" style={{padding: '20px', background: 'azure'}}>
          <h2>Contact Us</h2>
          <p>
            We'd love to hear from you! Please fill out the form below, and we'll get back to you as soon as possible.
          </p>
          <address>
            <strong>TechnoFaad Headquarters</strong><br />
            123 Tech Street<br />
            Cityville, TECH 12345<br />
            Email: <a href="mailto:info@technofaad.com">info@technofaad.com</a><br />
            Phone: +1 (123) 456-7890
          </address>
        </div>
        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Your Name</label>
              <input type="text" className="form-control" id="name" name="name" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Your Email</label>
              <input type="email" className="form-control" id="email" name="email" required />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Your Message</label>
              <textarea className="form-control" id="message" name="message" rows="4" required></textarea>
            </div>
            <div className='d-flex justify-content-end'>
              <button type="submit" className="btn btn-primary"> <i class="fas fa-paper-plane mr-4"></i> Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
