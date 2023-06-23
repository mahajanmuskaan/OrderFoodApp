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