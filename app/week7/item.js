// /app/week7/item.js

import React from 'react';

const Item = ({ name, quantity, category, onClick }) => {
  // Define a click event handler for when an item is clicked
  const handleClick = () => {
    // Trigger the onClick function with the selected item's details as arguments
    onClick({ name, quantity, category });
  };

  return (
    // Add an onClick handler to the item div to make it clickable
    <div className="p-2 border-b border-gray-800" onClick={handleClick}>
      <strong>{name} </strong> 
      <br />
      <text>Buy </text> {quantity}  
      <text> in </text> {category}
    </div>
  );
};

export default Item;
