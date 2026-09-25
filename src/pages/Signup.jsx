import {
  WalletCards,
  ChartNoAxesCombined,
  User,
  Mail,
  LockKeyhole,
  Eye,
  ArrowRight,
  Target,
  ChartPie,
  ShieldCheck,
} from "lucide-react";

const Signup = () => {
  return (
    <div className="min-h-screen w-full flex overflow-hidden">

      {/* ================= LEFT SIDE ================= */}
      <div className="relative hidden lg:block h-screen w-1/2 overflow-hidden bg-gradient-to-br from-violet-100 via-purple-50 to-indigo-100 px-8 py-6">

        {/* Decorative background */}
        <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-purple-300/30 blur-3xl" />

        <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-indigo-300/30 blur-3xl" />

        <div className="absolute bottom-10 right-[-50px] h-40 w-40 rounded-full bg-purple-200/40" />

        {/* Content */}
        <div className="relative z-10">

          {/* Header */}
          <div className="flex items-center gap-3">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-600 text-white shadow-md">
              <WalletCards size={25} />
            </div>

            <div>
              <p className="text-2xl font-bold text-slate-900">
                SpendWise
              </p>

              <p className="text-sm text-gray-500">
                Track • Plan • Save • Grow
              </p>
            </div>

          </div>


          {/* Heading */}
          <div className="mt-8">

            <p className="text-4xl font-bold leading-[1.1] text-slate-900">
              A smarter way
              <br />
              to manage
              <br />
              your money
            </p>

            <p className="mt-3 text-sm leading-5 text-gray-500">
              Track your income, control your expenses,
              <br />
              set goals and build a better financial future
              <br />
              with SpendWise.
            </p>

          </div>


          {/* Features */}
          <div className="mt-7 flex flex-col gap-3">

            {/* Track Expenses */}
            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
                <ChartNoAxesCombined size={23} />
              </div>

              <div>
                <p className="text-base font-semibold text-slate-900">
                  Track Expenses
                </p>

                <p className="text-xs text-gray-500">
                  Know where your money goes
                </p>
              </div>

            </div>


            {/* Set Goals */}
            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-600">
                <Target size={23} />
              </div>

              <div>
                <p className="text-base font-semibold text-slate-900">
                  Set Goals
                </p>

                <p className="text-xs text-gray-500">
                  Achieve your financial dreams
                </p>
              </div>

            </div>


            {/* Get Insights */}
            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                <ChartPie size={23} />
              </div>

              <div>
                <p className="text-base font-semibold text-slate-900">
                  Get Insights
                </p>

                <p className="text-xs text-gray-500">
                  Visualize your spending habits
                </p>
              </div>

            </div>


            {/* Stay in Control */}
            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-100 text-red-600">
                <ShieldCheck size={23} />
              </div>

              <div>
                <p className="text-base font-semibold text-slate-900">
                  Stay in Control
                </p>

                <p className="text-xs text-gray-500">
                  Build a better tomorrow
                </p>
              </div>

            </div>

          </div>


          {/* Bottom message */}
          <div className="mt-7 w-fit rounded-2xl border border-white/70 bg-white/50 px-5 py-3 shadow-sm backdrop-blur-sm">

            <p className="text-sm font-semibold text-purple-700">
              Small steps. Big goals.
            </p>

            <p className="mt-1 text-xs text-gray-500">
              A better financial future starts today.
            </p>

          </div>

        </div>
      </div>


      {/* ================= RIGHT SIDE ================= */}
      <div className="flex h-screen w-full items-center justify-center overflow-y-auto bg-white px-4 py-6 lg:w-1/2">

        <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

          {/* Logo */}
          <div className="flex items-center justify-center gap-2">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-600 text-white">
              <WalletCards size={24} />
            </div>

            <p className="text-xl font-semibold">
              SpendWise
            </p>

          </div>


          {/* Heading */}
          <div className="mt-3 text-center">

            <p className="text-2xl font-bold">
              Create your account
            </p>

            <p className="mt-1 text-sm text-gray-500">
              Start managing your finances
            </p>

          </div>


          {/* Name */}
          <div className="mt-5">

            <label className="mb-1.5 block text-sm font-medium">
              Name
            </label>

            <div className="relative">

              <User
                size={19}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                placeholder="Enter your full name"
                className="h-11 w-full rounded-lg border border-gray-300 pl-10 pr-3 text-sm outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
              />

            </div>

          </div>


          {/* Email */}
          <div className="mt-4">

            <label className="mb-1.5 block text-sm font-medium">
              Email
            </label>

            <div className="relative">

              <Mail
                size={19}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="email"
                placeholder="Enter your email address"
                className="h-11 w-full rounded-lg border border-gray-300 pl-10 pr-3 text-sm outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
              />

            </div>

          </div>


          {/* Password */}
          <div className="mt-4">

            <label className="mb-1.5 block text-sm font-medium">
              Password
            </label>

            <div className="relative">

              <LockKeyhole
                size={19}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="password"
                placeholder="Create a password"
                className="h-11 w-full rounded-lg border border-gray-300 pl-10 pr-10 text-sm outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
              />

              <Eye
                size={19}
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400"
              />

            </div>

          </div>


          {/* Confirm Password */}
          <div className="mt-4">

            <label className="mb-1.5 block text-sm font-medium">
              Confirm Password
            </label>

            <div className="relative">

              <LockKeyhole
                size={19}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="password"
                placeholder="Confirm your password"
                className="h-11 w-full rounded-lg border border-gray-300 pl-10 pr-10 text-sm outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
              />

              <Eye
                size={19}
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400"
              />

            </div>

          </div>


          {/* Sign Up */}
          <button className="mt-5 flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-purple-600 font-medium text-white transition hover:bg-purple-700">

            Sign Up

            <ArrowRight size={19} />

          </button>


          {/* Login */}
          <p className="mt-4 text-center text-sm text-gray-600">

            Already have an account?{" "}

            <span className="cursor-pointer font-semibold text-purple-600 hover:text-purple-700">
              Login
            </span>

          </p>

        </div>

      </div>

    </div>
  );
};

export default Signup;