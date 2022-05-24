import React from 'react';
import Banner from '../Banner/Banner';
import Partner from '../Partner/Partner';
import Reviews from '../Reviews/Reviews';
import Subscribe from '../Subscribe/Subscribe';
import Support from '../Support/Support';
import Tools from '../Tools/Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <Reviews></Reviews>
            <Support></Support>
            <Partner></Partner>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;