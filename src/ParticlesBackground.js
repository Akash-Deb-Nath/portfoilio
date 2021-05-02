import React from 'react';
import Particles from 'react-particles-js';
import particlesConfig from './Config/particlesConfig';

const ParticlesBackground = () => {
    return (
        <div style={{ backgroundColor: '#6C757D' }}>
            <Particles height="140vh" width="100vw" params={particlesConfig}></Particles>
        </div>
    );
};

export default ParticlesBackground;