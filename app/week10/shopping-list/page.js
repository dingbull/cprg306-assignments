// "use client" indicates this code runs on the client-side
"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import NewItem from './new-item';
import ItemList from './item-list';
import MealIdeas from './meal-ideas';
import { useUserAuth } from './_utils/auth-context';
import { getItems, addItem } from '../_services/shopping-list-service';

export default function Page() {
  const { user } = useUserAuth();
  const router = useRouter();
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  // Redirect to landing page if the user is not logged in
  if (!user) {
    router.push('/'); // Replace '/' with your landing page URL
    return null;
  }

  // Load items from Firestore
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const fetchedItems = await getItems(user.uid);
        setItems(fetchedItems);
      } catch (error) {
        console.error("Error loading items: ", error);
        // Handle the error appropriately
      }
    };

    fetchItems();
  }, [user]);

  const handleAddItem = async (newItemData) => {
    try {
      const newItemId = await addItem(user.uid, newItemData);
      setItems([...items, { ...newItemData, id: newItemId }]);
    } catch (error) {
      console.error("Error adding item: ", error);
      // Handle the error appropriately
    }
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
