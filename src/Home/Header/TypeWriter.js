import React from 'react';
import Typewriter from "typewriter-effect"

const TypeWriter = () => {
    return (
        <Typewriter
            options={{
                strings: [
                    "Web Developer",
                    "JS Developer",
                    "Content Writter.",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
};

export default TypeWriter;