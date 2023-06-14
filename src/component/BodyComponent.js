/**
 * The given React component is a MainBodyComponent that displays a list of restaurants based on user search and filter options.

1. The component imports the necessary dependencies: React, useState, useEffect, and other components like Restaurant and ShimmerUI.
2. It defines the MainBodyComponent as a functional component using arrow syntax.
3. Inside the component, there are several state variables defined using the useState hook: searchText, restaurants, originalrestaurants, and filterBy.
4. The component defines an event handler function called handleChange, which updates the searchText state variable based on user input.
5. There are two utility functions: filterdata and filterOptions. These functions filter the original list of restaurants based on the search text and filter options, respectively.
6. The searchData function is called when the search button is clicked. It filters the restaurants based on the searchText state variable and updates the restaurants state accordingly.
7. The filteredOption function is called when a filter option is clicked. It filters the restaurants based on the selected filter option and updates the filterBy and restaurants state variables accordingly.
8. The useEffect hook is used to fetch restaurant data from the Swiggy API when the component mounts. The getRestaurants function is an asynchronous function that performs the API request and updates the originalrestaurants and restaurants state variables with the fetched data.
9. The JSX markup returned by the component includes a search bar, filter options, and a restaurant list. The search bar allows users to enter a search query, and the filter options provide different filtering choices.
10. The restaurant list is conditionally rendered based on the length of the restaurants array. If the array is empty, a ShimmerUI component is rendered to show a loading state. Otherwise, the real-time data from the API is mapped over to render the Restaurant components.
11. The component exports the MainBodyComponent as the default export.

*/

import React, { useState, useEffect } from "react";
import noData from '../../assets/images/No-data-error.png';
import Restaurant from './RestaurantComponent'
import ShimmerUI from "./Shimmer";

//import { restaurantList } from '../config.js';

// Body Component

export const MainBodyComponent = () => {
    // Declare state variable searchText and its setter function setSearchText
    const [searchText, setSearchText] = useState('');

    //the restaurants state always contains the filtered data, while originalData retains the original data fetched from the API for each new filtering operation.
    const [restaurants, setRestaurants] = useState([]);
    const [originalrestaurants, setOriginalRestaurants] = useState([]);

    const [filterBy, setFilterBy] = useState('');
    const [isFetching, setIsFetching] = useState(true);


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
        if (!originalrestaurants) {
            return (<div className='no-data-img'>
                <img src={noData} />
            </div>)
        }
        else {
            if (searchText !== '') {
                const filteredData = filterdata(searchText, originalrestaurants);
                setRestaurants(filteredData);
            }
            else {
                setRestaurants(originalrestaurants);
            }
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
        if (!originalrestaurants) {
            return (<div className='no-data-img'>
                <img src={noData} />
            </div>)
        }
        else {
            if (filterBy !== '') {
                const filteredOptionList = filterOptions(filterBy);
                setFilterBy(filterBy);
                setRestaurants(filteredOptionList);
            } else {
                setFilterBy('');
                setRestaurants(originalrestaurants);
            }
        }

    }


    // useEffect Hook Usage to make a API call- to fetch Real data from swiggy API.
    useEffect(() => {
        // Fetch Restaurant Data
        getRestaurants();
    }, []);

    async function getRestaurants() {
        // To handle errors
        console.log("entered request")
        try {
            const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.6314253&lng=74.84340259999999&page_type=DESKTOP_WEB_LISTING");
            // });
            if (response.ok) {
                const json_data = await response.json();
                console.log(json_data);
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
        finally {
            setIsFetching(false);
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
                            <li onClick={() => filteredOption('Thalis')}>Thalis</li>|
                            <li onClick={() => filteredOption('Snacks')}>Snacks</li>|
                            <li onClick={() => filteredOption('Salads')}>Salads</li>|
                            <li onClick={() => filteredOption('Beverages')}>Beverages</li>|
                            <li onClick={() => filteredOption('Desserts')}>Desserts</li>
                            <li id="reset_all" onClick={() => filteredOption('')}>Reset Filter</li>
                        </ul>
                    </div>
                </div>
                <hr id="filter-section-line"></hr>

                {/* RestaurantList -- After applying filters- what filtered data and how should it reflect on UI */}

                {/**
                 * If my restaurants array is empty => it should load Shimmer UI.
                 * or
                 * If my restaurants has data => it should load Real time data from API.
                 *
                 * This can be acheived using ternary operator..
                 */}
                {
                    isFetching ? (< ShimmerUI restaurants={restaurants} />) : !restaurants || restaurants?.length === 0 ?
                        (<div className="no-data-img">
                            <img src={noData} alt="No data" />
                        </div>) : (<div className="restaurant-list">
                            <div className="restaurant-list-cards">
                                {restaurants.map((restaurant) => (
                                    <Restaurant {...restaurant.data} key={restaurant.data.id} />
                                ))}
                            </div>
                        </div>)
                }
            </div>
        </>

    )
};

export default MainBodyComponent;