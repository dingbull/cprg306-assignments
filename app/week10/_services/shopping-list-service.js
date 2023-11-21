// shopping-list-service.js

import { db } from "../_utils/firebase"; // Adjust the path as necessary
import { collection, getDocs, addDoc, query, where } from "firebase/firestore";

/**
 * Fetches items from Firestore for a specific user.
 * 
 * @param {string} userId - The ID of the user whose items to fetch.
 * @return {Promise<Array>} - A promise that resolves to an array of items.
 */
export async function getItems(userId) {
    try {
        const itemsCol = collection(db, "users", userId, "items");
        const itemsSnapshot = await getDocs(query(itemsCol, where("userId", "==", userId)));
        const itemsList = itemsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        return itemsList;
    } catch (error) {
        console.error("Error fetching items: ", error);
        throw error;
    }
}

/**
 * Adds a new item to Firestore under a specific user's items.
 * 
 * @param {string} userId - The ID of the user to whom the item belongs.
 * @param {Object} newItem - The new item to add.
 * @return {Promise<string>} - A promise that resolves to the ID of the new item.
 */
export async function addItem(userId, newItem) {
    try {
        const itemsCol = collection(db, "users", userId, "items");
        const docRef = await addDoc(itemsCol, { ...newItem, userId });
        return docRef.id;
    } catch (error) {
        console.error("Error adding new item: ", error);
        throw error;
    }
}

