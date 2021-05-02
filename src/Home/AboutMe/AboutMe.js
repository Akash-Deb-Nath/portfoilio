import React from 'react';
import aboutMe from '../../images/aboutMe.jpg'

const AboutMe = () => {
    return (
        <div style={{backgroundColor: '#E3E3E3'}} className="row py-5">
            <div style={{fontFamily: 'sans-serif'}} className="col-md-6 px-5 ml-5 mb-5 my-auto">
                <h1 style={{color: 'goldenrod',borderBottom: '3px solid tomato',width: '200px'}} className="mt-5">About me</h1>
                <div className="pt-5">
                    <p>I am Akash Deb Nath.A front-end developer.I can do any kind of responsive website.</p>
                    <p>A self-motivated and enthusiastic web developer with a deep interest in JavaScript. To work in the Software industry with modern web technologies of different local & multinational Software/ IT agencies of Bangladesh and grow rapidly with increasing responsibilities.</p>
                    <p>I have vast experience in React JS,HTML5,CSS3,Javascript,ES6.</p>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <p><span style={{color: 'tomato'}}>Name: </span>Akash Deb Nath</p>
                        <p><span style={{color: 'tomato'}}>Education: </span>B.Sc in EEE</p>
                        <p><span style={{color: 'tomato'}}>Email: </span>akashdebnath1280@gmail.com</p>
                    </div>
                    <div className="col-md-6">
                        <p><span style={{color: 'tomato'}}>Phone: </span>+8801763333236</p>
                        <p><span style={{color: 'tomato'}}>Address: </span>Sunamganj,Bangladesh</p>
                        <p><span style={{color: 'tomato'}}>Hobby: </span>Sleeping</p>
                    </div>
                </div>
            </div>
            <div className="col-md-5">
                <img style={{ width: '100%', border: '5px solid gray' }} src={aboutMe} alt="" />
            </div>
        </div>
    );
};

export default AboutMe;