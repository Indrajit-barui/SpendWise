import { Check, Wallet ,Plus} from "lucide-react";

const BudgetCard = () => {
  return (
    <div className="flex-1 rounded-lg border border-green-100 bg-green-50/50 p-3 xl:p-6">

      {/* Icon + Heading */}
      <div className="flex items-center gap-4">
        <div className="hidden flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <Wallet className="text-green-600" size={30} />
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-900">
            Create a Budget
          </h2>

          <p className="mt-1 text-gray-600">
            Set monthly spending limits for different categories
            <br className="hidden xl:block"/>
            and stay in control of your expenses.
          </p>
        </div>
      </div>

      {/* Features */}
      <div className="mt-5 space-y-3">

        <div className="flex items-center gap-3">
          <Check
            size={18}
            className="rounded-full bg-green-500 p-0.5 text-white"
          />
          <p className="text-gray-600">
            Set limits for categories (Food, Transport, etc.)
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Check
            size={18}
            className="rounded-full bg-green-500 p-0.5 text-white"
          />
          <p className="text-gray-600">
            Track your spending against your budget
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Check
            size={18}
            className="rounded-full bg-green-500 p-0.5 text-white"
          />
          <p className="text-gray-600">
            Get alerts when you're close to the limit
          </p>
        </div>

      </div>

      {/* Button */}
      <div className="mt-6 flex justify-center">
        <button className="flex w-full xl:w-auto items-center justify-center gap-2 rounded-lg bg-green-500 px-8 py-3 font-semibold text-white hover:bg-green-600">
          <span className="text-xl"><Plus/></span>
          Create Budget
        </button>
      </div>

    </div>
  );
};

export default BudgetCard;