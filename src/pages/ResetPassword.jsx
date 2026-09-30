import { Link,useParams,useNavigate } from "react-router-dom";
import {
  WalletCards,
  LockKeyhole,
  Eye,
  ArrowLeft,
} from "lucide-react";
import { useState } from "react";

const ResetPassword = () => {
   const {token}=useParams();
   const navigate=useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
const handleSubmit = async (e) => {
  e.preventDefault();

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  const response = await fetch(
    `http://localhost:5000/auth/reset-password/${token}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password }),
    }
  );

  const data = await response.json();

  if (response.ok) {
    alert(data.message);
    navigate("/Login")
  } else {
    alert(data.message);
  }
};
  return (
    <div className="min-h-screen bg-[#faf9ff] flex items-center justify-center px-4 py-10 relative overflow-hidden">

      {/* Background decoration */}
      <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-purple-100/70" />
      <div className="absolute -bottom-40 -right-32 w-96 h-96 rounded-full bg-purple-100/70" />

      <div className="w-full max-w-xl relative z-10">

        {/* Logo */}
        <div className="flex justify-center items-center gap-2 mb-5">
          <div className="bg-purple-600 text-white p-3 rounded-xl">
            <WalletCards size={24} />
          </div>

          <h1 className="text-2xl font-bold text-gray-900">
            SpendWise
          </h1>
        </div>

        {/* Card */}
        <div className="bg-white border border-purple-100 rounded-2xl shadow-[0_8px_30px_rgba(88,28,135,0.08)] px-6 py-6 sm:px-8">

          {/* Icon */}
          <div className="flex justify-center">
            <div className="w-16 h-16 rounded-full bg-purple-50 flex items-center justify-center text-purple-600">
              <LockKeyhole size={30} />
            </div>
          </div>

          {/* Heading */}
          <div className="text-center mt-3">
            <h2 className="text-xl font-bold text-gray-900">
              Reset Password
            </h2>

            <p className="mt-2 text-gray-500 text-base leading-4 max-w-lg mx-auto">
              Enter your new password below to reset
              your SpendWise account password.
            </p>
          </div>

          {/* Form */}
          <form className="mt-5"
           onSubmit={handleSubmit}
          >

            {/* New Password */}
            <div>
              <label className="block text-base font-medium text-gray-700 mb-2">
                New Password
              </label>

              <div className="relative">
                <LockKeyhole
                  size={22}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your new password"
                  className="w-full h-11 pl-12 pr-12 rounded-xl border border-gray-300 outline-none text-gray-900 
                  placeholder:text-sm  placeholder:text-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-purple-600"
                >
                  <Eye size={22} />
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="mt-4">
              <label className="block text-base font-medium text-gray-700 mb-3">
                Confirm New Password
              </label>

              <div className="relative">
                <LockKeyhole
                  size={22}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm your new password"
                  className="w-full h-11 pl-12 pr-12 rounded-xl border border-gray-300 outline-none text-gray-900 
                   placeholder:text-sm  placeholder:text-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-purple-600"
                >
                  <Eye size={22} />
                </button>
              </div>
            </div>

            {/* Reset Button */}
            <button
              type="submit"
              className="w-full h-14 mt-8 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold text-lg transition"
            >
              Reset Password
            </button>

          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 mt-9">
            <div className="h-px bg-gray-200 flex-1" />

            <span className="text-sm text-gray-400">
              OR
            </span>

            <div className="h-px bg-gray-200 flex-1" />
          </div>

          {/* Back to Login */}
          <div className="flex justify-center mt-7">
            <Link
              to="/login"
              className="flex items-center gap-2 text-purple-600 font-medium hover:text-purple-700 transition"
            >
              <ArrowLeft size={20} />
              Back to Login
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ResetPassword;