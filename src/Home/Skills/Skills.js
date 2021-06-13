import React from 'react';
import bootstrap from '../../images/bootstrap.png';
import C from '../../images/C.png';
import cdt from '../../images/cdt.png';
import css from '../../images/css.png';
import expressjs from '../../images/expressjs.png';
import firebase from '../../images/firebase.png';
import git from '../../images/git.png';
import github from '../../images/github.png';
import heroku from '../../images/heroku.png';
import html from '../../images/html.png';
import js from '../../images/js.png';
import meta_ui from '../../images/meta-ui.png';
import mongodb from '../../images/mongodb.png';
import nodejs from '../../images/nodejs.png';
import npm from '../../images/npm.png';
import react_bootstrap from '../../images/react-bootstrap.png';
import react from '../../images/react.png';
import redux from '../../images/redux.png';
import sass from '../../images/sass.png';
import vs_code from '../../images/vs-code.png';
import netlify from '../../images/netlify.png'

const Skills = () => {
    return (
        <div style={{backgroundColor: '#2C2E43'}} className="py-5">
            <h1 style={{borderBottom: '3px solid tomato',width: '100px'}} className="mb-2 mx-auto text-white font-weight-bold">Skills</h1>
            <div className="mx-auto">
                <h4 className="mt-5 mb-3 text-center font-weight-bold text-white">Front End</h4>
                <div data-aos="zoom-in-right" className="d-flex justify-content-center align-items-center text-white">
                    <div className="text-center">
                        <img
                            className="mx-4 my-3"
                            style={{ width: "40px" }}
                            src={react}
                            alt=""
                        />
                        <figcaption>React</figcaption>
                    </div>
                    <div className="text-center">
                        <img
                            className="mx-4 my-3"
                            style={{ width: "40px" }}
                            src={redux}
                            alt=""
                        />
                        <figcaption>Redux</figcaption>
                    </div>
                    <div className="text-center">
                        <img
                            className="mx-4 my-3"
                            style={{ width: "35px", paddingTop: "8px" }}
                            src={js}
                            alt=""
                        />
                        <figcaption>JavaScript</figcaption>
                    </div>
                    <div className="text-center">
                        <img
                            className="mx-4 my-3"
                            style={{ width: "57px" }}
                            src={bootstrap}
                            alt=""
                        />
                        <figcaption>Bootstrap</figcaption>
                    </div>
                    <div className="text-center">
                        <img
                            className="mx-4 my-3"
                            style={{ width: "114px" }}
                            src={react_bootstrap}
                            alt=""
                        />
                        <figcaption>React-Bootstrap</figcaption>
                    </div>
                    <div className="text-center">
                        <img
                            className="mx-4 my-3"
                            style={{ width: "40px", paddingTop: "15px" }}
                            src={meta_ui}
                            alt=""
                        />
                        <figcaption>Material UI</figcaption>
                    </div>
                    <div className="text-center">
                        <img
                            className="mx-4 my-3"
                            style={{ width: "45px", paddingTop: "10px" }}
                            src={sass}
                            alt=""
                        />
                        <figcaption>Sass</figcaption>
                    </div>
                    <div className="text-center">
                        <img
                            className="mx-4 my-3"
                            style={{ width: "33px" }}
                            src={firebase}
                            alt=""
                        />
                        <figcaption>Firebase</figcaption>
                    </div>
                    <div className="text-center">
                        <img
                            className="mx-4 my-3"
                            style={{ width: "40px" }}
                            src={html}
                            alt=""
                        />
                        <figcaption>HTML</figcaption>
                    </div>
                    <div className="text-center">
                        <img
                            className="mx-4 my-3"
                            style={{ width: "36px" }}
                            src={css}
                            alt=""
                        />
                        <figcaption>CSS</figcaption>
                    </div>
                </div>

                <h4 className="mt-5 mb-3 text-center font-weight-bold text-white">Back End</h4>
                <div data-aos="zoom-in-left" className="row d-flex justify-content-center align-items-center text-white">
                    <div className="text-center">
                        <img
                            className="mx-4 my-3"
                            style={{ width: "36px" }}
                            src={nodejs}
                            alt=""
                        />
                        <figcaption>Node.js</figcaption>
                    </div>
                    <div className="text-center">
                        <img
                            className="mx-4 my-3"
                            style={{ width: "40px" }}
                            src={expressjs}
                            alt=""
                        />
                        <figcaption>Express.js</figcaption>
                    </div>
                    <div className="text-center">
                        <img
                            className="mx-4 my-3"
                            style={{ width: "45px" }}
                            src={mongodb}
                            alt=""
                        />
                        <figcaption>MongoDB</figcaption>
                    </div>

                    <div className="text-center">
                        <img
                            className="mx-4 my-3"
                            style={{ width: "40px" }}
                            src={heroku}
                            alt=""
                        />
                        <figcaption>Heroku</figcaption>
                    </div>
                </div>

                <h4 className="mt-5 mb-3 text-center font-weight-bold text-white">Tools</h4>
                <div data-aos="zoom-in-right" className="d-flex justify-content-center align-items-center text-white">
                    <div className="text-center">
                        <img
                            className="mx-4 my-3"
                            style={{ width: "40px" }}
                            src={vs_code}
                            alt=""
                        />
                        <figcaption>Visual Studio Code</figcaption>
                    </div>
                    <div className="text-center">
                        <img
                            className="mx-4 my-3"
                            style={{ width: "43px" }}
                            src={git}
                            alt=""
                        />
                        <figcaption>Git</figcaption>
                    </div>
                    <div className="text-center">
                        <img
                            className="mx-4 my-3"
                            style={{ width: "40px" }}
                            src={github}
                            alt=""
                        />
                        <figcaption>GitHub</figcaption>
                    </div>
                    <div className="text-center">
                        <img
                            className="mx-4 my-3"
                            style={{ width: "38px" }}
                            src={netlify}
                            alt=""
                        />
                        <figcaption>Netlify</figcaption>
                    </div>
                    <div className="text-center">
                        <img
                            className="mx-4 my-3"
                            style={{ width: "75px", paddingTop: "10px" }}
                            src={npm}
                            alt=""
                        />
                        <figcaption>npm</figcaption>
                    </div>
                    <div className="text-center">
                        <img
                            className="mx-4 my-3"
                            style={{ width: "40px" }}
                            src={cdt}
                            alt=""
                        />
                        <figcaption>Chrome Dev Tools</figcaption>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Skills;