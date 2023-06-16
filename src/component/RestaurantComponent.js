/**
 * The given React component is a RestaurantComponent that represents a single restaurant in a list.

1. The component imports the IMG_CDN constant from a configuration file (presumably containing the URL for the image CDN).
2. It defines the RestaurantComponent as a functional component that accepts several props: cloudinaryImageId, name, cuisines, costForTwoString, avgRating, and deliveryTime.
3. The JSX markup returned by the component represents the layout and details of a restaurant card. It includes an image element that displays the restaurant's image using the IMG_CDN URL concatenated with the cloudinaryImageId prop.
4. The restaurant details, such as name, average rating, cuisines, delivery time, and cost for two people, are displayed using various HTML elements.
5. The quick menu section is represented by a "Show Menu".
6. The component exports the RestaurantComponent as the default export.

 */

import { Link } from "react-router-dom";
import { IMG_CDN } from "../config";

const RestaurantComponent = ({ id, cloudinaryImageId, name, cuisines, costForTwoString, avgRating, deliveryTime }) => {
    return (
        <div className="restaurant-list-card">
            <img className="restaurant-img" src={IMG_CDN + cloudinaryImageId} />
            <div className="restaurant-details">
                <h4 className="restaurant-name">{name}</h4>
                <h3 className="restaurant-rating" >⭐{avgRating}</h3>
                <p className="restaurant-cuisines">{cuisines.join(' ,')}</p>
                <div className="restaurant-name-details">
                    <h6 className="restaurant-time"> {deliveryTime} MINS</h6>|
                    <h6 className="restaurant-costfor"> {costForTwoString}</h6>
                </div>
                <hr></hr>
                <div className="quick_menu">
                    <Link to={"/restaurant-menu/" + id} id="show-menu"><h6>Show Menu</h6></Link>

                </div>
                <hr></hr>
            </div>

        </div>
    );
}

export default RestaurantComponent;