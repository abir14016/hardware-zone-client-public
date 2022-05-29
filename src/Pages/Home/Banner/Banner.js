import React from 'react';
import { Carousel } from 'react-bootstrap';

import banner1 from '../../../images/banner/banner-1.png'
import banner2 from '../../../images/banner/banner-2.png'
import banner3 from '../../../images/banner/banner-3.png'
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner">
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1 className='text-warning fw-bolder'>Exercise Is The Success</h1>
                        <p>You should exercise regularly to become fit</p>
                    </Carousel.Caption>
                </Carousel.Item>
                {/* <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner4}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1 className='text-warning fw-bolder'>Be Focused And Concentrated</h1>
                        <p>You should be more focused to get success</p>
                    </Carousel.Caption>
                </Carousel.Item> */}
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1 className='text-warning fw-bolder'>Work Hard On the Gym</h1>
                        <p>Today's Pain will make you stronger</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Forth slide"
                    />

                    <Carousel.Caption>
                        <h1 className='text-warning fw-bolder'>Keep Fighiting Untill Win</h1>
                        <p>Always be calm and focused.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;