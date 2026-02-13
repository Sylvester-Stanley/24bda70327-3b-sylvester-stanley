"use client";

import { useState } from "react";
import LibraryButton from "@/components/library-button";

interface Item {
  id: string;
  name: string;
  createdAt: string;
}

export default function Home() {
  const [items, setItems] = useState<Item[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [showNotification, setShowNotification] = useState("");

  // Handler for Add button
  const handleAddClick = () => {
    if (!inputValue.trim()) {
      setShowNotification("Please enter an item name");
      setTimeout(() => setShowNotification(""), 3000);
      return;
    }

    const newItem: Item = {
      id: Date.now().toString(),
      name: inputValue,
      createdAt: new Date().toLocaleString(),
    };

    setItems([newItem, ...items]);
    setInputValue("");
    setShowNotification("✓ Item added successfully!");
    setTimeout(() => setShowNotification(""), 3000);

    console.log("Item added:", newItem);
  };

  // Handler for Delete button
  const handleDeleteClick = () => {
    if (items.length === 0) {
      setShowNotification("No items to delete");
      setTimeout(() => setShowNotification(""), 3000);
      return;
    }

    const deletedItem = items[0];
    setItems(items.slice(1));
    setShowNotification(`✓ Deleted: ${deletedItem.name}`);
    setTimeout(() => setShowNotification(""), 3000);

    console.log("Item deleted:", deletedItem);
  };

  // Handler for Delete All button
  const handleDeleteAll = () => {
    if (items.length === 0) {
      setShowNotification("No items to delete");
      setTimeout(() => setShowNotification(""), 3000);
      return;
    }

    const count = items.length;
    setItems([]);
    setShowNotification(`✓ Deleted all ${count} item(s)`);
    setTimeout(() => setShowNotification(""), 3000);

    console.log("All items deleted");
  };

  // Handler for Delete specific item
  const handleDeleteItem = (id: string) => {
    const itemToDelete = items.find((item) => item.id === id);
    setItems(items.filter((item) => item.id !== id));
    setShowNotification(`✓ Deleted: ${itemToDelete?.name}`);
    setTimeout(() => setShowNotification(""), 3000);

    console.log("Item deleted:", itemToDelete);
  };

  // Handler for input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // Handler for Enter key press
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAddClick();
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-3xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to My App
          </h1>
          <p className="text-lg text-gray-600">
            A simple and elegant item management interface
          </p>
        </div>

        {/* Notification Section */}
        {showNotification && (
          <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg animate-pulse">
            {showNotification}
          </div>
        )}

        {/* Content Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Add Items
          </h2>

          {/* Input Section */}
          <div className="flex gap-4 mb-8">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              placeholder="Enter item name..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <LibraryButton variant="add" onClick={handleAddClick}>
              + Add
            </LibraryButton>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mb-8 flex-wrap">
            <LibraryButton onClick={handleDeleteClick}>
              Delete First
            </LibraryButton>
            <LibraryButton onClick={handleDeleteAll}>
              Delete All
            </LibraryButton>
          </div>

          {/* Items List Section */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Items ({items.length})
            </h3>
            {items.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <p>No items yet. Add one to get started!</p>
              </div>
            ) : (
              <div className="space-y-2">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition"
                  >
                    <div>
                      <p className="font-medium text-gray-800">{item.name}</p>
                      <p className="text-sm text-gray-500">{item.createdAt}</p>
                    </div>
                    <button
                      onClick={() => handleDeleteItem(item.id)}
                      className="px-3 py-1 text-red-600 hover:bg-red-50 rounded transition"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <p className="text-gray-600 mb-2">Total Items</p>
            <p className="text-3xl font-bold text-blue-600">{items.length}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <p className="text-gray-600 mb-2">Status</p>
            <p className="text-xl font-semibold text-green-600">
              {items.length > 0 ? "Active" : "Empty"}
            </p>
          </div>
        </div>

        {/* Footer Section */}
        <div className="text-center text-gray-500 text-sm">
          <p>© 2026 My App. All rights reserved.</p>
        </div>
      </div>
    </main>
  );
}
