import React from "react";
import { Button, DatePicker, Switch } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import Icon from 'react-web-vector-icons';
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../theme/use-theme";


function Home() {
    let navigate = useNavigate();
    const { t } = useTranslation();
    return (
        <>
            <header class="header default">
                <div class="topbar">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-12">
                                <div class="d-block d-md-flex align-items-center text-center">
                                    <div class="me-4 d-inline-block py-1">
                                        <a href="index.html#"><i class="far fa-envelope me-2 fa-flip-horizontal text-primary"></i>erptechin@gmail.com</a>
                                    </div>
                                    <div class="me-auto d-inline-block py-1">
                                        <a href="tel:1-800-555-1234"><i class="fas fa-map-marker-alt text-primary me-2"></i>Mancheswar Hitech Square, Behind Koel Care Bhubaneswar</a>
                                    </div>
                                    <div class="d-inline-block py-1">
                                        <ul class="list-unstyled">
                                            <li><a href="careers.html">Careers</a></li>
                                            <li><a href="blog.html">News & Media</a></li>
                                            <li><a href="faq.html">FAQ</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <nav class="navbar bg-white navbar-static-top navbar-expand-lg">
                    <div class="container-fluid">
                        <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target=".navbar-collapse"><i class="fas fa-align-left"></i></button>
                        <a class="navbar-brand" href="index.html">
                            <img class="img-fluid" src="images/logo.svg" alt="logo" />
                        </a>
                        <div class="navbar-collapse collapse">
                            <ul class="nav navbar-nav">
                                <li class="nav-item dropdown active">
                                    <a class="nav-link" href="index.html#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Home</a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li class="active"><a class="dropdown-item" href="index.html">Home Default<i class="fas fa-arrow-right"></i></a></li>
                                        <li><a class="dropdown-item" href="index-02.html">Home London<i class="fas fa-arrow-right"></i></a></li>
                                        <li><a class="dropdown-item" href="index-03.html">Home New York<i class="fas fa-arrow-right"></i></a></li>
                                        <li><a class="dropdown-item" href="index-04.html">Home Los Angeles<i class="fas fa-arrow-right"></i></a></li>
                                        <li><a class="dropdown-item" href="index-05.html">Home Mumbai <span class="badge bg-danger ms-2">Hot</span> <i class="fas fa-arrow-right"></i></a></li>
                                        <li><a class="dropdown-item" href="index-06.html">Home Shanghai<i class="fas fa-arrow-right"></i></a></li>
                                        <li><a class="dropdown-item" href="index-07.html">Home Chicago<i class="fas fa-arrow-right"></i></a></li>
                                        <li><a class="dropdown-item" href="index-08.html">Home New Delhi<i class="fas fa-arrow-right"></i></a></li>
                                        <li><a class="dropdown-item" href="index-09.html">Home Berlin<i class="fas fa-arrow-right"></i></a></li>
                                        <li><a class="dropdown-item" href="index-10.html">Home Paris<i class="fas fa-arrow-right"></i></a></li>
                                    </ul>
                                </li>
                                <li class="dropdown nav-item">
                                    <a href="https://themes.potenzaglobalsolutions.com/html/hi-soft/properties.html" class="nav-link" data-bs-toggle="dropdown">Pages</a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="contact.html">Contact<i class="fas fa-arrow-right"></i></a></li>
                                        <li><a class="dropdown-item" href="pricing.html">Pricing<i class="fas fa-arrow-right"></i></a></li>
                                        <li><a class="dropdown-item" href="testimonials.html">Testimonials</a></li>
                                        <li><a class="dropdown-item" href="blog.html">Blog 01<i class="fas fa-arrow-right"></i></a></li>
                                        <li><a class="dropdown-item" href="blog-02.html">Blog 02<i class="fas fa-arrow-right"></i></a></li>
                                        <li><a class="dropdown-item" href="blog-detail.html">Blog Detail<i class="fas fa-arrow-right"></i></a></li>
                                        <li><a class="dropdown-item" href="elements.html">Elements<i class="fas fa-arrow-right"></i></a></li>
                                        <li><a class="dropdown-item" href="faq.html">Faq<i class="fas fa-arrow-right"></i></a></li>
                                        <li><a class="dropdown-item" href="coming-soon.html">Coming Soon<i class="fas fa-arrow-right"></i></a></li>
                                        <li><a class="dropdown-item" href="error-404.html">404 Error<i class="fas fa-arrow-right"></i></a></li>
                                        <li><a class="dropdown-item" href="privacy-policy.html">Privacy Policy<i class="fas fa-arrow-right"></i></a></li>
                                        <li><a class="dropdown-item" href="terms-and-conditions.html">Terms & Conditions<i class="fas fa-arrow-right"></i></a></li>
                                    </ul>
                                </li>
                                <li class="dropdown nav-item">
                                    <a href="https://themes.potenzaglobalsolutions.com/html/hi-soft/properties.html" class="nav-link" data-bs-toggle="dropdown">Company</a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="about-us.html">About Us<i class="fas fa-arrow-right"></i></a></li>
                                        <li><a class="dropdown-item" href="careers.html">Careers<i class="fas fa-arrow-right"></i></a></li>
                                        <li><a class="dropdown-item" href="how-we-work.html">How We Work<i class="fas fa-arrow-right"></i></a></li>
                                        <li><a class="dropdown-item" href="our-team.html">Our Team<i class="fas fa-arrow-right"></i></a></li>
                                        <li><a class="dropdown-item" href="mission-vision.html">Mission Vision<i class="fas fa-arrow-right"></i></a></li>
                                        <li><a class="dropdown-item" href="our-value.html">Our Value<i class="fas fa-arrow-right"></i></a></li>
                                        <li><a class="dropdown-item" href="service.html">Services<i class="fas fa-arrow-right"></i></a></li>
                                        <li><a class="dropdown-item" href="service-detail.html">Services Detail<i class="fas fa-arrow-right"></i></a></li>
                                    </ul>
                                </li>
                                <li class="dropdown nav-item">
                                    <a href="industry.html" class="nav-link" data-bs-toggle="dropdown">Industries</a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="industry.html">Industries 01<i class="fas fa-arrow-right"></i></a></li>
                                        <li><a class="dropdown-item" href="industry-02.html">Industries 02<i class="fas fa-arrow-right"></i></a></li>
                                        <li><a class="dropdown-item" href="industry-03.html">Industries 03<i class="fas fa-arrow-right"></i></a></li>
                                        <li><a class="dropdown-item" href="industry-04.html">Industries 04<i class="fas fa-arrow-right"></i></a></li>
                                    </ul>
                                </li>
                                <li class="dropdown nav-item">
                                    <a href="https://themes.potenzaglobalsolutions.com/html/hi-soft/properties.html" class="nav-link" data-bs-toggle="dropdown">Case Studies</a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="case-study.html">Case Studies<i class="fas fa-arrow-right"></i></a></li>
                                        <li><a class="dropdown-item" href="case-study-single.html">Case Study Single<i class="fas fa-arrow-right"></i></a></li>
                                        <li><a class="dropdown-item" href="case-study-single-02.html">Case Study Single 02<i class="fas fa-arrow-right"></i></a></li>
                                    </ul>
                                </li>
                                <li class="dropdown nav-item mega-menu">
                                    <a href="index.html#" class="nav-link" data-bs-toggle="dropdown">Mega Menu</a>
                                    <ul class="dropdown-menu megamenu">
                                        <li>
                                            <div class="row">
                                                <div class="col-sm-6 col-lg-3">
                                                    <h6 class="mb-3 nav-title">Menu Title </h6>
                                                    <ul class="list-unstyled mt-lg-3">
                                                        <li><a href="index.html#">Menu item </a></li>
                                                        <li><a href="index.html#">Menu item </a></li>
                                                        <li><a href="index.html#">Menu item </a></li>
                                                        <li><a href="index.html#">Menu item </a></li>
                                                    </ul>
                                                </div>
                                                <div class="col-sm-6 col-lg-3">
                                                    <h6 class="mb-3 nav-title">Menu Title</h6>
                                                    <ul class="list-unstyled mt-lg-3">
                                                        <li><a href="index.html#">Menu item </a></li>
                                                        <li><a href="index.html#">Menu item </a></li>
                                                        <li><a href="index.html#">Menu item </a></li>
                                                        <li><a href="index.html#">Menu item </a></li>
                                                    </ul>
                                                </div>
                                                <div class="col-sm-6 col-lg-3">
                                                    <h6 class="mb-3 nav-title">Menu Title</h6>
                                                    <ul class="list-unstyled mt-lg-3">
                                                        <li><a href="index.html#">Menu item </a></li>
                                                        <li><a href="index.html#">Menu item </a></li>
                                                        <li><a href="index.html#">Menu item </a></li>
                                                        <li><a href="index.html#">Menu item </a></li>
                                                    </ul>
                                                </div>
                                                <div class="col-sm-6 col-lg-3">
                                                    <h6 class="mb-3 nav-title">Menu Title</h6>
                                                    <ul class="list-unstyled mt-lg-3">
                                                        <li><a href="index.html#">Menu item </a></li>
                                                        <li><a href="index.html#">Menu item </a></li>
                                                        <li><a href="index.html#">Menu item </a></li>
                                                        <li><a href="index.html#">Menu item </a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div class="d-none d-sm-flex ms-auto me-5 me-lg-0 pe-4 pe-lg-0">
                            <ul class="nav ms-1 ms-lg-2 align-self-center">
                                <li class="contact-number nav-item pe-4 ">
                                    <a class="fw-bold" href="index.html#"><i class="fab fa-whatsapp pe-2"></i>+91 8637272263</a>
                                </li>
                                <li class="header-search nav-item">
                                    <div class="search">
                                        <a class="search-btn not_click" href="javascript:void(0);"></a>
                                        <div class="search-box not-click">
                                            <form action="https://themes.potenzaglobalsolutions.com/html/hi-soft/search.html" method="get">
                                                <input type="text" class="not-click form-control" name="search" placeholder="Search.." />
                                                <button class="search-button" type="submit"> <i class="fa fa-search not-click"></i></button>
                                            </form>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

        </>
    );
}

export default Home;
