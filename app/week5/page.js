// /app/week5/page.js

"use client";

import ItemList from './item-list';

export default function Page() {
  return (
    <main className="p-5 bg-gray-900">
      <h1 className="text-2xl mb-4">Shopping List</h1>
      <ItemList />
    </main>
  );
}
