import React from 'react';

const basePage = {
    margin: '60px 0 50px',
}
const contactWelcomeMainHeading = {
    fontSize: '4.125rem',
    fontFamily: 'HouschkaMedium',
    fontWeight: '500',
};
const contactWelcomeSubHeading = {
    fontSize: '1.375rem',
    color: '#b4b4b8',
    fontFamily: 'BasisRegular',
    fontWeight: '100',
    letterSpacing: '.03125rem',
};

const boxStyle = {
    height: '8.5rem',
    textAlign: 'center',
    borderRadius: '0.3125rem',
    border: '1px solid #494c4d',
    padding: '2.3rem',
    cursor: 'pointer',
};
  
  

const ContactUs = () => {
  return (
    <div className="container base-page h-100 mx-auto p-0 col-lg-10 col-md-11 col-sm-11 col-11" style={basePage}>
      <div className="row mb-4">
        <div className="col-lg-7 col-md-12 pb-4" style={contactWelcomeMainHeading}>
            What's on your mind ? 
        </div>
        <div className="col-lg-5 col-md-12 pt-lg-4" style={contactWelcomeSubHeading}>
            We’re here to help! Tell us what you’re looking for and we’ll get you connected to the right people.
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-lg-4 col-md-12 col-sm-12 pb-4">
            <div className='d-flex flex-column justify-content-center align-items-center' style={boxStyle}>
                <div className="icon mb-2"><i class="far fa-building fa-2x"></i></div>
                <div className="text">Request for Services</div>
            </div>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 pb-4">
            <div className='d-flex flex-column justify-content-center align-items-center' style={boxStyle}>
                <div className="icon mb-2"><i class="fas fa-chart-line fa-2x"></i></div>
                <div className="text">Investor Information</div>
            </div>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 pb-4">
            <div className='d-flex flex-column justify-content-center align-items-center' style={boxStyle}>
                <div className="icon mb-2"><i class="fas fa-photo-video fa-2x"></i></div>
                <div className="text">Media Content</div>
            </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 p-3">
          <h2 style={{fontFamily: 'HouschkaMedium'}}>Contact Us</h2>
          <p>
            TechnoFaad is just a message or call away – reach out to us for all your tech needs. Innovation begins with a conversation.
          </p>
          <p>
            Connect with TechnoFaad at our headquarters or through email and phone. Your doorway to tech solutions is right here.
          </p>
          <address>
            <strong>TechnoFaad Headquarters</strong><br />
            123 Tech Street<br />
            Cityville, TECH 12345<br />
            Email: <a href="mailto:info@technofaad.com">info@technofaad.com</a><br />
            Phone: +1 (123) 456-7890
          </address>
        </div>
        <div className="col-md-6 p-3 card">
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
