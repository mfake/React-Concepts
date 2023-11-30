import React from 'react';

const socialMediaSection = {
    display: 'flex',
    justifyContent: 'end',
    alignitems: 'end',
    gap: '5px',
}

const bulkImgSize={
    width: '350px',
    height: '225px',
    borderRadius: "5px"
}

import photoOne from '../../assets/photoOne.jpg'
import photoTwo from '../../assets/photoTwo.jpg'
import photoThree from '../../assets/photoThree.jpg'
import photoFour from '../../assets/photoFour.jpg'

export function Home() {
  return (
    <section className="container-fluid mt-5 base-page">
        <div className="row g-0">
            <div className="col-lg-6">
                <div className="pt-2" style={{padding: '20px'}}>
                    <section>
                        <h2>Welcome to TechnoFaad !</h2>
                        <p>
                            Your Gateway to Technological Excellence! At TechnoFaad, we are committed to delivering cutting-edge web applications that redefine user experiences.
                        </p>
                    </section>

                    <section>
                        <h3>Explore Technological Innovation</h3>
                        <p>
                            Dive into a seamless and intuitive interface designed to simplify your digital journey. From dynamic features to responsive designs.
                        </p>
                    </section>

                    <section>
                        <h3>Join Our Technological Community</h3>
                        <p>
                            Join our community and stay ahead with the latest technological advancements, trends, and insights.
                        </p>
                    </section>

                    <section>
                        <h2>TechnoFaad: Where Technology Meets the Future</h2>
                        <p>
                            TechnoFaad is not just a web application; it's a technological ecosystem where ideas thrive, and possibilities unfold. Experience the future of the digital landscape with TechnoFaad.
                        </p>
                    </section>
                    <section className='social-handles' style={socialMediaSection}>
                        <a href="/"> <i className="fab fa-facebook-square fa-2x"></i></a>
                        <a href="/"> <i className="fab fa-instagram-square fa-2x"></i></a>
                        <a href="#"> <i className="fab fa-twitter-square fa-2x"></i></a>
                        <a href="#"> <i className="fab fa-github-square fa-2x"></i></a>
                    </section>
                </div>
            </div>
            <div className="col-lg-6">
                <img
                    className="mx-auto h-100 w-100 rounded-md object-cover pr-8"
                    src="https://images.unsplash.com/photo-1630673245362-f69d2b93880e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                    alt="" style={{ borderRadius: "5px"}}
                />
            </div>
        </div>
        <div className="col-sm-12 d-flex mt-5">
            <div className="col-sm-12 col-md-3">
                <img className="" src={photoOne} alt=""  style={bulkImgSize} />
            </div>
            <div className="col-sm-12 col-md-3">
                <img className="" src={photoTwo} alt="" style={bulkImgSize} />
            </div>
            <div className="col-sm-12 col-md-3">
                <img className="" src={photoThree} alt=""style={bulkImgSize} />
            </div>
            <div className="col-sm-12 col-md-3">
                <img className="" src={photoFour} alt="" style={bulkImgSize}/>
            </div>
        </div> 
    </section>
  );
}

export default Home;
