import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, refetch }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success("Successfully made Admin")
                }
            })
    }
    return (
        <tr>
            <td><h6>{user.email}</h6></td>
            <td>
                {
                    role !== 'admin' && <button onClick={makeAdmin} className='btn btn-dark'>make admin</button>
                }
            </td>
            <td><button className='btn btn-danger'>remove user</button></td>
        </tr>
    );
};

export default UserRow;