// /app/week7/item-list.client.js

"use client";

import React, { useState } from 'react';
import Item from './item';

function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  const handleItemClick = (selectedItem) => {
    // Trigger the onItemSelect function with the selected item as an argument
    onItemSelect(selectedItem);
  };

  // Create a copy of the items array to avoid mutating the prop
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    }
    if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  // Optional grouping by category
  const groupedItems = items.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  const sortedCategories = Object.keys(groupedItems).sort();

  for (let category of sortedCategories) {
    groupedItems[category].sort((a, b) => a.name.localeCompare(b.name));
  }

  return (
    <div>
      <label htmlFor="sort">Sort by: </label>
      <button
        className={`p-1 m-2 w-28 ${sortBy === 'name' ? 'bg-orange-500' : 'bg-orange-700'}`}
        onClick={() => setSortBy('name')}
      >
        Name
      </button>
      <button
        className={`p-1 m-2 w-28 ${sortBy === 'category' ? 'bg-orange-500' : 'bg-orange-700'}`}
        onClick={() => setSortBy('category')}
      >
        Category
      </button>

      {sortBy !== 'grouped' ? (
        sortedItems.map(item => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
            onClick={() => handleItemClick(item)} // Pass the onClick handler to Item
          />
        ))
      ) : (
        sortedCategories.map(category => (
          <div key={category}>
            <h2 className="capitalize">{category}</h2>
            {groupedItems[category].map(item => (
              <Item
                key={item.id}
                name={item.name}
                quantity={item.quantity}
                onClick={() => handleItemClick(item)} // Pass the onClick handler to Item
              />
            ))}
          </div>
        ))
      )}
    </div>
  );
}

export default ItemList;
