import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './MyOrder.css'

const MyOrder = ({ myOrder, myOrders, setMyOrders }) => {
    const { _id, tool, quantity, price } = myOrder;

    const navigate = useNavigate()
    const navigateToPayment = id => {
        navigate(`myorder/${id}`);
    }

    const handleCancel = id => {
        const proced = window.confirm("Are you sure?");
        if (proced) {
            const url = `http://localhost:5000/myorder/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = myOrders?.filter(myOrder => myOrder._id !== id);
                    setMyOrders(remaining);
                    if (data.deletedCount > 0) {
                        toast.error("Order Canceled!")
                    }
                });
        }
    }
    return (
        <tr>
            <td><h6>{tool}</h6></td>
            <td><h6>{quantity}</h6></td>
            <td><h6>{price}</h6></td>
            <td>
                <button onClick={() => handleCancel(_id)} className='btn btn-danger'>cancel</button>
            </td>
            <td>
                <button onClick={() => navigateToPayment(_id)} className='btn btn-dark'>pay</button>
            </td>
        </tr>
    );
};

export default MyOrder;