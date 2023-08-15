import React ,{useState} from 'react'
import items from './Data.js'
const Button = () => {

    const [filteredItems, setFilteredItems] = useState(items);
    const handleFilter = (category) => {
        const filtered = items.filter(item => item.category === category);
        setFilteredItems(filtered);
        console.log(filtered);
      }

  return (
    <div>

<div>
    <button onClick={() => handleFilter('Breakfast')}>Breakfast</button>
    <button onClick={() => handleFilter('Lunch')}>Lunch</button>
    <button onClick={() => handleFilter('Dinner')}>Dinner</button>
    <button onClick={() => setFilteredItems(items)}>ALL</button>

    {filteredItems.map(item => (
      <div key={item.id}>
        {/* Render your item here */}
        <p>{item.title}</p>
      </div>
    ))}
  </div>



    </div>
  )
}

export default Button