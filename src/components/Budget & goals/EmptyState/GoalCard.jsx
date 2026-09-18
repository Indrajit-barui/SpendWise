import { Check, Target,Plus } from "lucide-react";

const GoalCard = () => {
  return (
    <div className="flex-1 rounded-lg border border-purple-100 bg-purple-50/50 p-3 xl:p-6">

      {/* Icon and heading */}
      <div className="flex items-center gap-4">
        <div className="hidden flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
          <Target className="text-purple-600" size={26} />
        </div>

        <div>
          <h2 className="text-lg xl:text-xl font-bold text-gray-900">
            Set a Financial Goal
          </h2>

          <p className="mt-1 text-gray-600">
            Save for the things that matter to you, like a laptop,
            <br className="hidden xl:block"/>
            travel, or an emergency fund.
          </p>
        </div>
      </div>

      {/* Features */}
      <div className="mt-5 space-y-3">

        <div className="flex items-center gap-3">
          <Check
            size={18}
            className="rounded-full bg-purple-600 p-0.5 text-white"
          />
          <p className="text-gray-600">
            Add personalized savings goals
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Check
            size={18}
            className="rounded-full bg-purple-600 p-0.5 text-white"
          />
          <p className="text-gray-600">
            Track your progress over time
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Check
            size={18}
            className="rounded-full bg-purple-600 p-0.5 text-white"
          />
          <p className="text-gray-600">
            Stay motivated to achieve your dreams
          </p>
        </div>

      </div>

      {/* Button */}
      <div className="mt-6 flex justify-center">
        <button className="flex w-full xl:w-auto items-center justify-center gap-2 rounded-lg bg-purple-600 px-8 py-3 font-semibold text-white hover:bg-purple-700">
          <span className="text-xl"><Plus/></span>
          Create Goal
        </button>
      </div>

    </div>
  );
};

export default GoalCard;