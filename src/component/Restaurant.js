import { IMG_CDN } from "../config";
import { rupee } from '../../images/rupee.png'

const RestaurantComponent = ({ cloudinaryImageId, name, cuisines, costForTwoString, avgRating, deliveryTime }) => {
    return (
        <div className="restaurant-list-card">
            <img className="restaurant-img" src={IMG_CDN + cloudinaryImageId} />
            <div className="restaurant-details">
                <h4 className="restaurant-name">{name}</h4>
                <h3 className="restaurant-rating" >⭐{avgRating}</h3>
                <p className="restaurant-cuisines">{cuisines.join(', ')}</p>
                <div className="restaurant-name-details">
                    <h6 className="restaurant-time"> {deliveryTime} MINS</h6>|
                    <h6 className="restaurant-costfor"> {costForTwoString}</h6></div>
            </div>

        </div>
    );
}

export default RestaurantComponent;