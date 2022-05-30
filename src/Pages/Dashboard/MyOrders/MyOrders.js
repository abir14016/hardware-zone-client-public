import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import MyOrder from '../MyOrder/MyOrder';
import './MyOrders.css';

const MyOrders = () => {
    const [user] = useAuthState(auth)
    const email = user?.email;
    const [myOrders, setMyOrders] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:5000/myorder?email=${email}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem('accessToken');
                    navigate('/');
                }
                return res.json()
            })
            .then(data => setMyOrders(data))
    }, [user, email, navigate]);

    return (
        <div className='my-orders'>
            <h3 className='text-center'>My Order List</h3>
            {
                myOrders.length > 0 ? <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Tool</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Price($)</th>
                            <th scope="col">Manage</th>
                            <th scope="col">Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myOrders.map(myOrder => <MyOrder
                                key={myOrder._id}
                                myOrder={myOrder}
                                myOrders={myOrders}
                                setMyOrders={setMyOrders}
                            ></MyOrder>)
                        }
                    </tbody>
                </table> : <div>
                    <h1 className='text-secondary text-center'>Nothing to show here</h1>
                </div>
            }
        </div>
    );
};

export default MyOrders;