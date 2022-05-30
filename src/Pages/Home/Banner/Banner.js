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
                        <h1 className='text-warning fw-bolder'>Tools Manufucturer</h1>
                        <p>biggest tools manufacturer company in world</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1 className='text-warning fw-bolder'>Hardware Manufucturer</h1>
                        <p>biggest hardware manufacturer company in world</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Forth slide"
                    />

                    <Carousel.Caption>
                        <h1 className='text-warning fw-bolder'>Biggest Supplier of Hardware</h1>
                        <p>you can always keep trust on us.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;