import React, { useState, useEffect } from 'react';

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
                        <hr></hr>
                    </div>
                </div>) : (<h2>Ooops!! No restaurants found..</h2>)}
        </>
    )
}

export default ShimmerUI;