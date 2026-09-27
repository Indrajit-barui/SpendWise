import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import hero from "../../assets/images/hero.jpeg"
const HeroSection = () => {
  return (
<div className="relative flex justify-around min-h-[580px] items-center overflow-hidden bg-gradient-to-br from-violet-50 via-white to-purple-50 px-10">

<div className="absolute right-[5%] top-[-180px] h-[650px] w-[650px] rounded-full bg-purple-100 blur-2xl" />
<div className="absolute -right-20 -top-32 h-[650px] w-[650px] rounded-full bg-purple-100/80" />
<div className="absolute -right-32 -top-48 h-[750px] w-[750px] rounded-full bg-purple-200/60" />

<div className="absolute right-[20%] top-[-100px] h-[500px] w-[500px] rounded-full bg-violet-100/70" />
{/* Blue background glow */}
<div className="absolute -left-32 -bottom-40 h-[500px] w-[500px] rounded-full bg-blue-200/40" />
      <div className="max-w-xl z-10">

        {/* Badge */}
        <div className="mb-6 inline-flex rounded-full bg-purple-100 px-4 py-2">
          <p className="text-sm font-medium text-purple-700">
            Your Personal Finance Companion
          </p>
        </div>

        {/* Heading */}
        <h1 className="text-5xl font-bold leading-[1.1] tracking-tight text-slate-900">
          Manage your money,
          <br />
          <span className="text-purple-600">
            simply and confidently.
          </span>
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-lg text-lg leading-7 text-gray-500">
          Track your income, expenses and financial goals
          in one simple dashboard.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex items-center gap-4">

          {/* Get Started */}
          <Link
            to="/signup"
            className="flex items-center gap-2 rounded-xl bg-purple-600 px-7 py-3 font-semibold text-white transition hover:bg-purple-700"
          >
            Get Started
            <ArrowRight size={19} />
          </Link>

          {/* Login */}
          <Link
            to="/login"
            className="rounded-xl border border-gray-300 bg-white px-7 py-3 font-semibold text-gray-800 transition hover:bg-gray-50"
          >
            Login
          </Link>

        </div>

      </div>
       

       <div className="w-1/2 flex justify-center items-center z-10">
         <img src={hero} alt="" srcset="" className="w-full max-w-2xl object-contain"/>
       </div>
    </div>
  );
};

export default HeroSection;