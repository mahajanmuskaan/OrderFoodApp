import React from 'react';
import Food1 from '../../assets/images/Foodimage1.jpg';
import Food2 from '../../assets/images/Foodimage2.jpg';
import Food3 from '../../assets/images/Foodimage3.jpg';
import Food5 from '../../assets/images/carousel-item2.jpg';

export const CarouselComponent = () => {
    return (
        <>
            <div className="body-section">
                <div className="food-images">
                    <img className="food-image-list" src={Food1} alt="food" />
                    <img className="food-image-list" src={Food2} alt="food" />
                    <img className="food-image-list" src={Food3} alt="food" />
                    <img className="food-image-list" src={Food5} alt="food" />
                </div>
                <div className="quote-section">
                    <h1 id="food-quote">
                        “One cannot think well, love well, sleep well, if one has not dined well.”
                    </h1>
                    <h4 id="author">― Virginia Woolf, A Room of One's Own</h4>
                </div>
            </div>
            <div className="food-background-container">
                <div className="food-image-background">
                    <div className="food-image-welcome">
                        <h1>
                            Discover a world of flavor at your fingertips. <br />Welcome to our Foodie's ADDA
                            website,<br /> where deliciousness awaits!
                        </h1>
                        <button className="sign-up-btn">Let's Explore..</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CarouselComponent;

