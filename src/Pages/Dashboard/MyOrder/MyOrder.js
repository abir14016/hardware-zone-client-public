import React from 'react';
import './MyOrder.css'

const MyOrder = ({ myOrder }) => {
    const { tool, quantity } = myOrder;
    return (
        <tr>
            <td>{tool}</td>
            <td>{quantity}</td>
            <td>
                <button className='btn btn-danger'>cancel</button>
            </td>
        </tr>
    );
};

export default MyOrder;