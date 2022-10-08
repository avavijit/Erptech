import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from '../../assets/images/logo.png'
import { getHomeSettings } from '../../store/MainRedux'
import Config from "../../common/Config";
import { useSelector, useDispatch } from 'react-redux'

function Header() {
    const token = Config.token
    const dispatch = useDispatch()
    const homeSettings = useSelector((state) => state.main.homeSetting)

    useEffect(() => {
        dispatch(getHomeSettings({ token }))
    }, []);

    return (
        <header className="header default">
            <div className="topbar">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="d-block d-md-flex align-items-center text-center">
                                <div className="me-4 d-inline-block py-1">
                                    <a href={`mailto:${homeSettings?.email}`}><i className="far fa-envelope me-2 fa-flip-horizontal text-primary"></i>{homeSettings?.email}</a>
                                </div>
                                <div className="me-auto d-inline-block py-1">
                                    <a href={homeSettings?.address_link} target={'_blank'}><i className="fas fa-map-marker-alt text-primary me-2"></i>{homeSettings?.address}</a>
                                </div>
                                <div className="d-inline-block py-1">
                                    <ul className="list-unstyled">
                                        <li><NavLink to="/page/about-us">About Us</NavLink></li>
                                        <li><NavLink to="/contact-us">Contact Us</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="navbar bg-white navbar-static-top navbar-expand-lg">
                <div className="container-fluid">
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target=".navbar-collapse"><i className="fas fa-align-left"></i></button>
                    <NavLink to="/" className="navbar-brand">
                        <img className="img-fluid" src={homeSettings?.logo ? Config.frappe_url + '/' + homeSettings.logo : logo} alt="logo" />
                    </NavLink>
                    <div className="navbar-collapse collapse">
                        <ul className="nav navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>

                            <li className="dropdown nav-item">
                                <a className="nav-link" data-bs-toggle="dropdown">Company</a>
                                <ul className="dropdown-menu">
                                    <li><NavLink className="dropdown-item" to="/page/about-us">About Us<i className="fas fa-arrow-right"></i></NavLink></li>
                                    <li><NavLink to="/page/careers">Careers<i className="fas fa-arrow-right"></i></NavLink></li>
                                    <li><NavLink to="/page/faqs">Faq<i className="fas fa-arrow-right"></i></NavLink></li>
                                    <li><NavLink to="/page/privacy-policy">Privacy Policy<i className="fas fa-arrow-right"></i></NavLink></li>
                                    <li><NavLink to="/page/terms-conditions">Terms & Conditions<i className="fas fa-arrow-right"></i></NavLink></li>
                                    <li><NavLink to="/page/how-we-work">How We Work<i className="fas fa-arrow-right"></i></NavLink></li>
                                    <li><NavLink to="/page/our-team">Our Team<i className="fas fa-arrow-right"></i></NavLink></li>
                                    <li><NavLink to="/page/mission-vision">Mission Vision<i className="fas fa-arrow-right"></i></NavLink></li>
                                    <li><NavLink to="/page/our-value">Our Value<i className="fas fa-arrow-right"></i></NavLink></li>
                                </ul>
                            </li>
                            <li className="dropdown nav-item">
                                <a className="nav-link" data-bs-toggle="dropdown">Services</a>
                                <ul className="dropdown-menu">
                                    <li><NavLink className="dropdown-item" to="/service/erp-development">ERP Development<i className="fas fa-arrow-right"></i></NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/service/software-development">Software Development<i className="fas fa-arrow-right"></i></NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/service/mobile-application">Mobile Application<i className="fas fa-arrow-right"></i></NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/service/digital-marketing">Digital Marketing<i className="fas fa-arrow-right"></i></NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/service/web-development">Web Development<i className="fas fa-arrow-right"></i></NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/service/ecommerce-development">Ecommerce Development<i className="fas fa-arrow-right"></i></NavLink></li>
                                </ul>
                            </li>

                            <li className="dropdown nav-item">
                                <a className="nav-link" data-bs-toggle="dropdown">Product</a>
                                <ul className="dropdown-menu">
                                    <li><NavLink className="dropdown-item" to="/product/hospital-management">Hospital Management<i className="fas fa-arrow-right"></i></NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/product/school-management">School Management<i className="fas fa-arrow-right"></i></NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/product/hotel-management">Hotel Management<i className="fas fa-arrow-right"></i></NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/product/taxi-app">Taxi App<i className="fas fa-arrow-right"></i></NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/product/lead-app">Lead App<i className="fas fa-arrow-right"></i></NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/product/lab-app">Lab App<i className="fas fa-arrow-right"></i></NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/product/laundry-app">Laundry App<i className="fas fa-arrow-right"></i></NavLink></li>
                                </ul>
                            </li>
                            <li className="nav-item"><NavLink className="nav-link" to="/portfolio">Portfolio</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" to="/blogs">Blogs</NavLink></li>

                        </ul>
                    </div>
                    <div className="d-none d-sm-flex ms-auto me-5 me-lg-0 pe-4 pe-lg-0">
                        <ul className="nav ms-1 ms-lg-2 align-self-center">
                            <li className="contact-number nav-item pe-4 ">
                                <a className="fw-bold" href={`whatsapp://tel:${homeSettings?.phone}`}><i className="fab fa-whatsapp pe-2"></i>{homeSettings?.phone}</a>
                            </li>
                            <li className="header-search nav-item">
                                <div className="search">
                                    <a className="search-btn not_click"></a>
                                    <div className="search-box not-click">
                                        <form action="#" method="get">
                                            <input type="text" className="not-click form-control" name="search" placeholder="Search.." />
                                            <button className="search-button" type="submit"> <i className="fa fa-search not-click"></i></button>
                                        </form>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;