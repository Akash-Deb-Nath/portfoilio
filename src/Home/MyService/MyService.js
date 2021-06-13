import React from 'react';
import { Card } from 'react-bootstrap';
import './MyService.css';

const MyService = () => {
    return (
        <div style={{ backgroundColor: 'lightslategrey', width: '100%' }} className="py-5">
            <h1 style={{ borderBottom: '3px solid goldenrod', width: '200px' }} className="mb-5 mx-auto">My Service</h1>
            <div>
                <div data-aos="zoom-in" className="mb-5">
                    <Card className="mx-auto text-center card" style={{ width: '22rem' }}>
                        <Card.Body>
                            <Card.Title>Client Satisfaction</Card.Title>
                            <Card.Title className="mx-auto text-center" style={{ borderBottom: '3px solid goldenrod', width: '100px' }}></Card.Title>
                            <Card.Text>
                                Client satisfaction is my main goal.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="row px-3">
                    <div data-aos="zoom-in-right" className="col-md-4 mb-5">
                        <Card className="mx-auto text-center card" style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Web Design</Card.Title>
                                <Card.Title className="mx-auto text-center" style={{ borderBottom: '3px solid goldenrod', width: '100px' }}></Card.Title>
                                <Card.Text>
                                    I can do any kind of website design.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div data-aos="zoom-in" className="col-md-4 mb-5">
                        <Card className="mx-auto text-center card" style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Pixel Perfect Design</Card.Title>
                                <Card.Title className="mx-auto text-center" style={{ borderBottom: '3px solid goldenrod', width: '100px' }}></Card.Title>
                                <Card.Text>
                                    Pixel perfect design is my main goal.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div data-aos="zoom-in-left" className="col-md-4 mb-5">
                        <Card className="mx-auto text-center card" style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Fully Responsive</Card.Title>
                                <Card.Title className="mx-auto text-center" style={{ borderBottom: '3px solid goldenrod', width: '100px' }}></Card.Title>
                                <Card.Text>
                                    I can do any kind of responsive website.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div data-aos="zoom-in" className="mb-5">
                    <Card className="mx-auto text-center card" style={{ width: '22rem' }}>
                        <Card.Body>
                            <Card.Title>Web Development</Card.Title>
                            <Card.Title className="mx-auto text-center" style={{ borderBottom: '3px solid goldenrod', width: '100px' }}></Card.Title>
                            <Card.Text>
                                I can do any kind of responsive website.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default MyService;