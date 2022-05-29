import React from "react";
import Slider from "react-slick";
import bkash from '../../../images/partners/bkash.png';
import icc from '../../../images/partners/icc.png';
import bcb from '../../../images/partners/bcb.png';
import evaly from '../../../images/partners/evaly.png';
import nike from '../../../images/partners/nike.png';
import fresh from '../../../images/partners/fresh.png';
import easports from '../../../images/partners/easports.png';
import react from '../../../images/partners/react.png';
import mongodb from '../../../images/partners/mongodb.png';
import banglalink from '../../../images/partners/banglalink.png';
import amazon from '../../../images/partners/amazon.png';
import robi from '../../../images/partners/robi.png';
import './Partner.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Partner = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    return (
        <div>
            <div>
                <h2 className="text-center mb-4">
                    Our Partners
                </h2>
                <Slider {...settings}>
                    <div>
                        <img className="partner-image" src={amazon} alt="" />
                    </div>
                    <div>
                        <img className="partner-image" src={easports} alt="" />
                    </div>
                    <div>
                        <img className="partner-image" src={evaly} alt="" />
                    </div>
                    <div>
                        <img className="partner-image" src={robi} alt="" />
                    </div>
                    <div>
                        <img className="partner-image" src={icc} alt="" />
                    </div>
                    <div>
                        <img className="partner-image" src={bcb} alt="" />
                    </div>
                    <div>
                        <img className="partner-image" src={banglalink} alt="" />
                    </div>
                    <div>
                        <img className="partner-image" src={nike} alt="" />
                    </div>
                    <div>
                        <img className="partner-image" src={fresh} alt="" />
                    </div>
                    <div>
                        <img className="partner-image" src={react} alt="" />
                    </div>
                    <div>
                        <img className="partner-image" src={mongodb} alt="" />
                    </div>
                    <div>
                        <img className="partner-image" src={bkash} alt="" />
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Partner;