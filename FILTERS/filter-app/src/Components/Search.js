import React, {useState} from 'react'
import items from './Data.js'
const Search = () => {
    const [filter, setFilter] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    const handleInputChange = (event) => {
        setFilter(event.target.value);
        filterData(event.target.value);
      }

      const filterData = (filter) => {
        const filtered = items.filter((item) => {
          // Here, implement your logic for filtering the data. 
          // For example, you can use the 'includes' method to check if the item matches the filter query.
          return item.title.includes(filter);
        });
        setFilteredData(filtered);
      }
    
      return (
        <div>
          <input type="text" value={filter} onChange={handleInputChange} placeholder="Search..." />
          <ul>
            {filteredData.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
        </div>
      );
}

export default Search