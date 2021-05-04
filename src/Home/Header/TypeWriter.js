import React from 'react';
import Typewriter from "typewriter-effect"

const TypeWriter = () => {
    return (
        <Typewriter
            options={{
                strings: [
                    "Web Developer",
                    "Front-end Developer",
                    "Programmer.",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
};

export default TypeWriter;