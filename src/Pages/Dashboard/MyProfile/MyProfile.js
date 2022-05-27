import axios from 'axios';
import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import './MyProfile.css';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const handleSave = event => {
        event.preventDefault();
        const degree = event.target.degree.value;
        const district = event.target.district.value;
        const phone = event.target.phone.value;
        const linkedIn = event.target.linkedIn.value;

        const data = {
            degree: degree,
            district: district,
            phone: phone,
            linkedIn: linkedIn
        }

        axios.post(`http://localhost:5000/userprofile`, data)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast.success("Information Saved");
                }
            });
    }
    return (
        <div className='my-profile-container'>
            <div>
                <Card className='shadow-lg profile-card'>
                    <Card.Img variant="top" src={user?.photoURL} />
                    <Card.Body>
                        <Card.Title>{user?.displayName}</Card.Title>
                        <Card.Text className='text-danger'>
                            {user?.email}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>

            <div>
                <Form onSubmit={handleSave} className='shadow-lg p-5 rounded'>
                    <Form.Group className="mb-3" controlId="formBasicEducation">
                        <Form.Label>Your Degree</Form.Label>
                        <Form.Control type="text" name="degree" placeholder="Your Education" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicDistrict">
                        <Form.Label>District</Form.Label>
                        <Form.Control type="text" name="district" placeholder="Enter Your District" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPhone">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="text" name="phone" placeholder="Enter Your Phone Number" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicLinkedIn">
                        <Form.Label>LinkedIn Profile</Form.Label>
                        <Form.Control type="text" name="linkedIn" placeholder="Your LinkedIn Profile Link" required />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Save
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default MyProfile;