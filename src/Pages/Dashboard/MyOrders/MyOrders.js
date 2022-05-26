import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import MyOrder from '../MyOrder/MyOrder';
import './MyOrders.css';

const MyOrders = () => {
    const [user] = useAuthState(auth)
    const email = user.email;
    const [myOrders, setMyOrders] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/myorder?email=${email}`)
            .then(res => res.json())
            .then(data => setMyOrders(data))
    }, [email]);
    return (
        <div className='my-orders'>
            <h3 className='text-center'>My Order List</h3>
            {
                myOrders.length > 0 ? <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Tool</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Manage</th>
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