import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div className='text-center mt-5'>
            <Spinner animation="grow" variant='warning' />
        </div>
    );
};

export default Loading;