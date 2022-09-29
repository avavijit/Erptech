import React from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button, DatePicker, Switch, Layout } from 'antd';
import { useTheme } from "../../theme/use-theme";
import logo from '../../assets/images/logo.png'

function Footer() {
    const { t, i18n } = useTranslation();
    let navigate = useNavigate();
    const [darkMode, setDarkMode] = useTheme();
    const langChange = () => {
        let lang = (i18n.language === 'de') ? 'en' : 'de'
        i18n.changeLanguage(lang)
    }
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-sm-3">
                            <NavLink to="/"><img className="img-fluid" src={logo} alt="logo" /></NavLink>
                        </div>
                        <div className="col-sm-9 text-sm-end mt-4 mt-sm-0">
                            <ul className="list-unstyled mb-0 social-icon">
                                <li><a href="index.html#"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="index.html#"><i className="fab fa-twitter"></i></a></li>
                                <li><a href="index.html#"><i className="fab fa-linkedin-in"></i></a></li>
                                <li><a href="index.html#"><i className="fab fa-github"></i></a></li>
                                <li><a href="index.html#"><i className="fab fa-dribbble"></i></a></li>
                                <li><a href="index.html#"><i className="fab fa-behance"></i></a></li>
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
                                <li><a href="index.html#">Digital Marketing</a></li>
                                <li><a href="index.html#">Web Development</a></li>
                                <li><a href="index.html#">Software Development</a></li>
                                <li><a href="index.html#">ERP Development</a></li>
                                {/* <li><a href="index.html#">Process Automation</a></li> */}
                            </ul>
                            <ul className="list-unstyled mb-0">
                                <li><a href="index.html#">Hospital Management</a></li>
                                <li><a href="index.html#">Hotel Management</a></li>
                                <li><a href="index.html#">Taxi App</a></li>
                                <li><a href="index.html#">Lead Plus</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-2 mb-4 mb-lg-0">
                        <h5 className="text-primary mb-2 mb-sm-4">Company</h5>
                        <div className="footer-link">
                            <ul className="list-unstyled mb-0">
                                <li><a href="index.html#">About</a></li>
                                <li><a href="index.html#">portfolio</a></li>
                                <li><a href="index.html#">Blog</a></li>                       
                                {/* <li><a href="index.html#">Locations</a></li> */}
                                <li><a href="index.html#">Careers <span className="badge bg-success ms-2">We're hiring</span></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-2 mb-4 mb-sm-0">
                        <h5 className="text-primary mb-2 mb-sm-4">Support</h5>
                        <div className="footer-link">
                            <ul className="list-unstyled mb-0">
                                <li><a href="index.html#">Contact Us</a></li>
                                <li><a href="index.html#">FAQs</a></li>
                                <li><a href="index.html#">Terms & Conditions</a></li>
                                <li><a href="index.html#">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                        <div className="footer-contact-info">
                            <h5 className="text-primary mb-3">Contact ERP TECH</h5>
                            <div className="contact-address">
                                <div className="contact-item">
                                    <label>Address:</label>
                                    <p>Plot No. 1808, 1st floor, Mancheswar Hitech Square, Behind Koel Care Bhubaneswar, Odisha-751017, India</p>
                                </div>
                                <div className="contact-item">
                                    <label>Phone:</label>
                                    <h4 className="mb-0 fw-bold"><a href="index.html#">+91 8637272263</a></h4>
                                </div>
                                <div className="contact-item">
                                    <label>Email:</label>
                                    <a className="text-dark" href="index.html#">erptechin@gmail.com</a>
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