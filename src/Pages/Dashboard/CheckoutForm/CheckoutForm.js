import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const CheckoutForm = ({ order }) => {
    const [user] = useAuthState(auth);
    const { price, email, _id } = order;
    const [cardError, setCardError] = useState('');
    const [successs, setSuccess] = useState('');
    const [transectionId, setTransectionId] = useState('');
    // const [processing, setProcessing] = useState(false);
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret)
                }
            })
    }, [price])

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        setCardError(error?.message || '');
        setSuccess('')

        //confirm card payment
        // setProcessing(true);
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user.displayName,
                        email: email
                    },
                },
            },
        );

        if (intentError) {
            setCardError(intentError?.message);
        }
        else {
            setCardError('');
            console.log(paymentIntent)
            setSuccess("payment is completed")
            setTransectionId(paymentIntent.id);

            // const payment = {
            //     paymentOrder: _id,
            //     transectionId: paymentIntent.id
            // }

            // fetch(`http://localhost:5000/myorder/${_id}`, {
            //     method: 'PATCH',
            //     headers: {
            //         'content-type': 'application/json',
            //         // 'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            //     },
            //     body: JSON.stringify(payment)
            // }).then(res => res.json())
            //     .then(data => {
            //         setProcessing(false);
            //         console.log(data);
            //     })
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-dark my-3' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className='text-danger'>{cardError}</p>
            }
            {
                successs && <div>
                    <p className='text-success fw-bold'>{successs}</p>
                    <p>Your transaction ID: <span className='text-warning fw-bolder'>{transectionId}</span></p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;