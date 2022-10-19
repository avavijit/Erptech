import React, { useEffect } from "react";
import { Button, DatePicker, Switch } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import Icon from 'react-web-vector-icons';
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTheme } from "../theme/use-theme";
import { getHomeSettings, getPageDetails } from '../store/MainRedux'
import Config from "../common/Config";
import { Helmet } from "react-helmet";

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

    return (
        <>
            <Helmet>
                <title>{pageDetails?.meta_title}</title>
                <meta name="description" content={pageDetails?.meta_title} />
            </Helmet>
            {pageDetails.banner && (<section className="header-inner header-inner-menu bg-overlay-black-50" style={{ backgroundImage: `url(${Config.frappe_url + '/' + pageDetails.banner})` }}>
                <div className="container position-relative">
                    <div className="row d-flex justify-content-center position-relative">
                        <div className="col-md-8">
                            <div className="header-inner-title text-center">
                                <h1 className="text-white fw-normal">{pageDetails.title}</h1>
                                <p className="text-white mb-0">{pageDetails.sub_title}</p>
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
                                    <li className="nav-item"><NavLink className="nav-link" to="/page/how-we-work">How we work</NavLink></li>
                                    <li className="nav-item"><NavLink className="nav-link" to="/page/our-team">Our team</NavLink></li>
                                    <li className="nav-item"><NavLink className="nav-link" to="/page/mission-vision">Mission and vision</NavLink></li>
                                    <li className="nav-item"><NavLink className="nav-link" to="/page/our-value">Our values</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>)}

            <div dangerouslySetInnerHTML={{ __html: pageDetails?.main_section_html ? pageDetails?.main_section_html : pageDetails?.main_section }}></div>
        </>
    );
};

export default CmsPage;
