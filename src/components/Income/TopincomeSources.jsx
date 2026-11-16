import { ChevronDown } from "lucide-react";

const TopincomeSources = ({ income = [] }) => {

  // Get current month and year
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  // Filter only current month's income
  const monthlyIncome = income.filter((item) => {
    const incomeDate = new Date(item.date);

    return (
      incomeDate.getMonth() === currentMonth &&
      incomeDate.getFullYear() === currentYear
    );
  });

  // Group income by source
  const TopincomeSources = Object.entries(
    monthlyIncome.reduce((acc, item) => {
      if (!acc[item.source]) {
        acc[item.source] = 0;
      }

      acc[item.source] += Number(item.amount);

      return acc;
    }, {})
  )
    .map(([source, amount]) => ({
      source,
      amount,
    }))
    .sort((a, b) => b.amount - a.amount)
    .slice(0, 5);

  // Find highest income
  const maxIncome = Math.max(
    ...TopincomeSources.map((item) => item.amount),
    0
  );

  return (
    <div className="w-full mt-5 rounded-lg border border-gray-200 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)] py-4 px-3">

      {/* Header */}
      <div className="flex flex-col gap-2 xl:flex-row xl:justify-between xl:items-center p-2">
        <div>
          <p className="font-bold">Top Income Sources</p>
          <p className="text-sm text-gray-500">
            Your top 5 highest earning sources this month
          </p>
        </div>

        <button className="w-fit flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm">
          This Month
          <ChevronDown size={16} />
        </button>
      </div>

      {/* Sources */}
      <div className="mt-2">

        {TopincomeSources.length > 0 ? (
          TopincomeSources.map((item, index) => {

            const progress = (item.amount / maxIncome) * 100;

            return (
              <div
                key={item.source}
                className="grid grid-cols-[36px_110px_1fr_70px] items-center gap-3 border-b py-3 last:border-b-0"
              >

                {/* Rank */}
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 font-semibold">
                  {index + 1}
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
          })
        ) : (
          <p className="py-6 text-center text-sm text-gray-500">
            No income transactions this month.
          </p>
        )}

      </div>
    </div>
  );
};

export default TopincomeSources;