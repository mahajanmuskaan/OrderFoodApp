import React, { useState } from "react";
import Food1 from '../../images/Foodimage1.jpg';
import Food2 from '../../images/Foodimage2.jpg';
import Food3 from '../../images/Foodimage3.jpg';
import Food5 from '../../images/carousel-item2.jpg';
import Restaurant from './Restaurant'
import { restaurantList } from '../config.js';

// Body Component

const MainBodyComponent = () => {
    // Declare state variable searchText and its setter function setSearchText
    const [searchText, setSearchText] = useState('');
    const [restaurants, setRestaurants] = useState(restaurantList);
    const [noResults, setNoResults] = useState(false); // New state variable
    const [filterBy, setFilterBy] = useState('');

    // Event handler for input change
    const handleChange = (e) => {
        // Update searchText with the new value entered by the user
        setSearchText(e.target.value);
    };

    //Restaurant Search - Search based on Restaurant Name
    function filterdata(searchText, restaurantList) {
        return (restaurantList.filter((restaurant) => {
            return restaurant.data.name.toLowerCase().includes(searchText.toLowerCase());
        }
        ));
    }
    // Restaurant Search
    function searchData(searchText, restaurantList) {
        if (searchText !== '') {
            const filteredData = filterdata(searchText, restaurantList);
            setRestaurants(filteredData);
            setNoResults(filteredData.length === 0); // Set noResults based on search results. if (filteredData.length === 0)-> true, then no results are there else, results are there.
        }
        else {
            setRestaurants(restaurantList);
            setNoResults(false); // Reset noResults // Incase no text is given in search box, so all restaurants should be shown by default.
        }
    }

    // FilterOption- Search based on cuisines
    function filterOptions(filterBy) {
        return restaurantList.filter((restaurant) => {
            return restaurant.data.cuisines.some((cuisine) =>
                cuisine.toLowerCase().includes(filterBy.toLowerCase())
            );
        });
    }
    function filteredOption(filterBy) {
        if (filterBy !== '') {
            const filteredOptionList = filterOptions(filterBy);
            setFilterBy(filterBy);
            setRestaurants(filteredOptionList);
            setNoResults(filteredOptionList.length === 0);
        } else {
            setFilterBy('');
            setRestaurants(restaurantList);
            setNoResults(false);
        }
    }

    return (
        <>
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
            <div className="restaurant-body-section">
                <h2>Find Restaurants here...</h2>
                {/* Search Bar */}
                <div className="search-section">
                    <div className="search-box">
                        <input
                            type="text"
                            className="search-box-field"
                            value={searchText}
                            placeholder="Search for restaurant"
                            onChange={handleChange}
                        />
                        <button className="search-box-btn" onClick={() =>
                            searchData(searchText, restaurantList)
                        }>
                            Search
                        </button>
                    </div>
                </div>

                {/* Filters and Sort Options */}
                <div className="filters_sort">
                    <div className="filters_options">
                        <ul>
                            <li id="filter_by">Filter by</li>
                            <li onClick={() => filteredOption('South Indian')}>South Indian</li>|
                            <li onClick={() => filteredOption('North Indian')}>North Indian</li>|
                            <li onClick={() => filteredOption('Fast Food')}>Fast Food</li>|
                            <li onClick={() => filteredOption('Chinese')}>Chinese</li>|
                            <li onClick={() => filteredOption('Italian')}>Italian</li>|
                            <li onClick={() => filteredOption('Continental')}>Continental</li>|
                            <li onClick={() => filteredOption('Mughlai')}>Mughlai</li>|
                            <li onClick={() => filteredOption('Chinese')}>Chinese</li>|
                            <li onClick={() => filteredOption('Afghani')}>Afghani</li>|
                            <li onClick={() => filteredOption('Salads')}>Salads</li>|
                            <li onClick={() => filteredOption('Beverages')}>Beverages</li>|
                            <li onClick={() => filteredOption('Bakery')}>Bakery</li>
                            <li id="reset_all" onClick={() => filteredOption('')}>Reset Filter</li>
                        </ul>
                    </div>
                </div>

                {/* RestaurantList */}
                <div className="restaurant-list">
                    {noResults ? (<h1>Ooops!! No restaurants found..</h1>) :
                        (
                            <div className="restaurant-list-cards">
                                {restaurants.map((restaurant) => (
                                    <Restaurant {...restaurant.data} key={restaurant.data.id} />
                                ))}
                            </div>
                        )
                    }
                </div>
            </div>
        </>

    )
};

export default MainBodyComponent;