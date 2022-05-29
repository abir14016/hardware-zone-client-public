import React from 'react';
import { Link } from 'react-router-dom';
import UseTools from '../../../Hooks/UseTools';
import Tool from '../Tool/Tool';
import inventoryImage from '../../../images/utilities/inventories-logo.png';
import './Tools.css';

const Tools = () => {
    const [tools] = UseTools();
    const reversedTools = [...tools].reverse();
    const homePageTools = reversedTools.slice(0, 6);

    return (
        <div className='py-5' id='tools'>
            <div className='text-center'>
                <img style={{ width: 150 }} src={inventoryImage} alt="" />
            </div>
            <h1 className='text-center text-primary mb-5'>Explore Now: {homePageTools.length}</h1>
            <div className="container tools-container card-deck">
                {
                    homePageTools.map(tool => <Tool
                        key={tool._id}
                        tool={tool}
                    ></Tool>)
                }
            </div>
            <div className='container text-center mt-5'>
                <Link className='btn btn-dark' to="/manageinventories">See All</Link>
            </div>
        </div>
    );
};

export default Tools;