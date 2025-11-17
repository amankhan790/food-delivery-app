import React, { useContext } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItem, addCartItem, removeCartItem } = useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-img" src={image} alt="" />
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-disc">{description}</p>
        <p className="food-item-price">{price}₹</p>
        <div className="food-item-buttons-container">
          {!cartItem[id] ? (
            <img
              className="add"
              onClick={() => {
                addCartItem(id);
              }}
              src={assets.add_icon_white}
              alt=""
            />
          ) : (
            <div className="food-item-counter">
              <img
                className=""
                onClick={() => {
                  removeCartItem(id);
                }}
                src={assets.remove_icon_red}
                alt=""
              />
              <p>{cartItem[id]}</p>
              <img
                onClick={() => {
                  addCartItem(id);
                }}
                src={assets.add_icon_green}
                alt=""
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
