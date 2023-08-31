import React, { useState } from "react";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav>
      Di
      <ul className="navbar">
        <li><a href="#">Home</a></li>
        <li className="dropdown" onMouseEnter={handleDropdownToggle} onMouseLeave={handleDropdownToggle}>
          <a href="#">Services</a>
          {showDropdown && (
            <div className="dropdown-content">
              <a href="#">Service 1</a>
              <a href="#">Service 2</a>
              <a href="#">Service 3</a>
            </div>
          )}
        </li>
        <li><a href="#">Contact</a>
        {showDropdown && (
            <div className="dropdown-content">
              <a href="#">Service 1</a>
              <a href="#">Service 2</a>
              <a href="#">Service 3</a>
            </div>
          )}
        
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;