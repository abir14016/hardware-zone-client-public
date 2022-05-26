import React from 'react';
import { toast } from 'react-toastify';
import './MyOrder.css'

const MyOrder = ({ myOrder, myOrders, setMyOrders }) => {
    const { _id, tool, quantity } = myOrder;

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
            <td>{tool}</td>
            <td>{quantity}</td>
            <td>
                <button onClick={() => handleCancel(_id)} className='btn btn-danger'>cancel</button>
            </td>
        </tr>
    );
};

export default MyOrder;