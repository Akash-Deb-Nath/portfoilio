import React from 'react';
import pic from '../../images/pic.png'
import TypeWriter from './TypeWriter';
import './Header.css';

const Header = () => {
    return (
        <div className="container row py-5 mx-auto">
            <div style={{ textAlign: 'justify' }} className="col-md-5 text-white my-auto mr-5">
                <div className="my-5">
                    <h1>Hello!</h1>
                    <h1>I'm<span style={{ color: 'tomato'}}> Akash Deb Nath</span></h1>
                    <TypeWriter></TypeWriter><br/>
                    <button className="btn-style"><a className="btn-link-style" href="https://drive.google.com/uc?export=download&id=1dygfFLAlbuLO7mCbEhbAALBuv51V12WD">Download Resume</a></button>
                </div>
            </div>
            <div className="col-md-5 ml-5">
                <img style={{ width: '100%' }} src={pic} alt="" />
            </div>
        </div>
    );
};

export default Header;