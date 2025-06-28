
export default function TodoFilter({ filter, setFilter }) {
  const filters = ["all", "active", "completed"];

  return (
    <div className="mb-4 flex space-x-2 justify-center">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          className={`capitalize px-4 py-2 rounded font-semibold transition ${
            filter === f
              ? "bg-blue-600 text-white"
              : "bg-gray-300 text-black dark:bg-gray-700 dark:text-white"
          }`}
        >
          {f}
        </button>
      ))}
    </div>
  );
}