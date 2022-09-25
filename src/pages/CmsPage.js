import React, { useEffect } from "react";
import { Button, DatePicker, Switch } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import Icon from 'react-web-vector-icons';
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTheme } from "../theme/use-theme";
import { getHomeSettings, getPageDetails } from '../store/MainRedux'
import Config from "../common/Config";


function CmsPage() {
    const token = Config.token
    let navigate = useNavigate();
    const { t } = useTranslation();
    const dispatch = useDispatch()
    let { name } = useParams();
    const pageDetails = useSelector((state) => state.main.pageDetails)

    useEffect(() => {
        dispatch(getPageDetails({ token, id: name }))
    }, [name]);

    console.log(pageDetails)

    return (
        <>
            <section className="header-inner header-inner-menu bg-overlay-black-50">
                <div className="container position-relative">
                    <div className="row d-flex justify-content-center position-relative">
                        <div className="col-md-8">
                            <div className="header-inner-title text-center">
                                <h1 className="text-white fw-normal">{pageDetails.title}</h1>
                                <p className="text-white mb-0">{pageDetails.title}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-inner-nav">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 d-flex justify-content-center">
                                <ul className="nav">
                                    <li className="nav-item"><NavLink className="nav-link" to="/page/about-us">About Us</NavLink></li>
                                    <li className="nav-item"><NavLink className="nav-link" to="/page/careers">Careers</NavLink></li>
                                    <li className="nav-item"><NavLink className="nav-link" to="/page/careers">How we work</NavLink></li>
                                    <li className="nav-item"><NavLink className="nav-link" to="/page/careers">Our team</NavLink></li>
                                    <li className="nav-item"><NavLink className="nav-link" to="/page/careers">Mission and vision</NavLink></li>
                                    <li className="nav-item"><NavLink className="nav-link" to="/page/careers">Our values</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="space-ptb">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-9">
                            <div className="section-title text-center">
                                <h2>Established 2010 in ERP TECH has been offering world-class information technology.</h2>
                                <p className="px-xl-5">Positive pleasure-oriented goals are much more powerful motivators than negative fear-based ones. Although each is successful separately, the right combination of both is the most powerful motivational force known to humankind.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            <div className="cd-horizontal-timeline">
                                <div className="timeline">
                                    <div className="events-wrapper">
                                        <div className="events">
                                            <ul>
                                                <li><a href="about-us.html#0" data-date="01/01/2010" className="selected">2010</a></li>
                                                <li><a href="about-us.html#0" data-date="01/01/2012">2012</a></li>
                                                <li><a href="about-us.html#0" data-date="01/01/2014">2014</a></li>
                                                <li><a href="about-us.html#0" data-date="01/01/2016">2016</a></li>
                                                <li><a href="about-us.html#0" data-date="01/01/2018">2018</a></li>
                                                <li><a href="about-us.html#0" data-date="01/01/2020">2020</a></li>
                                            </ul>
                                            <span className="filling-line" aria-hidden="true"></span>
                                        </div>

                                    </div>

                                    <ul className="cd-timeline-navigation">
                                        <li><a href="about-us.html#0" className="prev inactive"></a></li>
                                        <li><a href="about-us.html#0" className="next"></a></li>
                                    </ul>

                                </div>

                                <div className="events-content">
                                    <ul>
                                        <li className="selected" data-date="01/01/2010">
                                            <div className="row">
                                                <div className="col-md-4 position-relative">
                                                    <h1 className="year">2010</h1>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="timeline-text">
                                                        <h6 className="text-dark"> They often mean leaving the perception of security in order to discover your personal freedom. These are the changes that will bring happiness and satisfaction into your life. Just go there now.</h6>
                                                        <p className="border-start ps-3 font-italic">10 years out… having made a decade of changes. Imagine living the life you want to live.</p>
                                                        <p className="mb-0">The best way is to develop and follow a plan. Start with your goals in mind and then work backwards to develop the plan. What steps are required to get you to the goals? Make the plan as detailed as possible. Try to visualize and then plan for, every possible setback. Commit the plan to paper and then keep it with you at all times. Review it regularly and ensure that every step takes you closer to your Vision and Goals.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li data-date="01/01/2012">
                                            <div className="row">
                                                <div className="col-md-4 position-relative">
                                                    <h1 className="year">2012</h1>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="timeline-text">
                                                        <h6 className="text-dark">What is the exact sequence of events that will take you to where you want to be? Have a think consciously of what you need to do. Every outcome begins with the first step.</h6>
                                                        <p className="border-start ps-3 font-italic">When you decide you want to have a romantic meal for two, there are many steps that you need to perform in order for that to happen.</p>
                                                        <p className="mb-0">This is the beginning of creating the life that you want to live. Know what the future holds for you as a result of the choice you can make today.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li data-date="01/01/2014">
                                            <div className="row">
                                                <div className="col-md-4 position-relative">
                                                    <h1 className="year">2014</h1>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="timeline-text">
                                                        <h6 className="text-dark">Have some fun and hypnotize yourself to be your very own “Ghost of Christmas future” and see what the future holds for you. Success is something of which we all want more. Most people believe that success is difficult.</h6>
                                                        <p className="border-start ps-3 font-italic">Get the oars in the water and start rowing. Execution is the single biggest factor in achievement.</p>
                                                        <p className="mb-0">The price is something not necessarily defined as financial. It could be time, effort, sacrifice, money or perhaps, something else. The point is that we must be fully aware of the price and be willing to pay it</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li data-date="01/01/2016">
                                            <div className="row">
                                                <div className="col-md-4 position-relative">
                                                    <h1 className="year">2016</h1>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="timeline-text">
                                                        <h6 className="text-dark">He sells his farm and hikes off over the horizon, never to be heard from again. Rumors say that years later he died destitute, never having found the diamonds he spent his life seeking.</h6>
                                                        <p className="border-start ps-3 font-italic">I don’t think the deciding factor was the desire. Lots of people come here to Japan, but never quite find out how to stay. </p>
                                                        <p className="mb-0">Instead, it seems to be more a matter of what they can allow themselves to have. Some people call this a sense of deserving. Others call it a sense of entitlement. No matter what term you use, it’s basically the same thing.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li data-date="01/01/2018">
                                            <div className="row">
                                                <div className="col-md-4 position-relative">
                                                    <h1 className="year">2018</h1>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="timeline-text">
                                                        <h6 className="text-dark">Introspection is the trick. Understand what you want, why you want it and what it will do for you. This is a critical factor, and as such, is probably the most difficult step. For this reason, most people never complete this aspect – then wonder why life is so difficult!</h6>
                                                        <p className="border-start ps-3 font-italic">“Nothing changes until something moves” – this is the battle cry of author and journalist Robert Ringer. And he is absolutely correct</p>
                                                        <p className="mb-0">Without clarity, you send a very garbled message out to the Universe. We know that the Law of Attraction says that we will attract what we focus on, so if we don’t have clarity, we will attract confusion.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li data-date="01/01/2020">
                                            <div className="row">
                                                <div className="col-md-4 position-relative">
                                                    <h1 className="year">2020</h1>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="timeline-text">
                                                        <h6 className="text-dark">Make no mistake, the new owner already had money, or he could not have bought the land. There’s nothing in this story to make us think he was dreaming about riches, vast or otherwise. No burning desire. But he got the goodies.</h6>
                                                        <p className="border-start ps-3 font-italic">Once you have a clear understanding of what you want, it is critical that you engage in goal setting – specifically setting SMART goals.</p>
                                                        <p className="mb-0">Focus is having the unwavering attention to complete what you set out to do. There are a million distractions in every facet of our lives.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="space-pb popup-gallery overflow-hidden">
                <div className="container-fluid">
                    <div className="row d-flex align-items-end">
                        <div className="col-md-6 col-lg-3 mb-4 mb-lg-3">
                            <a className="portfolio-img" href="images/gallery/01.jpg"><img className="img-fluid" src="images/gallery/01.jpg" alt="" /></a>
                        </div>
                        <div className="col-md-6 col-lg-3 mb-4 mb-lg-3">
                            <a className="portfolio-img" href="images/gallery/02.jpg"><img className="img-fluid w-100" src="images/gallery/02.jpg" alt="" /></a>
                        </div>
                        <div className="col-md-6 col-lg-3 mb-4 mb-lg-3">
                            <a className="portfolio-img" href="images/gallery/03.jpg"><img className="img-fluid" src="images/gallery/03.jpg" alt="" /></a>
                        </div>
                        <div className="col-md-6 col-lg-3 mb-4 mb-lg-3">
                            <a className="portfolio-img" href="images/gallery/04.jpg"><img className="img-fluid" src="images/gallery/04.jpg" alt="" /></a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-3 mt-0 mt-lg-3">
                            <a className="portfolio-img" href="images/gallery/05.jpg"><img className="img-fluid" src="images/gallery/05.jpg" alt="" /></a>
                        </div>
                        <div className="col-md-6 col-lg-3 mt-4 mt-lg-3">
                            <a className="portfolio-img" href="images/gallery/06.jpg"><img className="img-fluid w-100" src="images/gallery/06.jpg" alt="" /></a>
                        </div>
                        <div className="col-md-6 col-lg-3 mt-4 mt-lg-3">
                            <a className="portfolio-img" href="images/gallery/07.jpg"><img className="img-fluid" src="images/gallery/07.jpg" alt="" /></a>
                        </div>
                        <div className="col-md-6 col-lg-3 mt-4 mt-lg-3">
                            <a className="portfolio-img" href="images/gallery/08.jpg"><img className="img-fluid" src="images/gallery/08.jpg" alt="" /></a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-4 bg-transparant border">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="counter counter-02">
                                <div className="counter-icon align-self-center">
                                    <i className="flaticon-emoji"></i>
                                </div>
                                <div className="counter-content align-self-center">
                                    <span className="timer" data-to="1790" data-speed="10000">1790</span>
                                    <label>Happy Clients</label>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="counter counter-02">
                                <div className="counter-icon">
                                    <i className="flaticon-trophy"></i>
                                </div>
                                <div className="counter-content">
                                    <span className="timer" data-to="245" data-speed="10000">32</span>
                                    <label>Skilled Experts</label>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="counter counter-02">
                                <div className="counter-icon">
                                    <i className="flaticon-strong"></i>
                                </div>
                                <div className="counter-content">
                                    <span className="timer" data-to="491" data-speed="10000">491</span>
                                    <label>Finished Projects</label>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="counter counter-02">
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
                        <div className="col-sm-12 text-center">
                            <div className="owl-carousel testimonial" data-nav-arrow="true" data-nav-dots="false" data-items="1" data-lg-items="1" data-md-items="1" data-sm-items="1" data-space="0" data-autoheight="true">
                                <div className="item">
                                    <div className="testimonial-item">
                                        <div className="testimonial-avatar shadow">
                                            <img className="img-fluid rounded-circle" src="images/avatar/01.jpg" alt="" />
                                        </div>
                                        <div className="testimonial-content">
                                            <p>We don't take ourselves too seriously, but seriously enough to ensure we're creating the best product and experience for our customers. I feel like Help Scout does the same.</p>
                                        </div>
                                        <div className="testimonial-author">
                                            <div className="testimonial-name">
                                                <h6 className="mb-1">Alice Williams    </h6>
                                                <span>Vetrov Systems Development</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testimonial-item">
                                        <div className="testimonial-avatar shadow">
                                            <img className="img-fluid rounded-circle" src="images/avatar/02.jpg" alt="" />
                                        </div>
                                        <div className="testimonial-content">
                                            <p>The ERP TECH database has been one of our current sources for recruitment, backed by a very experienced team who would go out of their way to make sure that requests are taken ahead.</p>
                                        </div>
                                        <div className="testimonial-author">
                                            <div className="testimonial-name">
                                                <h6 className="mb-1">Michael Bean</h6>
                                                <span>Web Developer</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="space-pb our-clients">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-xl-3 col-lg-4 col-md-4 mb-4 mb-md-0">
                            <h5 className="text-primary mb-0">Awards and Nominees</h5>
                        </div>
                        <div className="col-xl-9 col-md-8">
                            <div className="owl-carousel" data-nav-arrow="false" data-items="4" data-md-items="4" data-sm-items="4" data-xs-items="3" data-xx-items="2" data-space="40" data-autoheight="true">
                                <div className="item">
                                    <img className="img-fluid w-75 grayscale" src="images/award-logo/01.svg" alt="" />
                                </div>
                                <div className="item">
                                    <img className="img-fluid w-75 grayscale" src="images/award-logo/02.svg" alt="" />
                                </div>
                                <div className="item">
                                    <img className="img-fluid w-75 grayscale" src="images/award-logo/03.svg" alt="" />
                                </div>
                                <div className="item">
                                    <img className="img-fluid w-75 grayscale" src="images/award-logo/04.svg" alt="" />
                                </div>
                                <div className="item">
                                    <img className="img-fluid w-75 grayscale" src="images/award-logo/05.svg" alt="" />
                                </div>
                                <div className="item">
                                    <img className="img-fluid w-75 grayscale" src="images/award-logo/06.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="space-pb dark-background">
                <div className="container">
                    <div className="bg-dark text-center rounded py-5 px-3">
                        <h2 className="text-white">Tell us about your idea, and we’ll make it happen.</h2>
                        <h6 className="text-white">Have a brand problem that needs to be solved? We’d love to hear about it!</h6>
                        <a href="about-us.html#" className="btn btn-primary-round btn-round mx-0 mx-md-3 text-white">Let’s Get Started<i className="fas fa-arrow-right ps-3"></i></a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CmsPage;
