// /app/week5/item-list.client.js

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
            <button 
                onClick={() => setSortBy('name')}
                style={{backgroundColor: sortBy === 'name' ? 'lightgrey' : 'white'}}
            >
                Sort by Name
            </button>
            <button 
                onClick={() => setSortBy('category')}
                style={{backgroundColor: sortBy === 'category' ? 'lightgrey' : 'white'}}
            >
                Sort by Category
            </button>
            {/* Optional group by category button */}
            <button 
                onClick={() => setSortBy('grouped')}
            >
                Group by Category
            </button>

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
