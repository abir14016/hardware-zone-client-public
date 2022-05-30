import React from 'react';
import { useParams } from 'react-router-dom';
import updateImage from '../../images/utilities/update.png';
import UseToolDetail from '../../Hooks/UseToolDetail';
import { useAuthState } from 'react-firebase-hooks/auth';
import './Purchase.css';
import { Button, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import axios from 'axios';

const Purchase = () => {
    const [user] = useAuthState(auth);
    const { toolId } = useParams();
    const [tool] = UseToolDetail(toolId);
    const { _id, name, image, price, minimumOrder, availableQuantity, description } = tool;
    const priceInt = parseInt(price)

    const handlePurchase = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const address = event.target.address.value;
        const phone = event.target.phone.value;
        const tool = event.target.tool.value;
        const quantity = parseInt(event.target.quantity.value);

        const data = {
            email: email,
            address: address,
            phone: phone,
            tool: tool,
            quantity: quantity,
            price: (priceInt * quantity)
        }

        axios.post(`https://sleepy-lowlands-12245.herokuapp.com/myorder`, data)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast.success("Order Successfull");
                }
            })
    }


    return (
        <div>
            <div className='text-center py-4'>
                <img style={{ width: 150 }} src={updateImage} alt="" />
            </div>
            <h2 className='text-center'>Purchase: <span className='text-primary'>{name}</span> </h2>
            <div className="card mb-3 detail-container mx-auto bg-dark text-white">
                <div className="row g-0">
                    <div className="col-md-4 text-center">
                        <img src={image} className="img-fluid rounded-start" alt="" />
                        <h6 className='text-center mt-2'>ID: <span className='text-warning'>{_id}</span></h6>

                    </div>
                    <div className="col-md-8">
                        <div className="card-body text-center border">
                            <h5 className="card-title">{name}</h5>
                            <p>Price: ${price}</p>
                            <p>Available: {availableQuantity}</p>
                            <p>Min Order: {minimumOrder}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center p-4 container detail-description'>
                <h2>Description:</h2>
                <p className='text-muted fw-bold'>{description}</p>
            </div>

            <div className='my-4'>
                <Form onSubmit={handlePurchase} className='order-form bg-dark text-white px-3 py-4'>
                    <h3 className='text-center'>Order Now</h3>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name='email' defaultValue={user.email} readOnly />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" name='address' placeholder="Your Address" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPhone">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="text" name='phone' placeholder="Your Phone Number" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasictool">
                        <Form.Label>Tool Name</Form.Label>
                        <Form.Control type="text" name='tool' defaultValue={name} readOnly />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicquantity">
                        <Form.Label>Order Quantity</Form.Label>
                        <Form.Control type="number" name='quantity' defaultValue={minimumOrder} min={minimumOrder} max={availableQuantity} placeholder="Enter Quantity" />
                    </Form.Group>

                    <div className='text-center'>
                        <Button variant="primary" type="submit">
                            Order
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default Purchase;