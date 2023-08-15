import React, { useState } from "react";
import hotels from "./Data.js";
const PriceSlider = () => {
  const [price, setPrice] = useState(100);

  const handleInput = (e) => {
    setPrice(e.target.value);
  };

  return (
    <div>
      <input type="range" onInput={handleInput} max={1000} min={100} />
      <h1>Price: {price}</h1>
      <div>
        {hotels
          .filter((hotel) => {
            return hotel.price > parseInt(price, 10);
          })
          .map((hotel) => {
            return (
              <p key={hotel.id}>
                {hotel.title} | {hotel.price}{" "}
              </p>
            );
          })}
      </div>
    </div>
  );
};

export default PriceSlider;
