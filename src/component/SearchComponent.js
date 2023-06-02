import React, { useState } from "react";

const SearchComponent = () => {
    // Declare state variable searchText and its setter function setSearchText
    const [searchText, setSearchText] = useState('');

    // Event handler for input change
    const handleChange = (e) => {
        // Update searchText with the new value entered by the user
        setSearchText(e.target.value);
    };

    // Event handler for search button click
    const handleSearch = () => {
        // Log the current value of searchText
        console.log(searchText);
        // Perform search or any other action
    };


    return (
        <>
            <div className="search-section">
                <div className="search-box">
                    <input
                        type="text"
                        className="search-box-field"
                        value={searchText}
                        placeholder="Search for restaurant"
                        onChange={handleChange}
                    />
                    <button className="search-box-btn" onClick={handleSearch}>
                        Search
                    </button>
                </div>
            </div>
        </>
    );
};

export default SearchComponent;
