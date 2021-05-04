import React from 'react';
import emailjs from 'emailjs-com';
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_v8qu5hn', 'template_u1ik5lt', e.target, 'user_nPfG6CITBChouL7gx2M2n')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    return (
        <div>
            <h1 style={{ color: 'goldenrod', borderBottom: '3px solid tomato', width: '250px' }} className=" pt-5 text-center mx-auto">Contact Me</h1>
            <div className="row">
                <div className="container col-md-7">
                    <form onSubmit={sendEmail}>
                        <div className="row pt-5 mx-auto">
                            <div className="col-md-8 form-group mx-auto">
                                <input type="text" className="form-control" placeholder="Name" name="name" />
                            </div>
                            <div className="col-md-8 form-group pt-2 mx-auto">
                                <input type="email" className="form-control" placeholder="Email Address" name="email" />
                            </div>
                            <div className="col-md-8 form-group pt-2 mx-auto">
                                <input type="text" className="form-control" placeholder="Subject" name="subject" />
                            </div>
                            <div className="col-md-8 form-group pt-2 mx-auto">
                                <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                            </div>
                            <div className="col-md-8 pt-3 mx-auto">
                                <input type="submit" className="btn btn-info" value="Send Message"></input>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-md-4 mx-3">
                    <h1 className="pt-5"><FontAwesomeIcon className="icon active-icon" icon={faMapMarkerAlt} /> Address</h1>
                    <p>Jamalganj,Sunamganj,Bangladesh</p>
                    <h1 className="pt-2"><FontAwesomeIcon className="icon active-icon" icon={faEnvelope} /> Email</h1>
                    <p>akashdebnath1280@gmail.com</p>
                    <h1 className="pt-2"><FontAwesomeIcon className="icon active-icon" icon={faPhoneAlt} /> Phone</h1>
                    <p>+8801763333236</p>
                    <ul className="social-media list-inline">
                        <li className="list-inline-item"><a href="https://www.facebook.com/akashdebnath.shawon.1" target="_blank" ><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                        <li className="list-inline-item"><a href="https://www.linkedin.com/in/akash-deb-nath-524117211/" target="_blank"><FontAwesomeIcon className="icon" icon={faLinkedin} /></a></li>
                        <li className="list-inline-item"><a href="https://github.com/Akash-Deb-Nath" target="_blank"><FontAwesomeIcon className="icon" icon={faGithub} /></a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Contact;