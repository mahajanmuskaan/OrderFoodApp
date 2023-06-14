import React from "react";
import { useRouteError } from "react-router-dom";
import errorpage from '../../assets/images/error-page.jpg'

const Error = () => {
    const err = useRouteError();
    return (
        <>
            <div className="error-section">
                <h1>Oops😬</h1>
                <h2>Something went wrong!!</h2>
                {/* <h3>{err.status + " : " + err.statusText}</h3> */}
                <img src={errorpage} />

            </div>
        </>
    );
}

export default Error;