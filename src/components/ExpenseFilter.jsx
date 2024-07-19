import Categories from "../categories";

function ExpenseFilter({ onSelectCategory }) {
  return (
    <>
    <label htmlFor="sort" className="text-2xl">Sort by</label>
      <select id="sort"
        onChange={(e) => onSelectCategory(e.target.value)}
        className="outline-none rounded-md px-4 py-2 block w-full text-gray-700 text-lg bg-white hover:border-gray-200 focus:ring-2 focus:ring-blue-500"
      >
        <option value="">All Categories</option>
        {Categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </>
  );
}

export default ExpenseFilter;
