import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-white p-6 rounded-xl shadow text-center">
      <h2 className="text-xl font-semibold mb-4">Counter</h2>

      <p className="text-4xl mb-4">{count}</p>

      <div className="flex justify-center gap-4">
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={() => setCount(count + 1)}
        >
          + (Increase)
        </button>

        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={() => setCount(count - 1)}
        >
          - (Decrease)
        </button>

        <button
          className="bg-gray-500 text-white px-4 py-2 rounded"
          onClick={() => setCount(0)}
        >
          0 (Reset)
        </button>
      </div>
    </div>
  );
}

export default Counter;
