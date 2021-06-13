import React from 'react';
import aboutMe from '../../images/aboutMe.jpg'

const AboutMe = () => {
    return (
        <div style={{maxWidth: '100%',
        overflowX: 'hidden'}} className="py-5">
            <h1 style={{ color: '#aa2b1d', borderBottom: '3px solid tomato', width: '185px' }} className="mx-auto mt-5">About me</h1>
            <div className="row">
                <div style={{ fontFamily: 'sans-serif' }} className="col-md-6 px-5 ml-5 mb-5 my-auto">
                    <div className="pt-5">
                        <p>I am Akash Deb Nath.A front-end developer.I can do any kind of responsive website.</p>
                        <p>I am a student of the EEE department, I started my journey in programming in 2018 and I started working in web development in 2020. I have done a lot of personal and corporate projects through my hard work.</p>
                        <p>I have vast experience in React JS,HTML5,CSS3,Javascript,ES6.</p>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <p><span style={{ color: '#aa2b1d', fontWeight: 'bold' }}>Name: </span>Akash Deb Nath</p>
                            <p><span style={{ color: '#aa2b1d', fontWeight: 'bold' }}>Education: </span>B.Sc in EEE</p>
                            <p><span style={{ color: '#aa2b1d', fontWeight: 'bold' }}>Email: </span>akash.dns12345@gmail.com</p>
                        </div>
                        <div className="col-md-6">
                            <p><span style={{ color: '#aa2b1d', fontWeight: 'bold' }}>Phone: </span>+8801763333236</p>
                            <p><span style={{ color: '#aa2b1d', fontWeight: 'bold' }}>Address: </span>Sunamganj,Bangladesh</p>
                            <p><span style={{ color: '#aa2b1d', fontWeight: 'bold' }}>Hobby: </span>Sleeping</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-5 ml-5 pl-5 d-flex align-items-center">
                    <img className="rounded-circle" style={{ width: '75%', height: '75%' }} src={aboutMe} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AboutMe;