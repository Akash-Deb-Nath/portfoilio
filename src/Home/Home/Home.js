import React from 'react';
import ParticlesBackground from '../../ParticlesBackground';
import AboutMe from '../AboutMe/AboutMe';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import MyService from '../MyService/MyService';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className="App" style={{ position: 'relative', overflow: "hidden" }}>
                <div style={{ position: 'absolute' }}>
                    <ParticlesBackground></ParticlesBackground>
                </div>
                <div className="home-header">
                    <Header></Header>
                </div>
            </div>
            <AboutMe></AboutMe>
            <MyService></MyService>
            <Skills></Skills>
            <Projects></Projects>
            <div style={{ position: 'relative', overflow: "hidden" }}>
                <div style={{ position: 'absolute' }}>
                    <ParticlesBackground></ParticlesBackground>
                </div>
                <div className="home-header">
                    <Contact></Contact>
                </div>
            </div>
        </div>
    );
};

export default Home;