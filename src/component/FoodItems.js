import { IMG_CDN } from "../config";

const FoodItems = ({ name, price, imageId }) => {
    return (
        <>
            <div className="restaurant-list-card">
                <img className="restaurant-img" src={`${IMG_CDN}${imageId}`} alt={name} />
                <div className="restaurant-details">
                    <h4 className="restaurant-name">{name}</h4>
                    <h6 className="restaurant-costfor"> Rs. {price / 100}</h6>
                </div>
            </div>
        </>
    );
};

export default FoodItems;
