import React from "react";
import errorpage from '../../assets/images/error-page.jpg'

const Error = () => {
    return (
        <>
            <div className="error-section">
                <h1>Oops😞</h1>
                <h2>Something went wrong!!</h2>
                <img src={errorpage} />

            </div>
        </>
    );
}

export default Error;