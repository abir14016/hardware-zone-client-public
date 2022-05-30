import axios from 'axios';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const AddTools = () => {
    const [user] = useAuthState(auth);
    const handleAddTools = event => {
        event.preventDefault();
        const providerEmail = event.target.email.name;
        const providerName = event.target.name.value;
        const name = event.target.tool.value;
        const image = event.target.image.value;
        const description = event.target.description.value;
        const price = event.target.price.value;
        const availableQuantity = event.target.quantity.value;
        const minimumOrder = event.target.minOrder.value;

        const data = {
            providerEmail: providerEmail,
            providerName: providerName,
            name: name,
            image: image,
            description: description,
            price: price,
            availableQuantity: availableQuantity,
            minimumOrder: minimumOrder
        }

        axios.post(`http://localhost:5000/addtool`, data)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast.success("Tool Added");
                }
            });
    }
    return (
        <div>
            <Form onSubmit={handleAddTools} className='order-form bg-dark text-white px-3 py-4 rounded'>
                <h3 className='text-center'>Add A Tool</h3>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name='email' defaultValue={user.email} readOnly />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name='name' defaultValue={user.displayName} readOnly />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicTool">
                    <Form.Label>Tool Name</Form.Label>
                    <Form.Control type="text" name='tool' placeholder='Tool name' required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicImage">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='image' defaultValue="https://i.ibb.co/KW3Pw6T/drill-machine.png" />
                    <Form.Text className="text-muted">
                        Default image is given for simplicity. You can enter your image url.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPrice">
                    <Form.Label>Price(per quantity)</Form.Label>
                    <Form.Control type="number" min={1} max={30} name='price' placeholder='Price' required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicQuantity">
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control type="number" min={1} max={15} name='quantity' placeholder='Quantity' required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicOrder">
                    <Form.Label>Minimum Order Quantity</Form.Label>
                    <Form.Control type="number" min={1} max={15} name='minOrder' placeholder='Minimum Order' required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" as="textarea" name='description' placeholder='Description' required />
                </Form.Group>

                <div className='text-center'>
                    <Button variant="primary" type="submit">
                        Confirm
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default AddTools;