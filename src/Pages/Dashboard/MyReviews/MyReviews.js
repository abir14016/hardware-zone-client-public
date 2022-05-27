import axios from 'axios';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import './MyReviews.css'

const MyReviews = () => {
    const [user] = useAuthState(auth);
    const handleAddReview = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const name = event.target.name.value;
        const review = event.target.review.value;

        const data = {
            email: email,
            name: name,
            review: review
        }

        axios.post(`http://localhost:5000/myreview`, data)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast.success("Review Added");
                }
            })
    }
    return (
        <div>
            <Form onSubmit={handleAddReview} className='order-form bg-dark text-white px-3 py-4'>
                <h3 className='text-center'>Order Now</h3>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name='email' defaultValue={user.email} readOnly />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='address' defaultValue={user.displayName} readOnly />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicReview">
                    <Form.Label>Review</Form.Label>
                    <Form.Control type="text" as="textarea" name='review' placeholder='Put Your review' required />
                </Form.Group>

                <div className='text-center'>
                    <Button variant="primary" type="submit">
                        Add Review
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default MyReviews;