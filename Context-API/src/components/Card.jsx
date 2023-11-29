import React from "react";
import ProfilePic from '../assets/ProfilePic.png'

const CardWidth = {
    width: '18rem',
}

export const Card = ()=>{
    return (
        <div className="card" style={CardWidth}>
            <img src={ProfilePic} className="card-img-top" alt="Profile Img"/>
            <div className="card-body">
                <h5 className="card-title">Sourav Mahato</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div className="d-flex justify-content-end align-items-center">
                    <a href="#" className="btn btn-primary ml-auto">Subscribe</a>
                </div>
            </div>
        </div>
    )
}