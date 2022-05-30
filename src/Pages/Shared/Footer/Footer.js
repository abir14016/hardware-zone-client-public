import React from 'react';
import { Link } from 'react-router-dom';
import twitter from '../../../images/social/twitter-logo.png';
import github from '../../../images/social/twitter-logo.png';
import facebook from '../../../images/social/facebook-logo.png';
import instagram from '../../../images/social/instagram-logo.png';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-dark mt-5">
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-6 item">
                            <Link className='footer-link' to="/dashboard">dashboard</Link>
                            <ul>
                                <li>Web Development</li>
                                <li>Development</li>
                                <li>Hosting</li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-6 item">
                            <Link className='footer-link' to="/myportfolio">Portfolio</Link>
                            <ul>
                                <li>Company</li>
                                <li>Team</li>
                                <li>Careers</li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-6 item">
                            <Link className='footer-link' to="/blogs">Blogs</Link>
                            <ul>
                                <li>Company</li>
                                <li>Team</li>
                                <li>Careers</li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-6 item text">
                            <Link className='footer-link' to="/blogs">Blogs</Link>
                            <p>You can store your tools anything you want</p>

                        </div>
                        <div className="icon-container d-flex justify-content-center">
                            <a className='px-3 py-2 footer-social-logo' href="https://github.com/abir14016"><img style={{ width: 50 }} src={github} alt="" /></a>
                            <a className='px-3 py-2 footer-social-logo' href="https://www.facebook.com/mdabir.hassan.543"><img style={{ width: 50 }} src={facebook} alt="" /></a>
                            <a className='px-3 py-2 footer-social-logo' href="https://twitter.com/abir14016"><img style={{ width: 50 }} src={twitter} alt="" /></a>
                            <a className='px-3 py-2 footer-social-logo' href="https://www.instagram.com/abir14016/?hl=en"><img style={{ width: 50 }} src={instagram} alt="" /></a>
                        </div>
                    </div>
                    <p className="copyright">HardwareZone.com@2022</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;