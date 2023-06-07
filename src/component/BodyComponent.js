import React, { useState, useEffect } from "react";
import Restaurant from './Restaurant'
import ShimmerUI from "./Shimmer";

//import { restaurantList } from '../config.js';

// Body Component

export const MainBodyComponent = () => {
    // Declare state variable searchText and its setter function setSearchText
    const [searchText, setSearchText] = useState('');

    //the restaurants state always contains the filtered data, while originalData retains the original data fetched from the API for each new filtering operation.
    const [restaurants, setRestaurants] = useState([]);
    const [originalrestaurants, setOriginalRestaurants] = useState(['']);

    const [filterBy, setFilterBy] = useState('');

    // Event handler for input change
    const handleChange = (e) => {
        // Update searchText with the new value entered by the user
        setSearchText(e.target.value);
    };

    //Restaurant Search - Search based on Restaurant Name
    function filterdata(searchText, originalrestaurants) {
        return (originalrestaurants.filter((restaurant) => {
            return restaurant.data.name.toLowerCase().includes(searchText.toLowerCase());
        }
        ));
    }
    // Restaurant Search
    function searchData(searchText, originalrestaurants) {
        if (searchText !== '') {
            const filteredData = filterdata(searchText, originalrestaurants);
            setRestaurants(filteredData);
        }
        else {
            setRestaurants(originalrestaurants);
        }
    }

    // FilterOption- Search based on cuisines
    function filterOptions(filterBy) {
        return originalrestaurants.filter((restaurant) => {
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
        } else {
            setFilterBy('');
            setRestaurants(originalrestaurants);
        }
    }


    // useEffect Hook Usage to make a API call- to fetch Real data from swiggy API.
    useEffect(() => {
        // Fetch Restaurant Data
        getRestaurants();

    }, []);
    async function getRestaurants() {
        // To handle errors
        try {
            const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.6314253&lng=74.84340259999999&page_type=DESKTOP_WEB_LISTING", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                },
            });
            if (response.ok) {
                const json_data = await response.json();
                const fetchedAPIData = json_data?.data?.cards[2]?.data?.data?.cards;
                console.log(fetchedAPIData);
                setOriginalRestaurants(fetchedAPIData);//original data fetched from the Swiggy API
                setRestaurants(fetchedAPIData);
            }
            else {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
        }
        catch (e) {
            console.error(e);
        }
    }

    return (
        <>
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
                            searchData(searchText, originalrestaurants)
                        }>
                            Search
                        </button>
                    </div>
                </div>

                {/* Filters Options */}
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
                            <li onClick={() => filteredOption('Afghani')}>Afghani</li>|
                            <li onClick={() => filteredOption('Snacks')}>Snacks</li>|
                            <li onClick={() => filteredOption('Salads')}>Salads</li>|
                            <li onClick={() => filteredOption('Beverages')}>Beverages</li>|
                            <li onClick={() => filteredOption('Desserts')}>Desserts</li>|
                            <li onClick={() => filteredOption('Bakery')}>Bakery</li>
                            <li id="reset_all" onClick={() => filteredOption('')}>Reset Filter</li>
                        </ul>
                    </div>
                </div>
                <hr id="filter-section-line"></hr>

                {/* RestaurantList -- After applying filters- what filtered data and how should it reflect on UI */}

                {/* // Conditional Rendering
                /**
                 * If my restaurants array is empty => it should load Shimmer UI.
                 * or
                 * If my restaurants has data => it should load Real time data from API.
                 *
                 * This can be acheived using ternary operator..
                 */}
                {(restaurants.length === 0) ? (< ShimmerUI restaurants={restaurants} />) :
                    (<div className="restaurant-list">
                        <div className="restaurant-list-cards">
                            {restaurants.map((restaurant) => (
                                <Restaurant {...restaurant.data} key={restaurant.data.id} />
                            ))}
                        </div>
                    </div>)}
            </div>
        </>

    )
};

export default MainBodyComponent;