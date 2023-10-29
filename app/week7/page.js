"use client";

import React, { useState } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import itemsData from './items.json';

import MealIdeas from './meal-ideas'; // Import the MealIdeas component

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState(""); // Add a state variable to hold the selected item name

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleItemSelect = (selectedItem) => {
    setSelectedItemName(selectedItem.name); // Update the selected item name when an item is selected
  };

  return (
    
    <main className="p-5 bg-gray-900">

        <h2 class="text-3xl font-bold mb-4">Shopping List</h2>
        <h3 class="text-xl font-bold">Add New Item</h3>

      <div class="flex"> 
        <div class="flex w-50">
          <div><NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
          </div>
        </div>
        <div class="flex w-50"><MealIdeas ingredient={selectedItemName} /></div>  
      </div>

    </main>
  );
}
