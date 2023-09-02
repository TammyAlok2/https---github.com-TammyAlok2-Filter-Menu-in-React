import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Sentence from "../Pages/DailyEnglish/DailySentence";
const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav>
      <div className="contain">
        <ul className="navbar">
          <li>
            <a href="/">Home</a>
          </li>
          <li
            className="dropdown"
            onMouseEnter={handleDropdownToggle}
            onMouseLeave={handleDropdownToggle}
          >
            <a href="#">Courses</a>
            {showDropdown && (
              <div className="dropdown-content">
                <Link to={"sentence"}>15 Days Course</Link>
                <Link to={"sentence"}>30 Days Course</Link>
                <Link to={"sentence"}>30 Days Course</Link>
              </div>
            )}
          </li>

          <li
            className="dropdown"
            onMouseEnter={handleDropdownToggle}
            onMouseLeave={handleDropdownToggle}
          >
            <li>
              <a href="#">Daily Practise</a>
              {showDropdown && (
                <div className="dropdown-content">
                  <Link to={"vocab"}>Daily Vocabs</Link>
                  <Link to={"sentence"}>Daily Sentence</Link>
                  <Link to={"idiom"}>Daily Idioms</Link>
                </div>
              )}
            </li>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
