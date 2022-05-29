import React from 'react';
import { toast } from 'react-toastify';
import './ToolRow.css';

const ToolRow = ({ tool, tools, setTools }) => {
    const { _id, image, name } = tool;
    const handleRemoveTool = id => {
        const proced = window.confirm("Are you sure?");
        if (proced) {
            const url = `http://localhost:5000/tool/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = tools.filter(tool => tool._id !== id);
                    setTools(remaining);
                    if (data.deletedCount > 0) {
                        toast.error("Deleted");
                    }
                })
        }
    }
    return (
        <tr>
            <td>
                <img src={image} className="manage-tool-image" alt="" />
            </td>
            <td><h6>{name}</h6></td>
            <td>
                <button onClick={() => handleRemoveTool(_id)} className='btn btn-danger'>remove</button>
            </td>
        </tr>
    );
};

export default ToolRow;