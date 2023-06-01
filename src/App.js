import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./component/HeaderComponent";
import MainBodyComponent from "./component/BodyComponent";

const AppLayout = () => (
    <>
        <HeaderComponent />
        <MainBodyComponent />
    </>
    // Similarily to add FooterComponent
)


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);