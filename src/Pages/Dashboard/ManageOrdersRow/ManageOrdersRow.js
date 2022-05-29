import React from 'react';

const ManageOrdersRow = ({ order }) => {
    const { _id, email, tool, quantity } = order;
    return (
        <tr>
            <td>{email}</td>
            <td>{tool}</td>
            <td>{quantity}</td>
        </tr>
    );
};

export default ManageOrdersRow;