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

import React, { useState, useEffect } from 'react';
import noData from '../../assets/images/No-data-error.png';

const ShimmerUI = (restaurants) => {
    const [showMessage, setShowMessage] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShowMessage(true);
        }, 1500)

    }, []);

    return (
        <>
            {(showMessage === false) ?
                (<>
                    <div className="shimmer-container">
                        <h3>Fetching your nearby restaurants...</h3>
                        <div className='shimmer-effect'>
                            {Array(10).fill("").map((e) => {
                                return (
                                    <div className="restaurant-card">
                                        <div className="restaurant-img"></div>
                                        <hr></hr>
                                        <div className="restaurant-name-details"></div>
                                        <hr></hr>
                                    </div>
                                );

                            })}
                        </div>
                    </div>
                </>) : (
                    <div className='no-data-img'>
                        <img src={noData} />
                    </div>
                )}
        </>
    )
}

export default ShimmerUI;