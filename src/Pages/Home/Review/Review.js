import React from 'react';
import { DynamicStar } from 'react-dynamic-star';
import './Review.css';

const Review = ({ review }) => {
    const { email, name, image, userReview, ratings } = review;
    return (
        <div className="card bg-dark text-white mb-3 review">
            <div className="card-header">
                <h4 className='text-center'>{name}</h4>
            </div>
            <div className="card-body">
                <div className='text-center'>
                    <img className='reviwer-image' src={image} alt="" />
                    <p className='text-center'><small className='text-muted'>{email}</small></p>
                </div>
                <p className="card-text text-center fw-bold text-muted">{userReview.slice(0, 70)}...</p>
                <div className='mx-auto w-50'>
                    <DynamicStar width="20" rating={parseInt(ratings)} />
                </div>
            </div>
        </div>
    );
};

export default Review;