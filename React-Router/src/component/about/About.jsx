import React from "react";

import softwareDev from '../../assets/softwareDev.jpg'
import Architech from '../../assets/architech.jpg'
import Maintainance from '../../assets/maintainance.jpg'
import Deployment from '../../assets/deployment.jpg'

const imageStyle = {
    width: "-webkit-fill-available",
    height: "325px",
    borderRadius: "10px",
}

function About() {
    return(
        <div className="container-fluid mt-5 base-page">
            <div className="col-sm-12 top-heading-section">
                <h3 className='col-sm-12 col-md-3 d-flex justify-content-center' style={{color: "#0dcaf0"}}>
                    Software Life Cycle
                </h3>
            </div>
            <div className="col-sm-12 d-flex justify-content-center align-items-end mb-5" style={{gap: "25px"}}>
                <div className="col-sm-12 col-md-2 blank-section">
                </div>
                <div className="col-sm-12 col-md-4 about-section">
                    <h5 className='mb-3'>
                    <i class="fas fa-code mr-3"></i> Software Development
                    </h5>
                    <h6>
                        Software development is the process of creating applications by writing, testing, and maintaining code. It involves designing solutions to meet specific requirements and often follows an iterative development cycle.
                    </h6>
                    <h6>
                        Collaboration among developers, version control, and continuous improvement are integral aspects of the software development lifecycle.
                    </h6>
                    <h6>
                    Effective communication, problem-solving, and adherence to coding standards contribute to the success of software development projects.
                    </h6>
                </div>
                <div className="col-sm-12 col-md-4 image-section">
                    <img src={softwareDev} alt="Software Dev" style={imageStyle} />
                </div>
            </div>
            <div className="col-sm-12 d-flex justify-content-center align-items-end mb-5" style={{gap: "25px"}}>
                <div className="col-sm-12 col-md-4 image-section">
                    <img src={Architech} alt="Software Dev" style={imageStyle} />
                </div>
                <div className="col-sm-12 col-md-4 about-section">
                    <h5 className='mb-3'>
                    <i class="fas fa-database mr-3"></i> Software Architecture
                    </h5>
                    <h6>
                        Software architecture defines the high-level structure of a system, guiding the design of components and their interactions. It ensures scalability, security, and maintainability, providing a blueprint for robust and efficient software solutions.
                    </h6>
                    <h6>
                        Key considerations include designing for scalability, implementing security measures, and ensuring maintainability, with architectural decisions influencing the entire development process.
                    </h6>
                    <h6>
                        Effective communication, problem-solving, and adherence to architectural principles contribute to the creation of resilient and adaptable software systems.
                    </h6>
                </div>

                <div className="col-sm-12 col-md-2 blank-section">
                </div>
            </div>
            <div className="col-sm-12 d-flex justify-content-center align-items-end mb-5" style={{gap: "25px"}}>
                <div className="col-sm-12 col-md-2 blank-section">
                </div>
                <div className="col-sm-12 col-md-4 about-section">
                    <h5 className='mb-3'>
                    <i class="fas fa-wrench mr-3"></i> Software Maintenance
                    </h5>
                    <h6>
                        Software maintenance is the ongoing process of updating, modifying, and enhancing existing software to meet changing needs. It involves troubleshooting, fixing bugs, and optimizing performance to ensure the software remains effective over time.
                    </h6>
                    <h6>
                        Collaboration among maintenance teams, version control, and a proactive approach to issue resolution are crucial elements of the software maintenance lifecycle.
                    </h6>
                    <h6>
                        Effective communication, problem-solving, and adherence to maintenance best practices contribute to the longevity and reliability of software systems.
                    </h6>
                </div>
                <div className="col-sm-12 col-md-4 image-section">
                    <img src={Maintainance} alt="Software Dev" style={imageStyle} />
                </div>
            </div>
            <div className="col-sm-12 d-flex justify-content-center align-items-end mb-5" style={{gap: "25px"}}>
                <div className="col-sm-12 col-md-4 image-section">
                    <img src={Deployment} alt="Software Dev" style={imageStyle} />
                </div>
                <div className="col-sm-12 col-md-4 about-section">
                    <h5 className='mb-3'>
                        <i class="fas fa-cloud-upload-alt mr-3"></i> Software Deployment
                    </h5>
                    <h6>
                        Software deployment is the process of releasing and installing software updates or new features. It involves planning, testing, and executing deployment strategies to ensure a smooth transition from development to production environments.
                    </h6>
                    <h6>
                        Efficient deployment practices, version control, and monitoring mechanisms are essential components of a successful software release cycle.
                    </h6>
                    <h6>
                        Effective communication, problem-solving, and adherence to deployment best practices contribute to the seamless and reliable delivery of software to end-users.
                    </h6>
                </div>
                <div className="col-sm-12 col-md-2 blank-section">
                </div>
            </div>
        </div>
    )
}

export default About;