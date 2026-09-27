import {
  ChartNoAxesCombined,
  Target,
  ChartPie,
} from "lucide-react";

const FeatureSection = () => {
  return (
    <section className="px-10 py-16" id="features">

      {/* Heading */}
      <div className="text-center">

        <div className="inline-flex rounded-full bg-purple-100 px-4 py-2">
          <p className="text-sm font-medium text-purple-700">
            Features
          </p>
        </div>

        <h2 className="mt-4 text-3xl font-bold text-slate-900">
          Everything you need to stay on track
        </h2>

        <p className="mt-2 text-gray-500">
          Simple tools to help you manage your money better.
        </p>

      </div>


      {/* Cards */}
      <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">

        {/* Card 1 */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
            <ChartNoAxesCombined size={25} />
          </div>

          <h3 className="mt-5 text-lg font-semibold text-slate-900">
            Track Income & Expenses
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-500">
            Easily add and categorize your income and expenses.
          </p>
        </div>


        {/* Card 2 */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-600">
            <Target size={25} />
          </div>

          <h3 className="mt-5 text-lg font-semibold text-slate-900">
            Set Financial Goals
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-500">
            Plan for what matters and achieve your financial goals.
          </p>
        </div>


        {/* Card 3 */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-500">
            <ChartPie size={25} />
          </div>

          <h3 className="mt-5 text-lg font-semibold text-slate-900">
            Get Clear Insights
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-500">
            Visualize your spending with simple charts and reports.
          </p>
        </div>

      </div>

    </section>
  );
};

export default FeatureSection;