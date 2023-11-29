// HeartSearchIcon.jsx
import React from 'react';
import { BsSearchHeart } from 'react-icons/bs'; // Import the icon
import './SearchIcon.css'; // Create a CSS file for styling

const HeartSearchIcon = () => {
  return (
    <div className="search-container">
      <input type="text" placeholder="Search..." className="search-input" />
      <BsSearchHeart className="heart-icon" />
    </div>
  );
};

export default HeartSearchIcon;
