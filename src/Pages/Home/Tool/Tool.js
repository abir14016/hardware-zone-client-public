import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import UseAdmin from '../../../Hooks/UseAdmin';
import './Tool.css';

const Tool = ({ tool }) => {
    const [user] = useAuthState(auth);
    const [admin] = UseAdmin(user);
    const [seeMore, setSeeMore] = useState(true);
    const [seeLess, setSeeLess] = useState(true);

    const { _id, name, image, price, minimumOrder, availableQuantity, description } = tool;
    const navigate = useNavigate();

    const navigateToToolDetail = id => {
        navigate(`/tool/${id}`);
    }

    const handleSeeMore = () => {
        setSeeMore(!seeMore);
        setSeeLess(!seeLess);
    }
    const handleSeeLess = () => {
        setSeeMore(!seeMore);
        setSeeLess(!seeLess);
        console.log('seeLess', seeLess);
    }

    return (
        <div className="card card-container text-center bg-dark">
            <div className='p-3'>
                <img className="card-img-top" src={image} alt="Card cap" />
                <div className='mt-4 py-2 tool-info text-warning d-flex justify-content-around align-items-center'>
                    <h6>Quantity: {availableQuantity}</h6>
                    <h6>Order(min): {minimumOrder}</h6>
                </div>
                {/* <hr /> */}
            </div>
            <div className="card-body">
                <h3 className="card-title text-white">{name}</h3>
                {
                    seeMore ? <p className="card-text card-description">{description.slice(0, 130)}...
                        {
                            seeMore ? <button className='see-more-less-bnt' onClick={handleSeeMore}>see more</button> : <button className='see-more-less-bnt' onClick={handleSeeLess}>see Less</button>
                        }
                    </p> : <p className="card-text card-description">{description}
                        {
                            seeMore ? <button className='see-more-less-bnt' onClick={handleSeeMore}>see more</button> : <button className='see-more-less-bnt' onClick={handleSeeLess}>see Less</button>
                        }
                    </p>
                }
                <h6 className='text-warning fs-4'>$ {price}</h6>
            </div>
            <div className='text-center'>
                {
                    !admin && <button onClick={() => navigateToToolDetail(_id)} className='purchase-button'>PURCHASE</button>
                }
            </div>
        </div>
    );
};

export default Tool;