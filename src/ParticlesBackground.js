import React from 'react';
import Particles from 'react-particles-js';
import particlesConfig from './Config/particlesConfig';

const ParticlesBackground = () => {
    return (
        <div style={{ backgroundColor: '#2C2E43' }}>
            <Particles height="200vh" width="100vw" params={particlesConfig}></Particles>
        </div>
    );
};

export default ParticlesBackground;