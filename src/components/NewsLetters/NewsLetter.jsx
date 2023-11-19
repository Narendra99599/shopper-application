import React from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className="new-letter-container">
      <div className="newsletter">
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe to our newletter and stay updated</p>
        <div>
          <input type="email" name="email" placeholder="your email id" />
          <button>SubScribe</button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
