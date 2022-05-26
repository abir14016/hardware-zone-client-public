import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className='row'>
            <div className='border col-2 side-nav shadow-lg'>
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <Link className="nav-link active" to="/dashboard">My Orders</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to="/dashboard/myreviews">My Reviews</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to="/dashboard/myprofile">My Profile</Link>
                    </li>
                </ul>
            </div>
            <div className='col-10'>
                <h1 className='text-center text-primary'>this is dashboard</h1>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;