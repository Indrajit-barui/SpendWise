const CategoryLimit = ({ name, amount, icon,onChange }) => {
  return (
    <div className="flex items-center gap-4 rounded-lg border border-gray-200 p-3">
      
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
        {icon}
      </div>

      <div className="flex-1">
        <p className="font-semibold text-gray-900">
          {name}
        </p>

        <div className="mt-2 flex items-center rounded-md border border-gray-200">
          <span className="px-3 text-gray-600">₹</span>

          <input
            type="number"
            value={amount}
            onChange={onChange}
            placeholder="0"
            className="w-full px-2 py-2 outline-none"
          />
        </div>
      </div>

    </div>
  );
};

export default CategoryLimit;