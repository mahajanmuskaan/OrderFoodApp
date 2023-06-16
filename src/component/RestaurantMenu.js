import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import React from 'react';
import ShimmerUI from "./Shimmer";
import { IMG_CDN } from "../config";
import cuisine from "../../assets/images/cuisine.png";
import location from "../../assets/images/location.png";
import star from "../../assets/images/star.png"

const IMG_CDN_Link = 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/'

export const RestaurantMenu = () => {
    const { id } = useParams();

    console.log(id);

    const [restaurant, setRestaurant] = useState([]);
    const [restaurantName, setRestaurantName] = useState('');
    const [restaurantAddress, setRestaurantAddress] = useState('');
    const [restaurantCuisines, setRestaurantCuisines] = useState('');
    const [restauranLocality, setRestaurantLocality] = useState('');
    const [restaurantImg, setRestaurantImg] = useState('');
    const [restaurantRating, setRestaurantRating] = useState('');
    const [restaurantAvgRating, setRestaurantAvgRating] = useState('');
    useEffect(() => {
        getRestaurantMenu();
    }, []);

    async function getRestaurantMenu() {
        try {
            const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=31.638763&lng=74.8580233&restaurantId=${id}`);

            if (response.ok) {
                const json_data = await response.json();
                const restaurant_json = json_data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
                const restaurant_detail = json_data?.data?.cards[0].card.card.info;
                setRestaurant(restaurant_json);
                setRestaurantName(restaurant_detail.name); // Extract the name from the response
                setRestaurantAddress(restaurant_detail.city); // Extract the address from the response
                setRestaurantCuisines(restaurant_detail.cuisines);
                setRestaurantLocality(restaurant_detail.areaName);
                setRestaurantImg(restaurant_detail.cloudinaryImageId);
                setRestaurantRating(restaurant_detail?.totalRatingsString);
                setRestaurantAvgRating(restaurant_detail?.avgRatingString);
            } else {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <>
            {restaurant ? (
                <div className="restaurant-menus">
                    <div className="restaurant-address">
                        <div className="restaurant-details" >
                            <h1>{restaurantName}</h1> {/* Render the restaurant name */}
                            <p><img src={location} /> {restauranLocality}, {restaurantAddress}</p> {/* Render the restaurant address */}
                            <p><img src={cuisine} /> {restaurantCuisines && restaurantCuisines.length > 0 ? restaurantCuisines.join(', ') : 'No cuisines available'}</p>
                            <p id="star-rating"><img src={star} /> { restaurantAvgRating }</p>
                        </div>
                        <div className="restaurant-details" >
                            <img src={IMG_CDN_Link + restaurantImg} />
                        </div>

                    </div>
                    <hr></hr>
                    <h2>Restaurant Menu</h2>
                    <div>
                        <ul>
                            {restaurant.map((item) => (
                                <div className="restaurant-menu-items">
                                    <div className="restaurant-menu-items-details" >
                                        <h3>{item?.card?.info?.name}</h3>
                                        <h4>Rs. {parseInt(item?.card?.info?.price) * 0.01}</h4>
                                        <h5>{item?.card?.info?.description}</h5>
                                    </div>
                                    <div className="restaurant-menu-items-details" >
                                        <img className="restaurant-menu-img" src={IMG_CDN + item?.card?.info?.imageId} />
                                    </div>
                                </div>
                            ))}
                        </ul>
                    </div>

                </div>
            ) : (
                <ShimmerUI />
            )}
        </>
    );
};

export default RestaurantMenu;
