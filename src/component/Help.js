import React, { useState } from "react";

export const Section = ({ title, description }) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div className="questions">
            <div className="question-option">
                <h3>{title}</h3>
                {isVisible ? (
                    <button
                        className="btn btn-primary"
                        onClick={() => setIsVisible(false)}
                    >
                        Hide
                    </button>
                ) : (
                    <button
                        className="btn btn-primary"
                        onClick={() => setIsVisible(true)}
                    >
                        Show
                    </button>
                )}
            </div>
            {isVisible && <p>{description}</p>}
        </div>
    );
};

const Help = () => {
    return (
        <>
            <div className="help-section">
                <h2>Frequently Asked Questions</h2>
            </div>

            <div className="question-section">
                <div className="question-part">
                    <Section
                        title={"Can I edit my order?"}
                        description={
                            "Your order can be edited before it reaches the restaurant. You could contact customer support team via chat or call to do so. Once order is placed and restaurant starts preparing your food, you may not edit its contents"
                        }
                    />
                </div>
                <div>
                    <Section
                        title={"I want to cancel my order"}
                        description={
                            "We will do our best to accommodate your request if the order is not placed to the restaurant (Customer service number: 080-67466729). Please note that we will have a right to charge a cancellation fee up to full order value to compensate our restaurant and delivery partners if your order has been confirmed."
                        }
                    />
                </div>
                <div>
                    <Section
                        title={"Do you charge for delivery?"}
                        description={
                            "Delivery fee varies from city to city and is applicable if order value is below a certain amount. Additionally, certain restaurants might have fixed delivery fees. Delivery fee (if any) is specified on the 'Review Order' page."
                        }
                    />
                </div>
                <div>
                    <Section
                        title={"How long do you take to deliver?"}
                        description={
                            "Standard delivery times vary by the location selected and prevailing conditions. Once you select your location, an estimated delivery time is mentioned for each restaurant."
                        }
                    />
                </div>
                <div>
                    <Section
                        title={"Is single order from many restaurants possible?"}
                        description={
                            "We currently do not support this functionality. However, you can place orders for individual items from different restaurants."
                        }
                    />
                </div>
                <div>
                    <Section
                        title={"Can I change the address / number?"}
                        description={
                            "Any major change in delivery address is not possible after you have placed an order with us. However, slight modifications like changing the flat number, street name, landmark etc. are allowed. If you have received delivery executive details, you can directly call him, else you could contact our customer service team."
                        }
                    />
                </div>
            </div>
        </>
    );
};

export default Help;
