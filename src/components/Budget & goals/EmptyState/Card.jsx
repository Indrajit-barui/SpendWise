import { Lightbulb } from "lucide-react";

const Card = () => {
  return (
    <div className="hidden md:flex items-center gap-6 mt-5 p-6 rounded-lg border border-gray-200 bg-white">

      {/* Title */}
      <div className="flex items-center gap-4 min-w-[200px]">
        <div className="flex h-10 w-10 xl:h-12 xl:w-12 items-center justify-center rounded-full bg-purple-50">
          <Lightbulb className="text-purple-600" size={20} />
        </div>

        <div>
          <h2 className="font-bold text-gray-900">
            Tips to get started
          </h2>

          <p className="text-sm text-gray-500">
            Here are a few ideas to help you plan better.
          </p>
        </div>
      </div>

      {/* Tip 1 */}
      <div className="flex-1 border-l border-gray-200 pl-6">
        <div className="flex items-start gap-4">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-50 text-xl font-semibold text-purple-600">
            1
          </span>

          <div>
            <h3 className="font-semibold text-gray-900">
              Set a realistic budget
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Start with your monthly income and set category limits.
            </p>
          </div>
        </div>
      </div>

      {/* Tip 2 */}
      <div className="flex-1 border-l border-gray-200 pl-6">
        <div className="flex items-start gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-50 text-xl font-semibold text-purple-600">
            2
          </span>

          <div>
            <h3 className="font-semibold text-gray-900">
              Add your first goal
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Choose something meaningful to save for.
            </p>
          </div>
        </div>
      </div>

      {/* Tip 3 */}
      <div className="flex-1 border-l border-gray-200 pl-6">
        <div className="flex items-start gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-50 text-xl font-semibold text-purple-600">
            3
          </span>

          <div>
            <h3 className="font-semibold text-gray-900">
              Track regularly
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Keep adding your expenses to see your progress.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Card;