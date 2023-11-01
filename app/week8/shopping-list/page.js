// "use client" indicates this code runs on the client-side
"use client";

import React, { useState } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import itemsData from './items.json';
import { useRouter } from 'next/router';  // Import the useRouter hook from Next.js

import MealIdeas from './meal-ideas'; // Import the MealIdeas component
import { useUserAuth } from './_utils/auth-context'; // Import the useUserAuth hook

export default function Page() {
  const { user } = useUserAuth(); // Use the useUserAuth hook to get the user object
  const router = useRouter(); // Initialize the router object
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  // Redirect to landing page if the user is not logged in
  if (user === null) {
    router.push('/'); // Replace '/' with your landing page URL
    return null; // Return null to indicate nothing should be rendered
  }

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleItemSelect = (selectedItem) => {
    setSelectedItemName(selectedItem.name);
  };

  return (
    <main className="p-5 bg-gray-900">
      <h2 className="text-3xl font-bold mb-4">Shopping List</h2>
      <h3 className="text-xl font-bold">Add New Item</h3>
      <div className="flex">
        <div className="flex w-50">
          <div>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} onItemSelect={handleItemSelect} />
          </div>
        </div>
        <div className="flex w-50">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
