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
        const image = event.target.image.value;
        const review = event.target.review.value;
        const ratings = event.target.ratings.value;

        const myReview = {
            email: email,
            name: name,
            image: image,
            userReview: review,
            ratings: ratings
        }

        // axios.post(`https://sleepy-lowlands-12245.herokuapp.com/myreview`, data)
        //     .then(response => {
        //         const { data } = response;
        //         if (data.insertedId) {
        //             toast.success("Review Added");
        //         }
        //     });

        const url = `https://sleepy-lowlands-12245.herokuapp.com/myreview/${email}`;
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(myReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.upsertedId) {
                    toast.success("Review Added");
                }
                if (data.modifiedCount > 0) {
                    toast.success("Review Updated");
                }
                if (!data.modifiedCount && !data.upsertedId) {
                    toast.error("Failed to Update Review");
                }
                event.target.reset();
            })
    }
    return (
        <div>
            <Form onSubmit={handleAddReview} className='order-form bg-dark text-white px-3 py-4'>
                <h3 className='text-center'>Add Review</h3>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name='email' defaultValue={user.email} readOnly />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' defaultValue={user.displayName} readOnly />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicImage">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='image' defaultValue={user.photoURL} readOnly />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicReview">
                    <Form.Label>Review</Form.Label>
                    <Form.Control type="text" as="textarea" name='review' placeholder='Put Your review' required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicRatings">
                    <Form.Label>Ratings</Form.Label>
                    <Form.Control type="number" min={1} max={5} step={1} name='ratings' placeholder='Your Ratings' required />
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