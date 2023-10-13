// /app/week5/item-list.client.js

"use client";

import React, { useState } from 'react';
import Item from './item';
import itemsData from './items.json';

function ItemList() {
    const [sortBy, setSortBy] = useState("name");

    const sortedItems = [...itemsData].sort((a, b) => {
        if (sortBy === 'name') {
            return a.name.localeCompare(b.name);
        }
        if (sortBy === 'category') {
            return a.category.localeCompare(b.category);
        }
        return 0;
    });

    // Optional grouping by category
    const groupedItems = itemsData.reduce((acc, item) => {
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
            <label for="sort">Sort by: </label>
                    
                    
                <button 
                    className={`p-1 m-2 w-28 ${sortBy === 'name' ? 'bg-orange-500' : 'bg-orange-700'}`}
                    onClick={() => setSortBy('name')}
                    //style={{backgroundColor: sortBy === 'name' ? 'bg-orange-500' : 'bg-orange-700'}}
                    >
                    Name
                </button>
                <button 
                    className={`p-1 m-2 w-28 ${sortBy === 'category' ? 'bg-orange-500' : 'bg-orange-700'}`}
                    onClick={() => setSortBy('category')}
                >
                    Category
                </button>
                {/* Optional group by category button */}
                <button 
                    className={`p-1 m-2 w-28 ${sortBy === 'grouped' ? 'bg-orange-500' : 'bg-orange-700'}`}
                    onClick={() => setSortBy('grouped')}
                >
                    Category
                </button>
            <label class="absolute top-20 left-240  text-gray-600 text-xs italic" for="group-category">← &quot;Grouped Category &quot;is an optional extra challenge</label>

            {sortBy !== 'grouped' ? (
                sortedItems.map(item => (
                    <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
                ))
            ) : (
                sortedCategories.map(category => (
                    <div key={category}>
                        <h2 className="capitalize">{category}</h2>
                        {groupedItems[category].map(item => (
                            <Item key={item.id} name={item.name} quantity={item.quantity} />
                        ))}
                    </div>
                ))
            )}
        </div>
    );
}

export default ItemList;


