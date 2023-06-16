/**
 * The given React component is a ShimmerUI component that displays a shimmer effect while fetching nearby restaurants. 
 *
1. The component imports the necessary dependencies: React, useState, useEffect, and an image for the "No data" error.
2. It defines the ShimmerUI as a functional component using arrow syntax.
3. Inside the component, there is a state variable called showMessage, which represents whether to show the shimmer effect or the "No data" image. It is initially set to false.
4. The useEffect hook is used to set a timeout that updates the showMessage state variable to true after 1800 milliseconds. This simulates a delay to show the shimmer effect before displaying the "No data" image.
5. The component returns JSX markup that conditionally renders either a shimmer effect or a "No data" image based on the value of showMessage. If showMessage is false, a shimmer effect is displayed. It consists of a container with text indicating that nearby restaurants are being fetched and a shimmer effect applied to a series of restaurant cards. The number of restaurant cards is determined by the Array(10).fill("") and map() methods.
6. The component exports the ShimmerUI as the default export.

*/

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
