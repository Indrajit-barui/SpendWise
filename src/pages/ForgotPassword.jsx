import { Link } from "react-router-dom";
import { Mail, ArrowLeft, WalletCards } from "lucide-react";
import { useState } from "react";

const ForgotPassword = () => {
    const [email,setEmail]=useState("");
  const handleSubmit = async (e) => {
  e.preventDefault();

  const response = await fetch("http://localhost:5000/auth/forgot-password", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  const data = await response.json();

  if (response.ok) {
    alert(data.message);
  } else {
    alert(data.message);
  }
};
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">

      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="flex justify-center items-center gap-2 mb-8">
          <div className="bg-purple-600 text-white p-2 rounded-xl">
            <WalletCards size={24} />
          </div>

          <h1 className="text-2xl font-bold text-gray-900">
            SpendWise
          </h1>
        </div>

        {/* Card */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 sm:p-8">

          {/* Heading */}
          <div className="text-center">
            <div className="mx-auto flex items-center justify-center w-14 h-14 rounded-full bg-purple-100 text-purple-600">
              <Mail size={26} />
            </div>

            <h2 className="mt-5 text-2xl font-bold text-gray-900">
              Forgot Password?
            </h2>

            <p className="mt-2 text-sm text-gray-500 leading-6">
              Enter the email address associated with your
              SpendWise account and we'll send you a reset link.
            </p>
          </div>

          {/* Form */}
          <form className="mt-7"
          onSubmit={handleSubmit}
          >

            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>

            <input
              type="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full h-12 px-4 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            />

            <button
              type="submit"
              className="w-full h-12 mt-5 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-700 transition"
            >
              Send Reset Link
            </button>

          </form>

          {/* Back to Login */}
          <div className="flex justify-center mt-6">
            <Link
              to="/login"
              className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-purple-600 transition"
            >
              <ArrowLeft size={17} />
              Back to Login
            </Link>
          </div>

        </div>

        {/* Footer */}
        <p className="text-center text-xs text-gray-400 mt-6">
          © 2026 SpendWise. All rights reserved.
        </p>

      </div>
    </div>
  );
};

export default ForgotPassword;