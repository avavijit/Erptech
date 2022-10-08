import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux'
import Config from "../../common/Config";
import logo from '../../assets/images/logo.png'

function Footer() {
    const homeSettings = useSelector((state) => state.main.homeSetting)
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-sm-3">
                            <NavLink to="/"><img className="img-fluid" src={homeSettings?.logo ? Config.frappe_url + '/' + homeSettings.logo : logo} alt="logo" /></NavLink>
                        </div>
                        <div className="col-sm-9 text-sm-end mt-4 mt-sm-0">
                            <ul className="list-unstyled mb-0 social-icon">
                                <li><a href={`https://www.facebook.com/${homeSettings?.facebook}`}><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href={`https://twitter.com/${homeSettings?.twitter}`}><i className="fab fa-twitter"></i></a></li>
                                <li><a href={`https://www.linkedin.com/company/${homeSettings?.linkedin}`}><i className="fab fa-linkedin-in"></i></a></li>
                                <li><a href={`https://www.instagram.com/${homeSettings?.instagram}`}><i className="fab fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <hr className="my-4 my-sm-5 pb-0" />
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-4 mb-4 mb-lg-0">
                        <h5 className="text-primary mb-2 mb-sm-4">Services</h5>
                        <div className="footer-link">
                            <ul className="list-unstyled mb-0">
                                <li><NavLink to="/service/digital-marketing">Digital Marketing</NavLink></li>
                                <li><NavLink to="/service/web-development">Web Development</NavLink></li>
                                <li><NavLink to="/service/software-development">Software Development</NavLink></li>
                                <li><NavLink to="/service/erp-development">ERP Development</NavLink></li>
                            </ul>
                            <ul className="list-unstyled mb-0">
                                <li><NavLink to="/product/hospital-management">Hospital Management</NavLink></li>
                                <li><NavLink to="/product/school-management">School Management</NavLink></li>
                                <li><NavLink to="/product/taxi-app">Taxi App</NavLink></li>
                                <li><NavLink to="/product/lab-app">Lab App</NavLink></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-2 mb-4 mb-lg-0">
                        <h5 className="text-primary mb-2 mb-sm-4">Company</h5>
                        <div className="footer-link">
                            <ul className="list-unstyled mb-0">
                                <li><NavLink to="/page/about-us">About</NavLink></li>
                                <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                                <li><NavLink to="/page/blogs">Blog</NavLink></li>
                                <li><NavLink to="/page/careers">Careers <span className="badge bg-success ms-2">We're hiring</span></NavLink></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-2 mb-4 mb-sm-0">
                        <h5 className="text-primary mb-2 mb-sm-4">Support</h5>
                        <div className="footer-link">
                            <ul className="list-unstyled mb-0">
                                <li><NavLink to="/contact-us">Contact Us</NavLink></li>
                                <li><NavLink to="/page/faqs">FAQs</NavLink></li>
                                <li><NavLink to="/page/terms-conditions">Terms & Conditions</NavLink></li>
                                <li><NavLink to="/page/privacy-policy">Privacy Policy</NavLink></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                        <div className="footer-contact-info">
                            <h5 className="text-primary mb-3">Contact ERP TECH</h5>
                            <div className="contact-address">
                                <div className="contact-item">
                                    <label>Address:</label>
                                    <p>{homeSettings?.full_address}</p>
                                </div>
                                <div className="contact-item">
                                    <label>Phone:</label>
                                    <h4 className="mb-0 fw-bold"><a href={`whatsapp://tel:${homeSettings?.phone}`}>{homeSettings?.phone}</a></h4>
                                </div>
                                <div className="contact-item">
                                    <label>Email:</label>
                                    <a className="text-dark" href={`mailto:${homeSettings?.email}`}>{homeSettings?.email}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom py-sm-5 py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <p className="mb-0">©Copyright 2022 <NavLink to="/">ERP TECH</NavLink> All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;