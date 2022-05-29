import React from 'react';
import UseTools from '../../../Hooks/UseTools';
import ToolRow from '../ToolRow/ToolRow';

const ManageTools = () => {
    const [tools, setTools] = UseTools();
    return (
        <div>
            <h2>Number of tools: {tools.length}</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Manage</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tools.map(tool => <ToolRow
                            key={tool._id}
                            tool={tool}
                            setTools={setTools}
                            tools={tools}
                        ></ToolRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageTools;