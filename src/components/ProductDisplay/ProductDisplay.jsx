import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import start_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../context/ShopContext";
import { toast } from "react-toast";

const ProductDisplay = (props) => {
  const { product } = props;
  const {addToCart} = useContext(ShopContext)

  function adding(id){
    addToCart(id);
    toast.success('successfully added')
  }

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="productImage" />
          <img src={product.image} alt="productImage" />
          <img src={product.image} alt="productImage" />
          <img src={product.image} alt="productImage" />
        </div>
        <div className="productdisplay-image">
          <img
            src={product.image}
            alt="productImage"
            className="productdisplay-main-img"
          />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="starIcon" />
          <img src={star_icon} alt="starIcon" />
          <img src={star_icon} alt="starIcon" />
          <img src={star_icon} alt="starIcon" />
          <img src={start_dull_icon} alt="starDullIcon" />
          <p>{122}</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-prices-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-prices-new">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          a lightweight, usually knitted, pullover shirt, close-fitting and with
          a round neckline and short sleeves, worn as an undershirt or outer
          garment.
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button onClick={() => adding(product.id)}>ADD TO CART</button>
        <p className="productdisplay-right-category">
          <span>Category : </span>
          Women, T-Shirt, Crop Top
        </p>
        <p className="productdisplay-right-category">
          <span>Tags : </span>
          Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
