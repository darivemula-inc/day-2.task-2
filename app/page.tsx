"use client";

import { useRef } from "react";

export default function Counter() {
  const countRef = useRef(0);

  const forceUpdate = () => {
    countRef.current = countRef.current; // Trigger re-render
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 text-center">
        <h1 className="text-3xl font-bold mb-4">Counter App</h1>
        <p className="text-4xl font-semibold mb-4">{countRef.current}</p>
        <div className="space-x-4">
          <button
            onClick={() => {
              countRef.current++;
              forceUpdate();
            }}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Increment
          </button>
          <button
            onClick={() => {
              countRef.current--;
              forceUpdate();
            }}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            Decrement
          </button>
          <button
            onClick={() => {
              countRef.current = 0;
              forceUpdate();
            }}
            className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
