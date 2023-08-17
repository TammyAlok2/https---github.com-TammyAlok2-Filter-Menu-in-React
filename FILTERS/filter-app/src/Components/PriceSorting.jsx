import React, {useState} from 'react'
import items from './Data.js'
const PriceSorting = () => {
    const [selectedSortOption, setSelectedSortOption] = useState("");
    const sortedItems = [...items]; // create a copy of the items array to avoid mutating the original array
console.log(sortedItems);
    if (selectedSortOption === "ascending") {
      sortedItems.sort((a, b) => a.price - b.price);
    } else if (selectedSortOption === "descending") {
      sortedItems.sort((a, b) => b.price - a.price);
    }
    else if (selectedSortOption ==='starting'){
        sortedItems.sort((a, b) => a.title.localeCompare(b.title));
    }
    else if (selectedSortOption ==='last'){
        sortedItems.sort((a, b) => b.title.localeCompare(a.title));
    }
  
    return (
    
<>
<select value={selectedSortOption} onChange={(e) => setSelectedSortOption(e.target.value)}>
  <option value="">Sort by</option>
  <option value="ascending">Price: Low to High</option>
  <option value="descending">Price: High to Low</option>
  <option value="starting">Price: (A to Z)</option>
  <option value="last">Price: (Z to A)</option>

</select>
<ul>
            {sortedItems.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>



</>


  )
}

export default PriceSorting