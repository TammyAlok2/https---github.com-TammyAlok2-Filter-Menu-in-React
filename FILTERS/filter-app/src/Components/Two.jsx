import React, { useState } from "react";
import Data from "./Data";

const App = () => {
  const [items, setItems] = useState(Data)

  const [selectedPrice, setSelectedPrice] = useState(3);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSort, setSelectedSort] = useState("");

  const handlePriceChange = (e) => {
    setSelectedPrice(parseFloat(e.target.value));
  };

  const handleColorChange = (e) => {
    const color = e.target.value;
    if (selectedColors.includes(color)) {
      setSelectedColors(selectedColors.filter((c) => c !== color));
    } else {
      setSelectedColors([...selectedColors, color]);
    }
  };

  const handleSortChange = (e) => {
    setSelectedSort(e.target.value);
  };

  const handleClick=()=>{
    items(Data)
  }
  const filteredItems = items
    .filter((item) => {
      return (
        (selectedPrice === 3 || item.price <= selectedPrice) &&
        (selectedColors.length === 0 || selectedColors.includes(item.category))
      );
    })
    .sort((a, b) => {
      if (selectedSort === "asc") {
        return a.title.localeCompare(b.title);
      } else if (selectedSort === "desc") {
        return b.title.localeCompare(a.title);
      }
    });

  return (
    <div>
      <h2>Filtered Items:</h2>
      <div>
        <label htmlFor="price">Price: ${selectedPrice}</label>
        <input
          type="range"
          id="price"
          min="0"
          max="500"
          step="0.5"
          value={selectedPrice}
          onChange={handlePriceChange}
        />
      </div>
      <div>
        <label>Color:</label>
        <label>
          <input
            type="checkbox"
            value="Dinner"
            checked={selectedColors.includes("Dinner")}
            onChange={handleColorChange}
          />
          Dinner
        </label>
        <label>
          <input
            type="checkbox"
            value="Breakfast"
            checked={selectedColors.includes("Breakfast")}
            onChange={handleColorChange}
          />
          Breakfast
        </label>
        <label>
          <input
            type="checkbox"
            value="Lunch"
            checked={selectedColors.includes("Lunch")}
            onChange={handleColorChange}
          />
          Lunch
        </label>
      </div>
      <div>
        <label htmlFor="sort">Sort By:</label>
        <select id="sort" value={selectedSort} onChange={handleSortChange}>
          <option value="">Select</option>
          <option value="asc">A to Z</option>
          <option value="desc">Z to A</option>
        </select>
      </div>
      <button onClick={()=>handleClick()}> Clear ALL </button>
      <div>
        {
            filteredItems.map((item)=>{
                return (
                    <>
                    <div className='title' > {item.title}</div>
                    <img src ={item.img} alt="alok" height={100}/>

                    </>
                )
            })
        }
      </div>
    </div>
  );
};

export default App;