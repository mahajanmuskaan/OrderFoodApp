import React, { useState, useEffect } from 'react';
import noData from '../../images/No-data-error.png';

const ShimmerUI = () => {
    const [showMessage, setShowMessage] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShowMessage(true);
        }, 5000)

    }, []);

    return (
        <>
            {(showMessage === false) ?
                (<div className='shimmer-effect'>
                    <h3>Fetching your nearby restaurants...</h3>
                    <h4>Here you go!!</h4>
                    <div className="restaurant-card">
                        <div className="restaurant-img"></div>
                        <hr></hr>
                        <div className="restaurant-name-details"></div>
                        <hr></hr>
                    </div>

                </div>) : (
                    <div className='no-data-img'>
                        <img src={noData} />
                    </div>
                )}
        </>
    )
}

export default ShimmerUI;