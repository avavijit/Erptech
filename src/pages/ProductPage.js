import React, { useEffect } from "react";
import { Button, DatePicker, Switch } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import Icon from 'react-web-vector-icons';
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTheme } from "../theme/use-theme";
import { getProductDetails } from '../store/MainRedux'
import Config from "../common/Config";
import { Helmet } from "react-helmet";


function ProductPage() {
    const token = Config.token
    let navigate = useNavigate();
    const { t } = useTranslation();
    const dispatch = useDispatch()
    let { name } = useParams();
    const serviceDetails = useSelector((state) => state.main.serviceDetails)
    const productDetails = useSelector((state) => state.main.productDetails)

    useEffect(() => {
        dispatch(getProductDetails({ token, id: name }))
    }, [name]);

    console.log(productDetails)

    return (
        <>
            <Helmet>
                <title>{productDetails?.meta_title}</title>
                <meta name="description" content={productDetails?.meta_title} />
            </Helmet>

            <section class="header-inner header-inner-menu bg-overlay-black-30" style={{ backgroundImage: `url(${Config.frappe_url + '/' + productDetails.banner})` }}>
                <div class="container">
                    <div class="row d-flex justify-content-center">
                        <div class="col-md-8">
                            <div class="header-inner-title text-center position-relative">
                                <h1 class="text-white fw-normal">{productDetails?.title}</h1>
                                <p class="text-white mb-0">{productDetails?.sub_title}</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="header-inner-nav">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-12 d-flex justify-content-center">
                                <ul class="nav">
                                    <li class="nav-item"><a class="nav-link" href="#overview">Overview</a></li>
                                    {/* <li class="nav-item"><a class="nav-link" href="#service-offerings">Service Offerings</a></li> */}
                                    <li class="nav-item"><a class="nav-link" href="#technology">Technology </a></li>
                                    <li class="nav-item"><a class="nav-link" href="#delivering-results">Delivering Results </a></li>
                                    <li class="nav-item"><a class="nav-link" href="#client-success">Client Success </a></li>
                                    <li class="nav-item"><a class="nav-link" href="#case-studies">Case Studies</a></li>
                                    <li class="nav-item"><a class="nav-link" href="#contact-us">Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </section>


            <section id="overview" class="space-ptb bg-light">
                <div dangerouslySetInnerHTML={{ __html: productDetails?.overview ? productDetails?.overview : '' }}></div>
            </section>

            <section id="technology" class="space-ptb bg-light-half-md">
                <div dangerouslySetInnerHTML={{ __html: productDetails?.technology ? productDetails?.technology : '' }}></div>
            </section>


            <section id="delivering-results" class="space-ptb">
                <div dangerouslySetInnerHTML={{ __html: productDetails?.delivering_results ? productDetails?.delivering_results : '' }}></div>
            </section>

            <section id="client-success" class="space-ptb bg-light">
                <div dangerouslySetInnerHTML={{ __html: productDetails?.client_success ? productDetails?.client_success : '' }}></div>
            </section>

            <section id="case-studies" class="space-ptb">
                <div dangerouslySetInnerHTML={{ __html: productDetails?.case_studies ? productDetails?.case_studies : '' }}></div>
            </section>

            <section id="contact-us" class="space-pb">
                <div dangerouslySetInnerHTML={{ __html: productDetails?.contact_us ? productDetails?.contact_us : '' }}></div>
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
