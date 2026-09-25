import { Wallet,ShieldCheck ,ChartNoAxesCombined,Target,ChartPie,  Mail,
  LockKeyhole,
  Eye,
  ArrowRight} from "lucide-react";


const Login = () => {
  return (
    <div className="min-h-screen w-full flex overflow-hidden">

      {/* Left side */}
<div className="relative hidden lg:flex w-1/2 h-screen overflow-hidden bg-gradient-to-br from-violet-100 via-purple-50 to-indigo-100 px-10 py-8 justify-end">

<div className="w-full max-w-lg">
        {/* header */}
        <div className="flex gap-3 mt-12">
        <div className="w-12 h-12 rounded-xl bg-blue-700 text-white flex items-center justify-center">
            <Wallet size={29}/>
        </div>
        <div>
            <p className="font-semibold text-xl">SpendWise</p>
            <p className="text-gray-500">Track . plan . Save . Grow</p>
        </div>
        </div>
     {/* content */}
     <div className="mt-12 max-w-md">
        <p className="text-5xl font-bold">
            Take control<br />  of <span className="text-blue-700">your money</span>
        </p>
        <p className="text-gray-500">Track your expenses , set goals and
            <br /> build a better financial future <br />with SpendWise</p>
     </div>
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
<div className="mt-10 w-fit rounded-2xl border border-white/70 bg-white/60 px-5 py-3 shadow-sm backdrop-blur-md">
  <p className="text-sm font-semibold text-purple-700">
    Better finances. Brighter tomorrow.
  </p>

  <p className="mt-1 text-xs text-gray-500">
    Small steps today can make a big difference.
  </p>
</div>
</div>


<div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-purple-300/30 blur-3xl" />

<div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-indigo-300/30 blur-3xl" />

<div className="absolute top-1/2 right-[-80px] h-52 w-52 rounded-full bg-purple-200/40" />


      </div>


{/* Right side */}

<div className="flex h-screen w-full items-center justify-center bg-white px-4 py-6 lg:w-1/2">

  <div className="w-full max-w-xl rounded-2xl border border-gray-200 bg-white px-8 py-2 shadow-sm">

    {/* Logo */}
    <div className="flex justify-center">
      <div className="flex items-center gap-3">
        <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-purple-600 text-white">
          <Wallet size={32} />
        </div>

        <p className="text-3xl font-bold text-slate-900">
          SpendWise
        </p>
      </div>
    </div>

    {/* Heading */}
    <div className="mt-5 text-center">
      <h1 className="text-3xl font-bold text-slate-900">
        Welcome back!
      </h1>

      <p className="mt-1 text-gray-500">
        Login to continue managing your finances
      </p>
    </div>

    {/* Form */}
    <form className="mt-4">

      {/* Email */}
      <div>
        <label className="text-sm font-medium text-slate-900">
          Email
        </label>

        <div className="relative mt-1">
          <Mail
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
          />

<input
  type="email"
  placeholder="Enter your email address"
  className="w-full rounded-xl border border-gray-300 py-3 pl-12 pr-4 text-sm md:text-base placeholder:text-xs md:placeholder:text-sm outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
/>
        </div>
      </div>

      {/* Password */}
      <div className="mt-3">
        <label className="text-sm font-medium text-slate-900">
          Password
        </label>

        <div className="relative mt-1">
          <LockKeyhole
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
          />

          <input
            type="password"
            placeholder="Enter your password"
            className="w-full rounded-xl border border-gray-300 py-3 pl-12 pr-12 outline-none transition placeholder:text-xs md:placeholder:text-sm focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
          />

          <Eye
            size={20}
            className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
          />
        </div>
      </div>

      {/* Remember + Forgot */}
      <div className="mt-4 flex items-center justify-between">

        <label className="flex cursor-pointer items-center gap-2">
          <input
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 accent-purple-600"
          />

          <span className="text-sm text-slate-700">
            Remember me
          </span>
        </label>

        <button
          type="button"
          className="text-sm font-medium text-purple-600 hover:text-purple-700"
        >
          Forgot password?
        </button>

      </div>

      {/* Login button */}
      <button
        type="submit"
        className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 py-3 text-base font-semibold text-white transition hover:opacity-90"
      >
        Login
        <ArrowRight size={20} />
      </button>

    </form>

    {/* Divider */}
    <div className="my-7 flex items-center gap-4">
      <div className="h-px flex-1 bg-gray-200"></div>

      <span className="text-sm text-gray-400">
        or continue with
      </span>

      <div className="h-px flex-1 bg-gray-200"></div>
    </div>

    {/* Social buttons */}
    <div className="grid grid-cols-3 gap-3">

      <button
        type="button"
        className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 py-3 text-sm font-medium transition hover:bg-gray-50"
      >
<i className="fa-brands fa-google text-2xl xl:text-xl"></i>
       <p className="hidden xl:block">Google</p> 
      </button>


      <button
        type="button"
        className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 py-3 text-sm font-medium transition hover:bg-gray-50"
      >
        <i className="fa-brands fa-microsoft text-2xl xl:text-xl "></i>
        <p className="hidden xl:block">Microsoft</p>
      </button>

<button
  type="button"
  className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 py-3 text-sm font-medium transition hover:bg-gray-50"
>
  
  <i className="fa-brands fa-facebook font-bold text-blue-600 text-2xl xl:text-xl"></i>
  <p className="hidden xl:block">Facebook</p>
</button>
    </div>

    {/* Signup */}
    <p className="mt-8 text-center text-sm text-gray-500">
      Don't have an account?{" "}
      <button
   
        type="button"
        className="font-semibold text-purple-600 hover:text-purple-700"
      >
        Sign Up
      </button>
    </p>

  </div>
</div>

    </div>
  );
};

export default Login;