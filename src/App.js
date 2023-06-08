/**
 * The given code represents the layout of a React application.

1. The code imports the necessary dependencies: React, useState, useEffect, and ReactDOM.
2. It imports multiple image files representing food images to be displayed in the application.
3. The code imports the HeaderComponent and MainBodyComponent from their respective files.
4. The AppLayout component is defined as a functional component using arrow syntax.
5. Inside the AppLayout component, there is a state variable called show, which determines whether to render the content of the application. It is initially set to false.
6. The useEffect hook is used to set a timeout that updates the show state variable to true after 1000 milliseconds. This simulates a delay before rendering the content.
7. The JSX markup returned by the AppLayout component includes a conditional rendering based on the show state variable. If show is false, it displays the text "Not Rendered". If show is true, it renders the HeaderComponent, a section with food images, a food quote, and the MainBodyComponent.
8. The root element of the application is obtained using `document.getElementById("root")`.
9. ReactDOM's `createRoot` function is used to create a root element for the application, and the `render` method is called to render the AppLayout component inside the root element.

 */

import { React, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Food1 from '../assets/images/Foodimage1.jpg';
import Food2 from '../assets/images/Foodimage2.jpg';
import Food3 from '../assets/images/Foodimage3.jpg';
import Food5 from '../assets/images/carousel-item2.jpg';
import HeaderComponent from "./component/HeaderComponent";
import MainBodyComponent from "./component/BodyComponent";
import FooterComponent from "./component/FooterComponent";

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
                        <FooterComponent />
                    </>
                )}
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);