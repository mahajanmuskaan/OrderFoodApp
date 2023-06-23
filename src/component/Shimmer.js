import React from 'react';

const ShimmerUI = () => {
    return (
        <div className="shimmer-container">
            <h3>Fetching results...</h3>
            <div className="shimmer-effect">
                {Array(5).fill("").map((e, index) => {
                    const restaurantId = index + 1;
                    return (
                        <div className="restaurant-card" key={restaurantId}>
                            <div className="restaurant-img"></div>
                            <hr />
                            <div className="restaurant-name-details"></div>
                            <hr />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ShimmerUI;
