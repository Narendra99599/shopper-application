import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../context/ShopContext";
import dropdown_icon from "../components/Assets/dropdown_icon.png";
import Item from "../components/Item/Item";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="shoop-category">
      <img
        src={props.banner}
        alt="shopcategoryBanner"
        style={{ width: "100%" }}
      />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products{" "}
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="DropDownIcon" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item, index) => {
          if (props.category === item.category) {
            return <Item key={index} {...item} />;
          }
          return null;
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  );
};

export default ShopCategory;
