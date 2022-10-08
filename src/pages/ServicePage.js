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


function ServicePage() {
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
            <section class="header-inner bg-overlay-black-50" style={{ backgroundImage: `url(${Config.frappe_url + '/' + serviceDetails.banner})` }}>
                <div class="container">
                    <div class="row d-flex justify-content-center">
                        <div class="col-md-8">
                            <div class="header-inner-title text-center position-relative">
                                <h1 class="text-white fw-normal">{serviceDetails?.title}</h1>
                                <p class="text-white mb-0">{serviceDetails?.sub_title}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div dangerouslySetInnerHTML={{ __html: serviceDetails?.content ? serviceDetails?.content : '' }}></div>
          
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

export default ServicePage;
