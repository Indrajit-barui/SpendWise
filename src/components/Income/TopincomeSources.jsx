import { ChevronDown } from "lucide-react";

const TopincomeSources = () => {
  const topIncomeSources = [
    {
      id: 1,
      source: "Freelancing",
      amount: 2000,
    },
    {
      id: 2,
      source: "Parents",
      amount: 2000,
    },
    {
      id: 3,
      source: "Scholarship",
      amount: 1500,
    },
    {
      id: 4,
      source: "Part-time Job",
      amount: 1000,
    },
  ];

  const maxIncome = Math.max(
    ...topIncomeSources.map((item) => item.amount)
  );

  return (
    <div className="w-full mt-5 rounded-lg border border-gray-200 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)] py-4 px-3">

      {/* Header */}
      <div className="flex items-center justify-between p-2">
        <div>
          <p className="font-bold">Top Income Sources</p>
          <p className="text-sm text-gray-500">
            Your highest earning sources
          </p>
        </div>

        <button className="flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm">
          This Month
          <ChevronDown size={16} />
        </button>
      </div>

      {/* Sources */}
      <div className="mt-2">
        {topIncomeSources.map((item) => {
          const progress = (item.amount / maxIncome) * 100;

          return (
            <div
              key={item.id}
              className="grid grid-cols-[36px_110px_1fr_70px] items-center gap-3 border-b py-3 last:border-b-0"
            >
              {/* Rank */}
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 font-semibold">
                {item.id}
              </div>

              {/* Source */}
              <div className="truncate text-sm font-medium">
                {item.source}
              </div>

              {/* Progress bar */}
              <div className="h-2 w-full rounded-full bg-gray-200">
                <div
                  className="h-full rounded-full bg-blue-500"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Amount */}
              <div className="text-right text-sm font-semibold">
                ₹{item.amount.toLocaleString("en-IN")}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopincomeSources;