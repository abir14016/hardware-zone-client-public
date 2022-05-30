import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, refetch }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`https://sleepy-lowlands-12245.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error("Failed to make an admin");
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success("Successfully made Admin")
                }
            })
    }
    return (
        <tr>
            <td><h6 className='fw-bolder text-muted'>{user.email}</h6></td>
            <td>
                {
                    role !== 'admin' ? <button onClick={makeAdmin} className='btn btn-dark'>make admin</button> : <h6 className='text-success fw-bold'>Admin</h6>
                }
            </td>
            <td><button className='btn btn-danger'>remove user</button></td>
        </tr>
    );
};

export default UserRow;