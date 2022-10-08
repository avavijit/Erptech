import React, { useEffect } from "react";
import { Button, DatePicker, Switch } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import Icon from 'react-web-vector-icons';
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTheme } from "../theme/use-theme";
import { getServiceDetails } from '../store/MainRedux'
import Config from "../common/Config";
import { Helmet } from "react-helmet";


function ProductPage() {
    const token = Config.token
    let navigate = useNavigate();
    const { t } = useTranslation();
    const dispatch = useDispatch()
    let { name } = useParams();
    const serviceDetails = useSelector((state) => state.main.serviceDetails)

    useEffect(() => {
        dispatch(getServiceDetails({ token, id: name }))
    }, [name]);

    console.log(serviceDetails)

    return (
        <>
        <Helmet>
                <title>{serviceDetails?.meta_title}</title>
                <meta name="description" content={serviceDetails?.meta_title} />
            </Helmet>
            <section class="header-inner header-inner-menu bg-overlay-black-50">
                <div class="container position-relative">
                    <div class="row d-flex justify-content-center position-relative">
                        <div class="col-md-8">
                            <div class="header-inner-title text-center">
                                <h1 class="text-white fw-normal">About ERP TECH</h1>
                                <p class="text-white mb-0">Our Expertise. Know more about what we do</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="header-inner-nav">
                    <div class="container">
                        <div class="row">
                            <div class="col-12 d-flex justify-content-center">
                                <ul class="nav">
                                    <li class="nav-item"><a class="nav-link active" href="about-us.html">About us</a></li>
                                    <li class="nav-item"><a class="nav-link" href="careers.html">Careers</a></li>
                                    <li class="nav-item"><a class="nav-link" href="how-we-work.html">How we work</a></li>
                                    <li class="nav-item"><a class="nav-link" href="our-team.html">Our team</a></li>
                                    <li class="nav-item"><a class="nav-link" href="mission-vision.html">Mission and vision</a></li>
                                    <li class="nav-item"><a class="nav-link" href="our-value.html">Our values</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="space-ptb">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-9">
                            <div class="section-title text-center">
                                <h2>Established 2010 in ERP TECH has been offering world-class information technology.</h2>
                                <p class="px-xl-5">Positive pleasure-oriented goals are much more powerful motivators than negative fear-based ones. Although each is successful separately, the right combination of both is the most powerful motivational force known to humankind.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-md-10">
                            <div class="cd-horizontal-timeline">
                                <div class="timeline">
                                    <div class="events-wrapper">
                                        <div class="events">
                                            <ul>
                                                <li><a href="about-us.html#0" data-date="01/01/2010" class="selected">2010</a></li>
                                                <li><a href="about-us.html#0" data-date="01/01/2012">2012</a></li>
                                                <li><a href="about-us.html#0" data-date="01/01/2014">2014</a></li>
                                                <li><a href="about-us.html#0" data-date="01/01/2016">2016</a></li>
                                                <li><a href="about-us.html#0" data-date="01/01/2018">2018</a></li>
                                                <li><a href="about-us.html#0" data-date="01/01/2020">2020</a></li>
                                            </ul>
                                            <span class="filling-line" aria-hidden="true"></span>
                                        </div>

                                    </div>

                                    <ul class="cd-timeline-navigation">
                                        <li><a href="about-us.html#0" class="prev inactive"></a></li>
                                        <li><a href="about-us.html#0" class="next"></a></li>
                                    </ul>

                                </div>

                                <div class="events-content">
                                    <ul>
                                        <li class="selected" data-date="01/01/2010">
                                            <div class="row">
                                                <div class="col-md-4 position-relative">
                                                    <h1 class="year">2010</h1>
                                                </div>
                                                <div class="col-md-8">
                                                    <div class="timeline-text">
                                                        <h6 class="text-dark"> They often mean leaving the perception of security in order to discover your personal freedom. These are the changes that will bring happiness and satisfaction into your life. Just go there now.</h6>
                                                        <p class="border-start ps-3 font-italic">10 years out… having made a decade of changes. Imagine living the life you want to live.</p>
                                                        <p class="mb-0">The best way is to develop and follow a plan. Start with your goals in mind and then work backwards to develop the plan. What steps are required to get you to the goals? Make the plan as detailed as possible. Try to visualize and then plan for, every possible setback. Commit the plan to paper and then keep it with you at all times. Review it regularly and ensure that every step takes you closer to your Vision and Goals.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li data-date="01/01/2012">
                                            <div class="row">
                                                <div class="col-md-4 position-relative">
                                                    <h1 class="year">2012</h1>
                                                </div>
                                                <div class="col-md-8">
                                                    <div class="timeline-text">
                                                        <h6 class="text-dark">What is the exact sequence of events that will take you to where you want to be? Have a think consciously of what you need to do. Every outcome begins with the first step.</h6>
                                                        <p class="border-start ps-3 font-italic">When you decide you want to have a romantic meal for two, there are many steps that you need to perform in order for that to happen.</p>
                                                        <p class="mb-0">This is the beginning of creating the life that you want to live. Know what the future holds for you as a result of the choice you can make today.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li data-date="01/01/2014">
                                            <div class="row">
                                                <div class="col-md-4 position-relative">
                                                    <h1 class="year">2014</h1>
                                                </div>
                                                <div class="col-md-8">
                                                    <div class="timeline-text">
                                                        <h6 class="text-dark">Have some fun and hypnotize yourself to be your very own “Ghost of Christmas future” and see what the future holds for you. Success is something of which we all want more. Most people believe that success is difficult.</h6>
                                                        <p class="border-start ps-3 font-italic">Get the oars in the water and start rowing. Execution is the single biggest factor in achievement.</p>
                                                        <p class="mb-0">The price is something not necessarily defined as financial. It could be time, effort, sacrifice, money or perhaps, something else. The point is that we must be fully aware of the price and be willing to pay it</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li data-date="01/01/2016">
                                            <div class="row">
                                                <div class="col-md-4 position-relative">
                                                    <h1 class="year">2016</h1>
                                                </div>
                                                <div class="col-md-8">
                                                    <div class="timeline-text">
                                                        <h6 class="text-dark">He sells his farm and hikes off over the horizon, never to be heard from again. Rumors say that years later he died destitute, never having found the diamonds he spent his life seeking.</h6>
                                                        <p class="border-start ps-3 font-italic">I don’t think the deciding factor was the desire. Lots of people come here to Japan, but never quite find out how to stay. </p>
                                                        <p class="mb-0">Instead, it seems to be more a matter of what they can allow themselves to have. Some people call this a sense of deserving. Others call it a sense of entitlement. No matter what term you use, it’s basically the same thing.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li data-date="01/01/2018">
                                            <div class="row">
                                                <div class="col-md-4 position-relative">
                                                    <h1 class="year">2018</h1>
                                                </div>
                                                <div class="col-md-8">
                                                    <div class="timeline-text">
                                                        <h6 class="text-dark">Introspection is the trick. Understand what you want, why you want it and what it will do for you. This is a critical factor, and as such, is probably the most difficult step. For this reason, most people never complete this aspect – then wonder why life is so difficult!</h6>
                                                        <p class="border-start ps-3 font-italic">“Nothing changes until something moves” – this is the battle cry of author and journalist Robert Ringer. And he is absolutely correct</p>
                                                        <p class="mb-0">Without clarity, you send a very garbled message out to the Universe. We know that the Law of Attraction says that we will attract what we focus on, so if we don’t have clarity, we will attract confusion.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li data-date="01/01/2020">
                                            <div class="row">
                                                <div class="col-md-4 position-relative">
                                                    <h1 class="year">2020</h1>
                                                </div>
                                                <div class="col-md-8">
                                                    <div class="timeline-text">
                                                        <h6 class="text-dark">Make no mistake, the new owner already had money, or he could not have bought the land. There’s nothing in this story to make us think he was dreaming about riches, vast or otherwise. No burning desire. But he got the goodies.</h6>
                                                        <p class="border-start ps-3 font-italic">Once you have a clear understanding of what you want, it is critical that you engage in goal setting – specifically setting SMART goals.</p>
                                                        <p class="mb-0">Focus is having the unwavering attention to complete what you set out to do. There are a million distractions in every facet of our lives.</p>
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

            <section class="space-pb popup-gallery overflow-hidden">
                <div class="container-fluid">
                    <div class="row d-flex align-items-end">
                        <div class="col-md-6 col-lg-3 mb-4 mb-lg-3">
                            <a class="portfolio-img" href="images/gallery/01.jpg"><img class="img-fluid" src="images/gallery/01.jpg" alt="" /></a>
                        </div>
                        <div class="col-md-6 col-lg-3 mb-4 mb-lg-3">
                            <a class="portfolio-img" href="images/gallery/02.jpg"><img class="img-fluid w-100" src="images/gallery/02.jpg" alt="" /></a>
                        </div>
                        <div class="col-md-6 col-lg-3 mb-4 mb-lg-3">
                            <a class="portfolio-img" href="images/gallery/03.jpg"><img class="img-fluid" src="images/gallery/03.jpg" alt="" /></a>
                        </div>
                        <div class="col-md-6 col-lg-3 mb-4 mb-lg-3">
                            <a class="portfolio-img" href="images/gallery/04.jpg"><img class="img-fluid" src="images/gallery/04.jpg" alt="" /></a>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 col-lg-3 mt-0 mt-lg-3">
                            <a class="portfolio-img" href="images/gallery/05.jpg"><img class="img-fluid" src="images/gallery/05.jpg" alt="" /></a>
                        </div>
                        <div class="col-md-6 col-lg-3 mt-4 mt-lg-3">
                            <a class="portfolio-img" href="images/gallery/06.jpg"><img class="img-fluid w-100" src="images/gallery/06.jpg" alt="" /></a>
                        </div>
                        <div class="col-md-6 col-lg-3 mt-4 mt-lg-3">
                            <a class="portfolio-img" href="images/gallery/07.jpg"><img class="img-fluid" src="images/gallery/07.jpg" alt="" /></a>
                        </div>
                        <div class="col-md-6 col-lg-3 mt-4 mt-lg-3">
                            <a class="portfolio-img" href="images/gallery/08.jpg"><img class="img-fluid" src="images/gallery/08.jpg" alt="" /></a>
                        </div>
                    </div>
                </div>
            </section>

            <section class="py-4 bg-transparant border">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-sm-6">
                            <div class="counter counter-02">
                                <div class="counter-icon align-self-center">
                                    <i class="flaticon-emoji"></i>
                                </div>
                                <div class="counter-content align-self-center">
                                    <span class="timer" data-to="1790" data-speed="10000">1790</span>
                                    <label>Happy Clients</label>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="counter counter-02">
                                <div class="counter-icon">
                                    <i class="flaticon-trophy"></i>
                                </div>
                                <div class="counter-content">
                                    <span class="timer" data-to="245" data-speed="10000">32</span>
                                    <label>Skilled Experts</label>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="counter counter-02">
                                <div class="counter-icon">
                                    <i class="flaticon-strong"></i>
                                </div>
                                <div class="counter-content">
                                    <span class="timer" data-to="491" data-speed="10000">491</span>
                                    <label>Finished Projects</label>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="counter counter-02">
                                <div class="counter-icon">
                                    <i class="flaticon-icon-149196"></i>
                                </div>
                                <div class="counter-content">
                                    <span class="timer" data-to="1090" data-speed="10000">1090</span>
                                    <label>Media Posts</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="space-ptb">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-sm-12 text-center">
                            <div class="owl-carousel testimonial" data-nav-arrow="true" data-nav-dots="false" data-items="1" data-lg-items="1" data-md-items="1" data-sm-items="1" data-space="0" data-autoheight="true">
                                <div class="item">
                                    <div class="testimonial-item">
                                        <div class="testimonial-avatar shadow">
                                            <img class="img-fluid rounded-circle" src="images/avatar/01.jpg" alt="" />
                                        </div>
                                        <div class="testimonial-content">
                                            <p>We don't take ourselves too seriously, but seriously enough to ensure we're creating the best product and experience for our customers. I feel like Help Scout does the same.</p>
                                        </div>
                                        <div class="testimonial-author">
                                            <div class="testimonial-name">
                                                <h6 class="mb-1">Alice Williams    </h6>
                                                <span>Vetrov Systems Development</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="testimonial-item">
                                        <div class="testimonial-avatar shadow">
                                            <img class="img-fluid rounded-circle" src="images/avatar/02.jpg" alt="" />
                                        </div>
                                        <div class="testimonial-content">
                                            <p>The ERP TECH database has been one of our current sources for recruitment, backed by a very experienced team who would go out of their way to make sure that requests are taken ahead.</p>
                                        </div>
                                        <div class="testimonial-author">
                                            <div class="testimonial-name">
                                                <h6 class="mb-1">Michael Bean</h6>
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

            <section class="space-pb our-clients">
                <div class="container">
                    <div class="row align-items-center justify-content-center">
                        <div class="col-xl-3 col-lg-4 col-md-4 mb-4 mb-md-0">
                            <h5 class="text-primary mb-0">Awards and Nominees</h5>
                        </div>
                        <div class="col-xl-9 col-md-8">
                            <div class="owl-carousel" data-nav-arrow="false" data-items="4" data-md-items="4" data-sm-items="4" data-xs-items="3" data-xx-items="2" data-space="40" data-autoheight="true">
                                <div class="item">
                                    <img class="img-fluid w-75 grayscale" src="images/award-logo/01.svg" alt="" />
                                </div>
                                <div class="item">
                                    <img class="img-fluid w-75 grayscale" src="images/award-logo/02.svg" alt="" />
                                </div>
                                <div class="item">
                                    <img class="img-fluid w-75 grayscale" src="images/award-logo/03.svg" alt="" />
                                </div>
                                <div class="item">
                                    <img class="img-fluid w-75 grayscale" src="images/award-logo/04.svg" alt="" />
                                </div>
                                <div class="item">
                                    <img class="img-fluid w-75 grayscale" src="images/award-logo/05.svg" alt="" />
                                </div>
                                <div class="item">
                                    <img class="img-fluid w-75 grayscale" src="images/award-logo/06.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="space-pb dark-background">
                <div class="container">
                    <div class="bg-dark text-center rounded py-5 px-3">
                        <h2 class="text-white">Tell us about your idea, and we’ll make it happen.</h2>
                        <h6 class="text-white">Have a brand problem that needs to be solved? We’d love to hear about it!</h6>
                        <a href="about-us.html#" class="btn btn-primary-round btn-round mx-0 mx-md-3 text-white">Let’s Get Started<i class="fas fa-arrow-right ps-3"></i></a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProductPage;
