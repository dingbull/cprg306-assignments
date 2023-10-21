"use client";

import React, { useState } from 'react'; // Import React and useState
import NewItem from './new-item'; // Update the path as needed
import ItemList from './item-list'; // Update the path as needed
import itemsData from './items.json'; // Update the path as needed

export default function Page() {
  // Initialize the 'items' state with data from items.json
  const [items, setItems] = useState(itemsData);

  // Define an event handler function to add a new item to 'items'
  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <main className="p-5 bg-gray-900">
      
      <h2 class="text-3xl font-bold mb-4">Shopping List</h2>
      <h3 class="text-xl font-bold">Add New Item</h3>
                

      {/* Render the NewItem component and pass the 'handleAddItem' function as a prop */}
      <NewItem onAddItem={handleAddItem} />

      {/* Render the ItemList component and pass the 'items' state as a prop */}
      <ItemList items={items} />
    </main>
  );
}
