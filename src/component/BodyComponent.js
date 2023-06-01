import React from "react";
import Food1 from '../../images/Foodimage1.jpg';
import Food2 from '../../images/Foodimage2.jpg';
import Food3 from '../../images/Foodimage3.jpg';
import Food4 from '../../images/carousel-item1.jpg';
import Food5 from '../../images/carousel-item2.jpg';
import Food6 from '../../images/carousel-item5.jpg';
import Food7 from '../../images/carousel-item4.jpg';

// Body Component - to make a Carousel and Food Gallery

const MainBodyComponent = () => (
    <>
        <div className="food-images">
            <img className="food-image-list" src={Food1} alt="food" />
            <img className="food-image-list" src={Food2} alt="food" />
            <img className="food-image-list" src={Food3} alt="food" />
        </div>
        <h1 id="food-quote">“One cannot think well, love well, sleep well, if one has not dined well.”</h1>
        <h4 id="author">― Virginia Woolf, A Room of One's Own</h4>
        <div id="carouselExample" class="carousel slide pitcure-carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={Food4} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src={Food5} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src={Food6} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src={Food7} class="d-block w-100" alt="..." />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </>

);

export default MainBodyComponent;