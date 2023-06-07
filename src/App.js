import { React, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./component/HeaderComponent";
import MainBodyComponent from "./component/BodyComponent";

const AppLayout = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShow(true);
        }, 500)

    }, []);

    return (
        <>
            {(show === false) ? (<h1>Not Rendered</h1>) :
                (
                    <>
                        <HeaderComponent />
                        <MainBodyComponent />
                    </>
                )}
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);