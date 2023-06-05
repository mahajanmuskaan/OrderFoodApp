import { IMG_CDN } from "../config";
import {rupee} from '../../images/rupee.png'

const RestaurantComponent = ({ cloudinaryImageId, name, cuisines, costForTwoString,avgRating }) => {
    return (
        <div className="restaurant-list-card">
            <img className="restaurant-img" src={IMG_CDN + cloudinaryImageId} />
            <div className="restaurant-details">
                <h4 className="restaurant-name">{name}</h4>
                <h3 className="restaurant-rating" >⭐{avgRating}</h3>
                <p className="restaurant-cuisines">{cuisines.join(', ')}</p>
                <h6 className="restaurant-costfor"> {costForTwoString}</h6></div>
        </div>
    );
}

export default RestaurantComponent;