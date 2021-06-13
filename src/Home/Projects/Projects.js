import React from 'react';
import { Card } from 'react-bootstrap';
import fixTech from '../../images/Screenshot (89).png';
import laptopGallery from '../../images/Screenshot (91).png';
import townDrives from '../../images/Screenshot (94).png';
import './Projects.css';

const Projects = () => {
    return (
        <div className="py-5" style={{ backgroundColor: 'lightslategrey' }}>
            <h1 style={{ color: '#2C2E43', borderBottom: '3px solid goldenrod', width: '220px' }} className="mb-5 mx-auto">My Projects</h1>
            <div>
                <div className="row px-3">
                    <div data-aos="fade-right" className="col-md-4 mb-3">
                        <Card className="mx-auto text-center card" style={{ width: '18rem' }} >
                            <Card.Img variant="top" src={fixTech} />
                            <Card.Body>
                                <Card.Title>Fix Tech</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <button className="btn btn-warning"><a className="link-style" href="https://fix-tech-3018e.web.app/" target="_blank" >Preview</a></button>
                                <button className="btn btn-warning ml-2"><a className="link-style" href="https://github.com/Akash-Deb-Nath/fix-tech-client" target="_blank" >Code</a></button>
                            </Card.Footer>
                        </Card>
                    </div>
                    <div data-aos="zoom-in" className="col-md-4 mb-3">
                        <Card className="mx-auto text-center card" style={{ width: '18rem' }} >
                            <Card.Img variant="top" src={laptopGallery}/>
                            <Card.Body>
                                <Card.Title>Laptop Gallery</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <button className="btn btn-warning"><a className="link-style" href="https://laptop-gallery.web.app/home" target="_blank" >Preview</a></button>
                                <button className="btn btn-warning ml-2"><a className="link-style" href="https://github.com/Akash-Deb-Nath/laptop-gallery-client" target="_blank" >Code</a></button>
                            </Card.Footer>
                        </Card>
                    </div>
                    <div data-aos="fade-left" className="col-md-4 mb-3">
                        <Card className="mx-auto text-center card" style={{ width: '18rem' }} >
                            <Card.Img variant="top" src={townDrives}/>
                            <Card.Body>
                                <Card.Title>Town Drives</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <button className="btn btn-warning"><a className="link-style" href="https://town-drives.web.app/home" target="_blank" >Preview</a></button>
                                <button className="btn btn-warning ml-2"><a className="link-style" href="https://github.com/Akash-Deb-Nath/town-drives" target="_blank" >Code</a></button>
                            </Card.Footer>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;