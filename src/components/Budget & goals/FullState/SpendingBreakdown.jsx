import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const SpendingBreakdown = () => {
  const spendingData = [
    {
      category: "Food",
      amount: 1600,
      percentage: 50,
      color: "#22c55e",
    },
    {
      category: "Transport",
      amount: 600,
      percentage: 18.8,
      color: "#3b82f6",
    },
    {
      category: "Education",
      amount: 400,
      percentage: 12.5,
      color: "#8b5cf6",
    },
    {
      category: "Shopping",
      amount: 300,
      percentage: 9.4,
      color: "#f59e0b",
    },
    {
      category: "Entertainment",
      amount: 200,
      percentage: 6.3,
      color: "#ec4899",
    },
    {
      category: "Others",
      amount: 100,
      percentage: 3.1,
      color: "#94a3b8",
    },
  ];

  const totalSpent = spendingData.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);

  return (
    <section className="w-full mt-5 rounded-lg border border-gray-200 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)] p-2">
      {/* Header */}
      <div>
        <h2 className="text-xl font-bold text-gray-900">
          Spending Breakdown
        </h2>  

        <p className="text-sm text-gray-500">
          Your budget vs actual spending
        </p>
      </div>

      {/* Chart + Legend */}
      <div className="mt-5 flex flex-col items-center gap-5 sm:flex-row">
        {/* Donut */}
        <div className="relative h-[250px] w-full sm:w-1/2">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={spendingData}
                dataKey="amount"
                nameKey="category"
                cx="50%"
                cy="50%"
                innerRadius={65}
                outerRadius={95}
                paddingAngle={1}
              >
                {spendingData.map((item) => (
                  <Cell
                    key={item.category}
                    fill={item.color}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          {/* Center text */}
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
            <p className="text-2xl font-bold">
              ₹{totalSpent.toLocaleString()}
            </p>

            <p className="text-sm text-gray-500">
              Total Spent
            </p>

            <p className="text-xs text-gray-400">
              (64% of budget)
            </p>
          </div>
        </div>

        {/* Legend */}
        <div className="w-full space-y-3 sm:w-1/2">
          {spendingData.map((item) => (
            <div
              key={item.category}
              className="flex items-center justify-between gap-2 text-sm"
            >
              <div className="flex items-center gap-2">
                <span
                  className="h-3 w-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                />

                <span>{item.category}</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="font-medium">
                  ₹{item.amount.toLocaleString()}
                </span>

                <span className="w-12 text-right text-gray-500">
                  {item.percentage}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpendingBreakdown;