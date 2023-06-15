import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import React from 'react'

export const RestaurantMenu = () => {
    const [restaurant, setRestaurant] = useState([]);

    useEffect(() => {
        getRestaurantMenu();
    })

    async function getRestaurantMenu() {
        try {
            const response = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=15680&submitAction=ENTER");
            // });
            if (response.ok) {
                const json_data = await response.json();
                const restaurant_json = json_data.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards;
                setRestaurant(restaurant_json);
                //console.log(restaurant_json);
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
            <div>RestaurantMenu
                <ul>
                    {restaurant.map((item) => (
                        <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>
                    ))}
                </ul>
            </div>

        </>
    )
}


export default RestaurantMenu;