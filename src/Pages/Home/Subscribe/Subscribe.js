import React from 'react';
import './Subscribe.css'

const Subscribe = () => {
    return (
        <div className='bg-dark p-5 subscribe-container'>
            <div className='bg-white sub-division mx-auto p-4 rounded-3'>
                <h3 className='text-center'>Grab your services</h3>
                <div className="text-center">
                    <p>Keep in touch with us <br /> by subcribing</p>
                </div>
                <h6 className='bg-warning w-75 mx-auto text-muted p-2'>please subscribe</h6>
                <div className='text-center'>
                    <button className='btn btn-success'>Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;