import React from 'react';
import { useParams } from 'react-router-dom';
import UseOrderDetail from '../../../Hooks/UseOrderDetail.js';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading.js';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../CheckoutForm/CheckoutForm.js';

const stripePromise = loadStripe('pk_test_51L4lRMGqDaIgh0IwGOz2P5yy5RJf34gvhUXwTvrE3Jgs65ZPuxv28aP65v4zUarXOysl6jWVcmpNXLGmnLxmR9qn00KLtYgPkg');

const Payment = () => {
    const [user] = useAuthState(auth);
    const { myorderId: orderId } = useParams();
    // const [order] = UseOrderDetail(orderId);
    // const { tool, quantity, price } = order;

    const url = `https://sleepy-lowlands-12245.herokuapp.com/myorder/${orderId}`
    const { data: order, isLoading } = useQuery(['myOrders', orderId], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className="card w-50 bg-dark text-white shadow-lg">
                <div className="card-body">
                    <p className='text-primary fw-bold'>Hello, {user.displayName} </p>
                    <h5>plz pay for {order.tool}:</h5>
                    <p>You ordered {order.quantity} PCs {order.tool}</p>
                    <p className='fw-bold'>plz pay: ${order.price}</p>
                </div>
            </div>

            <div className="card w-50 shadow-lg my-4">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm
                            order={order}
                        />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;