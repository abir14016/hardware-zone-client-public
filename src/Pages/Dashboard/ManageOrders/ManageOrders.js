import React from 'react';
import { useEffect, useState } from "react";
import ManageOrdersRow from '../ManageOrdersRow/ManageOrdersRow';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/myorder')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <div>
            <h2>Manage all Orders: {orders.length}</h2>
            <table className="table table-dark table-striped">
                <thead>
                    <tr>
                        <th scope="col">User</th>
                        <th scope="col">Tool</th>
                        <th scope="col">Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order => <ManageOrdersRow
                            key={order._id}
                            order={order}
                        ></ManageOrdersRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageOrders;