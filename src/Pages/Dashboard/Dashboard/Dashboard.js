import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../../firebase.init';
import UseAdmin from '../../../Hooks/UseAdmin';
import UseNonAdmin from '../../../Hooks/UseNonAdmin';
import './Dashboard.css';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = UseAdmin(user);
    const [nonAdmin] = UseNonAdmin(user);
    return (
        <div className='row'>
            <div className='border col-4 col-md-2 side-nav shadow-lg'>
                <ul className="nav flex-column">
                    {
                        nonAdmin && <li className="nav-item"><Link className="nav-link active fw-bold" to="/dashboard">My Orders</Link></li>
                    }
                    {
                        nonAdmin && <li className="nav-item">
                            <Link className="nav-link active fw-bold" to="/dashboard/myreviews">My Reviews</Link>
                        </li>
                    }
                    <li className="nav-item">
                        <Link className="nav-link active fw-bold" to="/dashboard/myprofile">My Profile</Link>
                    </li>
                    {
                        admin && <li className="nav-item">
                            <Link className="nav-link active fw-bold" to="/dashboard/managetools">Manage Tools</Link>
                        </li>
                    }
                    {
                        admin && <li className="nav-item">
                            <Link className="nav-link active fw-bold" to="/dashboard/addtools">Add Tools</Link>
                        </li>
                    }

                    {
                        admin && <li className="nav-item">
                            <Link className="nav-link active fw-bold" to="/dashboard">Make Admin</Link></li>
                    }

                    {
                        admin && <li className="nav-item">
                            <Link className="nav-link active fw-bold" to="/dashboard/manageorders">Manage Orders</Link></li>
                    }
                </ul>
            </div>
            <div className='col-8 col-md-10'>
                <div className='profile-container px-4 py-2'>
                    <div className='container dashboard-header'>
                        <div className='text-secondary'>
                            <img className='rounded-circle' style={{ width: 60 }} src={user.photoURL} alt="" />
                            <h4 className='text-white'>{user.displayName}</h4>
                            <p className='text-white'>{user.email}</p>
                        </div>
                        <div>
                            <Link to="/" className='btn btn-primary rounded-pill'>Home</Link>
                        </div>
                    </div>
                </div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;