import React from 'react';
import { useParams } from 'react-router-dom';
import updateImage from '../../images/utilities/update.png';
import UseToolDetail from '../../Hooks/UseToolDetail';
import './Purchase.css';
import { Button, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';

const Purchase = () => {
    const { toolId } = useParams();
    const [tool] = UseToolDetail(toolId);
    const { _id, name, image, price, minimumOrder, availableQuantity, description } = tool;

    const handlePurchase = event => {
        event.preventDefault();
        toast.success("Hello from toastify");
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
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" name='address' placeholder="Your Address" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPhone">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="text" name='phone' placeholder="Your Phone" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicquantity">
                        <Form.Label>Order Quantity</Form.Label>
                        <Form.Control type="number" name='quantity' defaultValue={minimumOrder} min={minimumOrder} max={availableQuantity} placeholder="Enter Quantity" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Purchase
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Purchase;