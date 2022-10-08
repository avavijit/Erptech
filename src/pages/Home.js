import React, { useEffect } from "react";
import { Button, DatePicker, Switch } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import Icon from 'react-web-vector-icons';
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTheme } from "../theme/use-theme";
import { getSlider, getOurclint, getDegitallife, getService } from '../store/MainRedux'
import Config from "../common/Config";
import { Helmet } from "react-helmet";

function Home() {
    const token = Config.token
    let navigate = useNavigate();
    const { t } = useTranslation();
    const dispatch = useDispatch()
    const homeSettings = useSelector((state) => state.main.homeSetting)
    const homeSlider = useSelector((state) => state.main.homeSlider)
    const ourclint = useSelector((state) => state.main.ourclint)
    const degitallife = useSelector((state) => state.main.degitallife)
    const service = useSelector((state) => state.main.service)

    useEffect(() => {
        dispatch(getSlider({ token }))
        dispatch(getOurclint({ token }))
        dispatch(getDegitallife({ token }))
        dispatch(getService({ token }))
    }, []);
    // console.log(service)
    return (
        <>
            <Helmet>
                <title>{homeSettings?.meta_title}</title>
                <meta name="description" content={homeSettings?.meta_description} />
            </Helmet>
            <section className="banner">
                <div className="swiper-container">
                    <div className="swiper-wrapper h-700 h-sm-500">
                        {homeSlider.map((item, key) => <div key={key} className="swiper-slide align-items-center d-flex responsive-overlap-md bg-overlay-black-30" style={{ backgroundImage: `url(../assets/images/slider/01.jpg)`, backgroundSize: "cover", backgroundPosition: "center" }}>
                            <div className="swipeinner container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-9 col-md-10 text-center position-relative">
                                        <h1 data-swiper-animation="fadeInUp" data-duration="1s" data-delay="0.25s">{item.heading}</h1>
                                        <h6 data-swiper-animation="fadeInUp" data-duration="1s" data-delay="0.5s">{item.sub_heading}</h6>
                                        <a className="btn btn-dark btn-round text-white" data-swiper-animation="fadeInUp" data-duration="1s" data-delay="0.75s" href="index.html#">Get Started Now<i className="fas fa-arrow-right ps-3"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>)}
                    </div>
                    <div className="swiper-button-prev"><i className="fas fa-arrow-left icon-btn"></i></div>
                    <div className="swiper-button-next"><i className="fas fa-arrow-right icon-btn"></i></div>
                </div>
            </section>

            <section className="mt-n5 z-index-9 position-relative">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="our-clients our-clients-style-02 bg-dark">
                                <div className="client-title ps-4">
                                    <h5 className="text-white">Our Clients</h5>
                                    <div className="svg-item">
                                    </div>
                                </div>
                                <div className="brand-logo ps-4">
                                    <div className="owl-carousel testimonial-center owl-nav-bottom-center" data-nav-arrow="false" data-items="5" data-md-items="4" data-sm-items="4" data-xs-items="3" data-xx-items="2" data-space="40" data-autoheight="true">

                                        {ourclint.map((item) => <div className="item">
                                            <img className="img-fluid center-block mx-auto" width={20} src={`https://erptech.in/${item.image}`} alt="" />
                                        </div>)}
                                    </div>
                                </div>
                                <div className="client-btn">
                                    <a href="index.html#" className="btn btn-primary-round btn-round text-white">Case Studies<i className="fas fa-arrow-right ps-3"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="space-ptb">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-9 col-lg-10">
                            <div className="section-title text-center">
                                <h2>Connect people in digital life</h2>
                                <p>A secure cloud-based Enterprise Resource Planning software for all type organizations.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {degitallife.map((item, key) => <div kay={key} className="col-md-6 col-lg-3 mb-sm-5 mb-4">
                            <div className="category-box category-box-style-02 text-center">
                                <div className="category-icon">
                                    <i className={item.icon}></i>
                                    <h5 className="category-title mb-0">{item.title}</h5>
                                </div>
                                <ul className="category-list">
                                    <li><a href="index.html#">{item.link_1}</a></li>
                                    <li><a href="index.html#">{item.link_2}</a></li>
                                    <li><a href="index.html#">{item.link_3}</a></li>
                                    <li><a href="index.html#">{item.link_4}</a></li>
                                </ul>
                            </div>
                        </div>)}
                    </div>
                    <div className="row">
                        <div className="col-12 d-md-flex justify-content-center align-items-center">
                            <p className="mb-3 mb-md-0 mx-0 mx-md-3">Contact us to discuss the goals for your brand</p>
                            <a href="index.html#" className="btn btn-primary-round btn-round mx-0 mx-md-3">Get A Quote<i className="fas fa-arrow-right ps-3"></i></a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="space-ptb bg-dark-half-lg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-9 col-lg-10">
                            <div className="section-title text-center position-relative">
                                <h2 className="text-white"><span className="text-primary">We design</span> and build beautiful digital products that make a difference</h2>
                                <p className="lead text-white">We love what we do. Our clients tell us the same thing.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-4 order-lg-1 order-1">
                            <div className="case-study">
                                <div className="case-study-img case-study-lg" style={{ backgroundImage: `url('images/project/02.jpg')` }}>
                                </div>
                                <div className="case-study-info">
                                    <a className="case-study-title fw-bold" href="index.html#">LEAD PLUS</a>
                                    <span className="case-study-services text-primary">Music</span>
                                    <p>Manage leads, sales, contact history, and multiple opportunities all in one place.</p>
                                    <a href="index.html#" className="icon-btn"><i className="fas fa-long-arrow-alt-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-4 order-lg-2 order-3">
                            <div className="row">
                                <div className="col-sm-6 col-lg-12">
                                    <div className="case-study">
                                        <div className="case-study-img" style={{ backgroundImage: `url('images/project/04.jpg')` }}>
                                        </div>
                                        <div className="case-study-info">
                                            <a className="case-study-title fw-bold" href="index.html#">TAXI APP</a>
                                            <span className="case-study-services text-primary">Education</span>
                                            <p>The taxi app is featured with all the reserving capabilities that customers, drivers,</p>
                                            <a href="index.html#" className="icon-btn"><i className="fas fa-long-arrow-alt-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-12">
                                    <div className="case-study">
                                        <div className="case-study-img" style={{ backgroundImage: `url('images/project/06.jpg')` }}>
                                        </div>
                                        <div className="case-study-info">
                                            <a className="case-study-title" href="index.html#">DOCTORS APPOINTMENT APP</a>
                                            <span className="case-study-services text-primary">Pet Care</span>
                                            <p>Manage workflows for hospitals, healthcare facilities, docs, health facility teams of workers</p>
                                            <a href="index.html#" className="icon-btn"><i className="fas fa-long-arrow-alt-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 order-lg-3 order-2">
                            <div className="case-study">
                                <div className="case-study-img case-study-lg" style={{ backgroundImage: `url('images/project/05.jpg')` }}>
                                </div>
                                <div className="case-study-info">
                                    <a className="case-study-title fw-bold" href="index.html#">Financeoont</a>
                                    <span className="case-study-services text-primary">Finance</span>
                                    <p>It is truly amazing the damage that we, as parents, can inflict on our children...</p>
                                    <a href="index.html#" className="icon-btn"><i className="fas fa-long-arrow-alt-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center mt-0 mt-md-4">
                            <a href="index.html#" className="btn btn-primary-round btn-round mx-3">View all Case Study<i className="fas fa-arrow-right ps-3"></i></a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="space-pb">
                <div className="container">
                    <div className="row justify-content-center pb-4 pb-md-5">
                        <div className="col-lg-10">
                            <div className="d-md-flex align-items-center">
                                <div className="me-4">
                                    <p className="mb-0">Established in</p>
                                    <h3 className="display-2 fw-bold text-primary mb-0">2010</h3>
                                </div>
                                <div className="me-3">
                                    <h2 className="mb-0">We have a great line up for clients and brands we enjoyed working .</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="d-flex h-100">
                                <div className="nav flex-column nav-pills w-100 align-self-lg-center" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                    <a className="nav-link" id="mission-and-vision-tab" data-bs-toggle="pill" href="index.html#mission-and-vision" role="tab" aria-controls="Mobile App" aria-selected="true"><span className="data-hover" data-title="Mobile App">Mobile App</span></a>
                                    <a className="nav-link active" id="our-challenges-tab" data-bs-toggle="pill" href="index.html#our-challenges" role="tab" aria-controls="our-challenges" aria-selected="false"><span className="data-hover" data-title="eCommerce">eCommerce</span></a>
                                    <a className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" href="index.html#technology-partners" role="tab" aria-controls="technology-partners" aria-selected="false"><span className="data-hover" data-title="Experience Design">Experience Design</span></a>
                                    <a className="nav-link" id="meet-the-our-team-tab" data-bs-toggle="pill" href="index.html#meet-the-our-team" role="tab" aria-controls="meet-the-our-team" aria-selected="false"><span className="data-hover" data-title="Strategy">Strategy</span></a>
                                    <a className="nav-link" id="careers-with-us-tab" data-bs-toggle="pill" href="index.html#careers-with-us" role="tab" aria-controls="careers-with-us" aria-selected="false"><span className="data-hover" data-title="Branding">Branding</span></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9 mt-3 mt-md-0">
                            <div className="tab-content" id="v-pills-tabContent">
                                <div className="tab-pane fade" id="mission-and-vision" role="tabpanel" aria-labelledby="mission-and-vision-tab">
                                    <div className="row">
                                        <div className="col-sm-5 align-self-lg-center mb-4 mb-sm-0">
                                            <img className="img-fluid rounded" src="images/about/01.jpg" alt="" />
                                        </div>
                                        <div className="col-sm-7 align-self-start align-self-lg-center ps-md-0 ps-lg-5">
                                            <h4><i className="flaticon-target text-primary me-2"></i>Mobile App</h4>
                                            <p className="mb-4">We use the Mobile Apps feature of Azure App Service to rapidly build engaging cross-platforms and native apps for iOS, Android, Windows, or Mac; store app data in the cloud or onpremises; or add your custom back-end logic.</p>
                                            <h4><i className="flaticon-eye text-primary me-2"></i> Our Vision</h4>
                                            <p className="mb-4">Our Vision is to be a top Web Design company in the IT sector and progress in our current position in the market. </p>
                                            <h6 className="fw-normal text-muted mt-4">Our Vision and Mission are both encouraging our team to accomplish the goal. We recognize the clients' requirements, analyze them, and provide the best solutions. We satisfy our clients by our services and implements it with more capable software solution approaches.</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade show active" id="our-challenges" role="tabpanel" aria-labelledby="our-challenges-tab">
                                    <div className="row">
                                        <div className="col-sm-5 align-self-lg-center mb-4 mb-sm-0">
                                            <img className="img-fluid rounded" src="images/about/04.jpg" alt="" />
                                        </div>
                                        <div className="col-sm-7 align-self-start align-self-lg-center ps-md-0 ps-lg-5">
                                            <h4 className="mb-4 text-dark">“We take pride in helping our clients deliver marvelous results when it comes to their projects. From data to performance, we’ve got you covered.”</h4>
                                            <p className="d-flex align-items-center mb-4">
                                                <span className="fw-bold text-dark me-2">eCommerce</span>
                                                <label className="ms-2 mb-0">Sales and Marketing</label>
                                            </p>
                                            <p className="mb-4">To defend the product of your web-based business website, Clickworker offers specialty management and arrangements. We advance your internet-based company to help your business with placing in the most ideal position, providing your clients can find it.</p>
                                            <a href="index.html#" className="btn btn-primary-round btn-round">Learn More<i className="fas fa-arrow-right ps-3"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="technology-partners" role="tabpanel">
                                    <div className="row">
                                        <div className="col-sm-5 align-self-lg-center mb-4 mb-sm-0">
                                            <img className="img-fluid rounded" src="images/about/03.jpg" alt="" />
                                        </div>
                                        <div className="col-sm-7 align-self-start align-self-lg-center ps-md-0 ps-lg-5">
                                            <h4 className="text-dark">Experience Design</h4>
                                            <p>Great brand experiences persuade, convert, and inspire –and they’re built on a foundation of brilliant, strategic design.</p>
                                            <div className="row">
                                                <div className="col-lg-4 mb-4">
                                                    <img className="img-fluid grayscale p-2" src="images/client-logo/01.svg" alt="" />
                                                </div>
                                                <div className="col-lg-4 mb-4">
                                                    <img className="img-fluid grayscale p-2" src="images/client-logo/02.svg" alt="" />
                                                </div>
                                                <div className="col-lg-4 mb-4">
                                                    <img className="img-fluid grayscale p-2" src="images/client-logo/03.svg" alt="" />
                                                </div>
                                                <div className="col-lg-4 mb-4">
                                                    <img className="img-fluid grayscale p-2" src="images/client-logo/04.svg" alt="" />
                                                </div>
                                                <div className="col-lg-4 mb-4">
                                                    <img className="img-fluid grayscale p-2" src="images/client-logo/06.svg" alt="" />
                                                </div>
                                                <div className="col-lg-4 mb-4">
                                                    <img className="img-fluid grayscale p-2" src="images/client-logo/07.svg" alt="" />
                                                </div>
                                                <div className="col-lg-4 mb-4">
                                                    <img className="img-fluid grayscale p-2" src="images/client-logo/05.svg" alt="" />
                                                </div>
                                                <div className="col-lg-4 mb-4">
                                                    <img className="img-fluid grayscale p-2" src="images/client-logo/01.svg" alt="" />
                                                </div>
                                            </div>
                                            <div className="mt-4">
                                                <a className="btn btn-primary-round btn-round" href="index.html#">Become a Partner</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="meet-the-our-team" role="tabpanel" aria-labelledby="meet-the-our-team-tab">
                                    <div className="row">
                                        <div className="col-sm-5 align-self-lg-center mb-4 mb-sm-0">
                                            <img className="img-fluid rounded" src="images/about/02.jpg" alt="" />
                                        </div>
                                        <div className="col-sm-7 align-self-start align-self-lg-center ps-md-0 ps-lg-5">
                                            <div className="row">
                                                <div className="col-12 mb-4">
                                                    <h4 className="text-dark">Strategy</h4>
                                                    <p>We’re advisers, guides, and accessories for brands on developed change experiences. Any place you’re moving, we carry considerations and need to help you arrive.</p>
                                                </div>
                                                <div className="col-xl-4 col-md-4 col-sm-6 col-6">
                                                    <div className="team">
                                                        <div className="team-bg"></div>
                                                        <div className="team-img">
                                                            <img className="img-fluid" src="images/team/01.jpg" alt="" />
                                                        </div>
                                                        <div className="team-info">
                                                            <a href="index.html#" className="team-name">Avalon Carey</a>
                                                            <p>Chief People Officer</p>
                                                            <ul className="list-unstyled">
                                                                <li><a href="index.html#"><i className="fab fa-facebook-f"></i></a></li>
                                                                <li><a href="index.html#"><i className="fab fa-twitter"></i></a></li>
                                                                <li><a href="index.html#"><i className="fab fa-linkedin-in"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-4 col-md-4 col-sm-6 col-6">
                                                    <div className="team">
                                                        <div className="team-bg"></div>
                                                        <div className="team-img">
                                                            <img className="img-fluid" src="images/team/02.jpg" alt="" />
                                                        </div>
                                                        <div className="team-info">
                                                            <a href="index.html#" className="team-name">Homer Reyes</a>
                                                            <p>Vice President</p>
                                                            <ul className="list-unstyled">
                                                                <li><a href="index.html#"><i className="fab fa-facebook-f"></i></a></li>
                                                                <li><a href="index.html#"><i className="fab fa-twitter"></i></a></li>
                                                                <li><a href="index.html#"><i className="fab fa-linkedin-in"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-4 col-md-4 col-sm-6 col-6">
                                                    <div className="team">
                                                        <div className="team-bg"></div>
                                                        <div className="team-img">
                                                            <img className="img-fluid" src="images/team/03.jpg" alt="" />
                                                        </div>
                                                        <div className="team-info">
                                                            <a href="index.html#" className="team-name">Alice Williams</a>
                                                            <p>Team Leader</p>
                                                            <ul className="list-unstyled">
                                                                <li><a href="index.html#"><i className="fab fa-facebook-f"></i></a></li>
                                                                <li><a href="index.html#"><i className="fab fa-twitter"></i></a></li>
                                                                <li><a href="index.html#"><i className="fab fa-linkedin-in"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 mt-4">
                                                    <a className="btn btn-primary-round btn-round" href="index.html#">View Our Team</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="careers-with-us" role="tabpanel" aria-labelledby="careers-with-us-tab">
                                    <div className="row">
                                        <div className="col-sm-5 align-self-lg-center mb-4 mb-sm-0">
                                            <img className="img-fluid rounded" src="images/about/07.jpg" alt="" />
                                        </div>
                                        <div className="col-sm-7 align-self-start align-self-lg-center ps-md-0 ps-lg-5">
                                            <h4 className="mb-2">Branding</h4>
                                            <p className="mb-4">Our center of excellence for branding, BFM Brand Lab, shapes brand identities that define the story, guiding vision, and market positioning of human-centered brands.</p>
                                            <h5>Why work with us?</h5>
                                            <div className="row mb-4">
                                                <div className="col-md-6">
                                                    <ul className="list list-unstyled">
                                                        <li className="d-flex"><i className="fas fa-check pe-2 pt-1 text-primary"></i><span>Flexible Time Off </span></li>
                                                        <li className="d-flex"><i className="fas fa-check pe-2 pt-1 text-primary"></i><span>24/7 parking. </span></li>
                                                        <li className="d-flex"><i className="fas fa-check pe-2 pt-1 text-primary"></i><span>Full medical benefits </span></li>
                                                        <li className="d-flex"><i className="fas fa-check pe-2 pt-1 text-primary"></i><span>Pto / vacation</span></li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-6">
                                                    <ul className="list list-unstyled">
                                                        <li className="d-flex"><i className="fas fa-check pe-2 pt-1 text-primary"></i><span>Flexible hours</span></li>
                                                        <li className="d-flex"><i className="fas fa-check pe-2 pt-1 text-primary"></i><span>Collaborative environment</span></li>
                                                        <li className="d-flex"><i className="fas fa-check pe-2 pt-1 text-primary"></i><span>Health, Dental, And Vision</span></li>
                                                        <li className="d-flex"><i className="fas fa-check pe-2 pt-1 text-primary"></i><span>Collaborative environment</span></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <a href="index.html#" className="btn btn-primary-round btn-round mt-2">View Available Positions<i className="fas fa-arrow-right ps-3"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="space-ptb bg-dark  dark-background category category-list-style-01">
                <div className="container">
                    <div className="row align-items-center pb-4 pb-md-5">
                        <div className="col-lg-6">
                            <h2 className="text-white mb-2 mb-lg-0">We excel in our industry so that you can get in yours.</h2>
                        </div>
                        <div className="col-lg-6">
                            <p className="lead text-white mb-0">We offer expertise across various industries. See some of the industries we have vast experience working in as a full-service marketing agency.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 col-lg-3">
                            <ul className="category-list">
                                <li><a href="index.html#">Automotive</a></li>
                                <li><a href="index.html#">Communication Services</a></li>
                                <li><a href="index.html#">Retail</a></li>
                                <li><a href="index.html#">Education</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-lg-3 mt-4 mt-sm-0">
                            <ul className="category-list">
                                <li><a href="index.html#">Financial Services</a></li>
                                <li><a href="index.html#">Publishing</a></li>
                                <li><a href="index.html#">FMCG</a></li>
                                <li><a href="index.html#">Travel</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-lg-3 mt-4 mt-lg-0">
                            <ul className="category-list">
                                <li><a href="index.html#">Media and Entertainment</a></li>
                                <li><a href="index.html#">Logistics and Distribution</a></li>
                                <li><a href="index.html#">Utilities</a></li>
                                <li><a href="index.html#">Health Care</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-lg-3 mt-4 mt-lg-0">
                            <ul className="category-list">
                                <li><a href="index.html#">Hi-Tech</a></li>
                                <li><a href="index.html#">Publishing</a></li>
                                <li><a href="index.html#">Industrial & Manufacturing</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row mt-4 mt-md-5">
                        <div className="col-12 d-md-flex justify-content-center align-items-center">
                            <p className="mb-3 mb-md-0 mx-0 mx-md-3 text-white">We provide solutions for all types of big industries</p>
                            <a href="index.html#" className="btn btn-primary-round text-white btn-round mx-0 mx-md-3">Browse Industries<i className="fas fa-arrow-right ps-3"></i></a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="space-ptb bg-light position-relative">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="section-title is-sticky">
                                <h2>This is what we do and we do it perfectly.</h2>
                                <p className="mb-4">Please take a look at the range of <b>IT solution</b> services we offer to your brand as a full-service leading marketing agency.</p>
                                <a href="index.html#" className="btn btn-primary-round btn-round">See All Services<i className="fas fa-arrow-right ps-3"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="row">
                                {service.map((item, key) => <div key={key} className="col-sm-6 mt-4" >
                                    <div className="feature-info feature-info-style-01">
                                        <div className="feature-info-icon">
                                            <i className={item.icon}></i>
                                        </div>
                                        <div className="feature-info-content">
                                            <h5 className="mb-3 feature-info-title">{item.title}</h5>
                                            <p className="mb-0">{item.description}</p>
                                            <a href="service-detail.html" className="icon-btn"><i className="fas fa-long-arrow-alt-right"></i></a>
                                        </div>
                                    </div>
                                    {/* <div className="feature-info feature-info-style-01 mt-4 mt-lg-5">
                                        <div className="feature-info-icon">
                                            <i className="flaticon-icon-149196"></i>
                                        </div>
                                        <div className="feature-info-content">
                                            <h5 className="mb-3 feature-info-title">Mobile Platforms</h5>
                                            <p className="mb-0">We know this in our gut, but what can we do about it? How can we motivate ourselves? One of the most difficult aspects of achieving success.</p>
                                            <a href="service-detail.html" className="icon-btn"><i className="fas fa-long-arrow-alt-right"></i></a>
                                        </div>
                                    </div>
                                    <div className="feature-info feature-info-style-01 mt-4 mt-lg-5">
                                        <div className="feature-info-icon">
                                            <i className="flaticon-design"></i>
                                        </div>
                                        <div className="feature-info-content">
                                            <h5 className="mb-3 feature-info-title">Event Processing</h5>
                                            <p className="mb-0">There is really no magic to it and it’s not reserved only for a select few people. As such, success really has nothing to do with luck,</p>
                                            <a href="service-detail.html" className="icon-btn"><i className="fas fa-long-arrow-alt-right"></i></a>
                                        </div>
                                    </div> */}
                                </div>)}
                                {/* <div className="col-sm-6">
                                    <div className="feature-info feature-info-style-01 mt-4 mt-lg-5">
                                        <div className="feature-info-icon">
                                            <i className="flaticon-author"></i>
                                        </div>
                                        <div className="feature-info-content">
                                            <h5 className="mb-3 feature-info-title">Data Synchronization</h5>
                                            <p className="mb-0">Positive pleasure-oriented goals are much more powerful motivators than negative fear-based ones. Although each is successful separately.</p>
                                            <a href="service-detail.html" className="icon-btn"><i className="fas fa-long-arrow-alt-right"></i></a>
                                        </div>
                                    </div>
                                    <div className="feature-info feature-info-style-01 mt-4 mt-lg-5">
                                        <div className="feature-info-icon">
                                            <i className="flaticon-chart"></i>
                                        </div>
                                        <div className="feature-info-content">
                                            <h5 className="mb-3 feature-info-title">Process Automation</h5>
                                            <p className="mb-0">It must come from within as the natural product of your desire to achieve something and your belief that you are capable to succeed at your goal.</p>
                                            <a href="service-detail.html" className="icon-btn"><i className="fas fa-long-arrow-alt-right"></i></a>
                                        </div>
                                    </div>
                                    <div className="feature-info feature-info-style-01 mt-4 mt-lg-5">
                                        <div className="feature-info-icon">
                                            <i className="flaticon-group"></i>
                                        </div>
                                        <div className="feature-info-content">
                                            <h5 className="mb-3 feature-info-title">Content Management</h5>
                                            <p className="mb-0">There are basically six key areas to higher achievement. Some people will tell you there are four while others may tell you there are eight.</p>
                                            <a href="service-detail.html" className="icon-btn"><i className="fas fa-long-arrow-alt-right"></i></a>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="space-ptb">
                <div className="container">
                    <div className="row mb-0 mb-lg-4">
                        <div className="col-lg-6 col-xl-7 text-center">
                            <div className="owl-carousel testimonial-style-02" data-nav-arrow="true" data-nav-dots="false" data-items="1" data-lg-items="1" data-md-items="1" data-sm-items="1" data-space="0" data-autoheight="true">
                                <div className="item">
                                    <div className="video-image">
                                        <img className="img-fluid w-100" src="images/feature-info/01.jpg" alt="" />
                                        <a className="popup-icon popup-youtube" href="https://www.youtube.com/watch?v=LgvseYYhqU0">
                                            <i className="fa fa-play"></i>
                                            <div className="svg-item">
                                            </div>
                                        </a>
                                    </div>
                                    <div className="testimonial-item">
                                        <div className="testimonial-avatar">
                                            <img className="img-fluid rounded-circle" src="images/avatar/01.jpg" alt="" />
                                        </div>
                                        <div className="testimonial-content">
                                            <p>ERPTech is our 1st ERP platform. It’s used across in our all organization. It helps us to integrate business and technology processes across the whole system from Account to Report, Order to Cash, Procure to Pay, Hire to Retire, Supply Chain Management and Manufacturing the products & Execution. It has really helped to have a better future forecast.</p>
                                        </div>
                                        <div className="testimonial-author">
                                            <div className="testimonial-name">
                                                <h6 className="mb-1">Abinash Kumar Rout </h6>
                                                <span>Managing Director</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="video-image">
                                        <img className="img-fluid w-100" src="images/feature-info/02.jpg" alt="" />
                                        <a className="popup-icon popup-youtube" href="https://www.youtube.com/watch?v=LgvseYYhqU0">
                                            <i className="fa fa-play"></i>

                                            {/* <div className="svg-item">
                                                <svg version="1.1" id="Layer_3" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" height="48px" viewBox="0 0 1920 48" style={{enableBackground:"new 0 0 1920 48", xml:space="preserve"}}>
                                                    <polygon id="XMLID_2_" className="st0" fill="#ffffff" points="1920,48 0,48 0,48 1920,0 " />
                                                </svg>
                                            </div> */}

                                        </a>
                                    </div>
                                    <div className="testimonial-item">
                                        <div className="testimonial-avatar">
                                            <img className="img-fluid rounded-circle" src="images/avatar/02.jpg" alt="" />
                                        </div>
                                        <div className="testimonial-content">
                                            <p> ERP Tech is the best service in Internet Website Designers, Online Shopping Websites, Bulk SMS Services, Computer Software Developers, Website Developments</p>
                                        </div>
                                        <div className="testimonial-author">
                                            <div className="testimonial-name">
                                                <h6 className="mb-1">Mariquilla V.</h6>
                                                <span>Production Manager</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="video-image">
                                        <img className="img-fluid w-100" src="images/feature-info/03.jpg" alt="" />
                                        <a className="popup-icon popup-youtube" href="https://www.youtube.com/watch?v=LgvseYYhqU0">
                                            <i className="fa fa-play"></i>

                                            {/* <div className="svg-item">
                                                <svg version="1.1" id="Layer_4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" height="48px" viewBox="0 0 1920 48" style={{enableBackground:"new 0 0 1920 48", xml:space="preserve"}}>
                                                    <polygon id="XMLID_3_" className="st0" fill="#ffffff" points="1920,48 0,48 0,48 1920,0 " />
                                                </svg>
                                            </div> */}

                                        </a>
                                    </div>
                                    <div className="testimonial-item">
                                        <div className="testimonial-avatar">
                                            <img className="img-fluid rounded-circle" src="images/avatar/03.jpg" alt="" />
                                        </div>
                                        <div className="testimonial-content">
                                            <p>“My Website was designed by ERP Tech and her team. It was amazing the way he understood my requirements and translated that into a beautiful output.</p>
                                        </div>
                                        <div className="testimonial-author">
                                            <div className="testimonial-name">
                                                <h6 className="mb-1">Fern W.</h6>
                                                <span>Marketing Expert</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-5 align-self-center ps-0 ps-lg-5 mt-5 mt-lg-0">
                            <div className="ps-3 ps-lg-4">
                                <h2 className="mb-4 mb-lg-5">Over 500 clients and 5,000 projects across the globe.</h2>
                                <a href="index.html#" className="btn btn-primary-round btn-round mb-3">Client Success Stories<i className="fas fa-arrow-right ps-3"></i></a>
                                <hr />
                                <h5 className="text-primary mt-md-4 mt-lg-5 mb-3 pt-3">Awards and Nominees</h5>
                                <div className="row">
                                    <div className="col-lg-6 col-sm-3 col-6 mb-3 mb-md-0"><img className="img-fluid grayscale pt-4 w-75" src="images/award-logo/01.svg" alt="" /></div>
                                    <div className="col-lg-6 col-sm-3 col-6 mb-3 mb-md-0"><img className="img-fluid grayscale pt-4 w-75" src="images/award-logo/05.svg" alt="" /></div>
                                    <div className="col-lg-6 col-sm-3 col-6 "><img className="img-fluid grayscale pt-4 pt-lg-5 w-75" src="images/award-logo/03.svg" alt="" /></div>
                                    <div className="col-lg-6 col-sm-3 col-6 "><img className="img-fluid grayscale pt-4 pt-lg-5 w-75" src="images/award-logo/04.svg" alt="" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-dark py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-lg-3 mb-4 mb-lg-0">
                            <div className="counter">
                                <div className="counter-icon">
                                    <i className="flaticon-emoji"></i>
                                </div>
                                <div className="counter-content">
                                    <span className="timer" data-to="1790" data-speed="10000">1790</span>
                                    <label>Happy Clients</label>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3 mb-4 mb-lg-0">
                            <div className="counter">
                                <div className="counter-icon">
                                    <i className="flaticon-trophy"></i>
                                </div>
                                <div className="counter-content align-self-center">
                                    <span className="timer" data-to="245" data-speed="10000">32</span>
                                    <label>Skilled Experts</label>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3 mb-4 mb-sm-0">
                            <div className="counter">
                                <div className="counter-icon">
                                    <i className="flaticon-strong"></i>
                                </div>
                                <div className="counter-content">
                                    <span className="timer" data-to="491" data-speed="10000">491</span>
                                    <label>Finished Projects</label>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="counter">
                                <div className="counter-icon">
                                    <i className="flaticon-icon-149196"></i>
                                </div>
                                <div className="counter-content">
                                    <span className="timer" data-to="1090" data-speed="10000">1090</span>
                                    <label>Media Posts</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="space-ptb">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-7 col-lg-9">
                            <div className="section-title text-center">
                                <h2>Latest news and inspirational stories</h2>
                                <p>Check out our latest blog posts, articles, client success stories and essential announcement.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-7 col-lg-8 mb-4">
                            <div className="blog-post blog-post-sticky">
                                <div className="blog-post-image">
                                    <img className="img-fluid" src="images/blog/01.jpg" alt="" />
                                </div>
                                <div className="blog-post-content">
                                    <div className="blog-post-info">
                                        <div className="blog-post-author">
                                            <a href="index.html#" className="btn btn-light-round btn-round text-primary">Marketing</a>
                                        </div>
                                        <div className="blog-post-date">
                                            <a href="index.html#">Feb 4, 2020</a>
                                        </div>
                                    </div>
                                    <div className="blog-post-details">
                                        <h5 className="blog-post-title">
                                            <a href="blog-detail.html">From a small startup to a leading global agency in 10 Years</a>
                                        </h5>
                                        <p className="mb-0">We also know those epic stories, those modern-day legends surrounding the early failures of such supremely successful folks as Michael Jordan and Bill Gates.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 col-lg-4">
                            <div className="blog-post mb-4">
                                <div className="blog-post-image">
                                    <img className="img-fluid" src="images/blog/02.jpg" alt="" />
                                </div>
                                <div className="blog-post-content">
                                    <div className="blog-post-info">
                                        <div className="blog-post-author">
                                            <a href="index.html#" className="btn btn-light-round btn-round text-primary">Finance</a>
                                        </div>
                                        <div className="blog-post-date">
                                            <a href="index.html#">Feb 15, 2020</a>
                                        </div>
                                    </div>
                                    <div className="blog-post-details">
                                        <h5 className="blog-post-title">
                                            <a href="blog-detail.html">How google’s BERT algorithm affects your website traffic</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            <div className="blog-post mb-4">
                                <div className="blog-post-image">
                                    <img className="img-fluid" src="images/blog/03.jpg" alt="" />
                                </div>
                                <div className="blog-post-content">
                                    <div className="blog-post-info">
                                        <div className="blog-post-author">
                                            <a href="index.html#" className="btn btn-light-round btn-round text-primary">Operations</a>
                                        </div>
                                        <div className="blog-post-date">
                                            <a href="index.html#">Sep 19, 2020</a>
                                        </div>
                                    </div>
                                    <div className="blog-post-details">
                                        <h5 className="blog-post-title">
                                            <a href="blog-detail.html">Five reasons why you must create a website for your company</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="m-0 mt-4" />
                    <div className="row mt-4 mt-md-5">
                        <div className="col-12 d-md-flex justify-content-center align-items-center text-center">
                            <p className="mb-3 mb-md-0 mx-0 mx-md-3 text-light">We have articles on a range of topics</p>
                            <a href="index.html#" className="btn btn-primary-round btn-round mx-0 mx-md-3">View all Blogs<i className="fas fa-arrow-right ps-3"></i></a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="space-pb dark-background">
                <div className="container">
                    <div className="bg-dark text-center rounded py-5 px-3">
                        <h2 className="text-white">Tell us about your idea, and we’ll make it happen.</h2>
                        <h6 className="text-white">Have a brand problem that needs to be solved? We’d love to hear about it!</h6>
                        <a href="index.html#" className="btn btn-primary-round btn-round mx-0 mx-md-3 text-white">Let’s Get Started<i className="fas fa-arrow-right ps-3"></i></a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
