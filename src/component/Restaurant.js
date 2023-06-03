import { IMG_CDN } from "../config";

const RestaurantComponent = ({ cloudinaryImageId, name, cuisines, costForTwoString }) => {
    return (
        <div className="restaurant-list-card">
            <img className="restaurant-img" src={IMG_CDN + cloudinaryImageId} />
            <h4 className="restaurant-name">{name}</h4>
            <p className="restaurant-cuisines">{cuisines.join(', ')}</p>
            <h6 className="restaurant-costfor">{costForTwoString}</h6>
        </div>
    );
}

export default RestaurantComponent;