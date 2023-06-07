import { React, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Food1 from '../images/Foodimage1.jpg';
import Food2 from '../images/Foodimage2.jpg';
import Food3 from '../images/Foodimage3.jpg';
import Food5 from '../images/carousel-item2.jpg';
import HeaderComponent from "./component/HeaderComponent";
import MainBodyComponent from "./component/BodyComponent";

const AppLayout = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShow(true);
        }, 1000)

    }, []);

    return (
        <>
            {(show === false) ? (<h1>Not Rendered</h1>) :
                (
                    <>
                        <HeaderComponent />
                        <div className="body-section">
                            <div className="food-images">
                                <img className="food-image-list" src={Food1} alt="food" />
                                <img className="food-image-list" src={Food2} alt="food" />
                                <img className="food-image-list" src={Food3} alt="food" />
                                <img className="food-image-list" src={Food5} alt="food" />
                            </div>
                            <h1 id="food-quote">“One cannot think well, love well, sleep well, if one has not dined well.”</h1>
                            <h4 id="author">― Virginia Woolf, A Room of One's Own</h4>
                        </div>
                        <MainBodyComponent />
                    </>
                )}
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);