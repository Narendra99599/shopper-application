import React from "react";
import "./RelatedProduct.css";
import data_product from "../Assets/data";
import Item from "../Item/Item";

const RelatedProduct = () => {
  return (
    <div className="realtedproducts">
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-item">
        {data_product.map((item, index) => {
          return <Item key={index} {...item} />;
        })}
      </div>
    </div>
  );
};

export default RelatedProduct;
