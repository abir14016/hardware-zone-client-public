import React from 'react';
import { useParams } from 'react-router-dom';

const Payment = () => {
    const { myorderId } = useParams();
    return (
        <div>
            <h2>Payment for :{myorderId} </h2>
        </div>
    );
};

export default Payment;