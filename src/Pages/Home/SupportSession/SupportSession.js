import React from 'react';
import { Link } from 'react-router-dom';
import './SupportSession.css'

const SupportSession = () => {
    return (
        <div className='shadow-lg p-5 supportsession-container mx-auto mt-5'>
            <h3 className='text-center'>Sorry, currently Support session is off</h3>
            <div className='text-center'>
                <Link to="/" className='btn btn-primary rounded-pill'>Home</Link>
            </div>
        </div>
    );
};

export default SupportSession;