import React, { useState } from 'react';
import Product from './Data'
const App = () => {
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  const items = [...Product];

  const handleChange = (event) => {
    const checkboxValue = event.target.value;

    if (event.target.checked) {
      setSelectedCheckboxes([...selectedCheckboxes, checkboxValue]);
    } else {
      setSelectedCheckboxes(selectedCheckboxes.filter((value) => value !== checkboxValue));
    }
  };

  const filteredItems = items.filter((item) => {

    return selectedCheckboxes.includes(item.category);
  });

  console.log(filteredItems);
  return (
    <div>
      <label>
        <input type="checkbox" value="Breakfast" onChange={handleChange} />
        Option 1
      </label>
      <label>
        <input type="checkbox" value="Lunch" onChange={handleChange} />
        Option 2
      </label>
      <label>
        <input type="checkbox" value="Dinner" onChange={handleChange} />
        Option 3
      </label>
      {/* Add more checkboxes as needed */}

      <ul>
        {filteredItems.map((item) => (
            <>
          <li key={item.id}>{item.title}</li>
          <li>{item.price}   </li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default App;