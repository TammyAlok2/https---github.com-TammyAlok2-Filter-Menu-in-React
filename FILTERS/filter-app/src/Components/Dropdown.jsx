import React, { useState } from 'react';
import Product from './Data.js'
const DropdownFilter = () => {
  const [filproduct, setFilter] = useState(Product);

  const handleChangeFilter = event => {
const filterProduct = filproduct.filter((main)=> main.category === event.target.value);
setFilter(filterProduct);
console.log(filterProduct);
    
  }

  return (
    <div>
      <label htmlFor="filter">Filter: </label>
      <select
        name="filter"
        value={filproduct}
        onChange={handleChangeFilter}
      >
        <option value="">-- Please Select --</option>
      
        <option value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
      </select>

      <ul>
            {filproduct.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>


    </div>
  )
};

export default DropdownFilter;