// Add "use client" directive at the top
"use client";

import { useState } from 'react';

function NewItem({ onAddItem }) {
  // Initialize State Variables
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  // Form Submission Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { name, quantity, category };

    // Call the onAddItem prop and pass the new item
    onAddItem(newItem);

    // Reset the form fields
    setName("Item name");
    setQuantity(1);
    setCategory("produce");
  };

  // Render the Component
  return (
    <main className="flex justify-left w-full">
      <form
        onSubmit={handleSubmit}
        className="p-2 m-4 bg-gray-900 text-black max-w-sm w-full"
      >
        <div className="mb-2">
          <input
            type="text"
            placeholder="Item name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full mt-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
          />
        </div>
        <div className="flex justify-between">
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            min="1"
            max="99"
            required
            className="w-20 ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
          >
            <option value="" disabled="">Category</option>
            <option value="produce" selected="">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen foods">Frozen Foods</option>
            <option value="canned goods">Canned Goods</option>
            <option value="dry goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          +
        </button>
      </form>
    </main>
  );
}

export default NewItem;
