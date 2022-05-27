import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import './Reviews.css';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/myreview')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);
    return (
        <>
            {
                reviews.length > 0 && <div>
                    <h3 className='text-center pb-5'>REVIEWS</h3>
                    <div className='container reviews-container'>
                        {
                            reviews.map(review => <Review
                                key={review._id}
                                review={review}
                            ></Review>)
                        }
                    </div>
                </div>
            }
        </>
    );
};

export default Reviews;