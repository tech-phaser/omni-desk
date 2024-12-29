import { useState } from "react";
import SignUp from "../../components/pageComponents/auth/sign-up/UserRegistration";

const Login = () => {
  const [activePage, setActivePage] = useState("login");

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 p-4">
      <div className="w-full max-w-md rounded-lg bg-gray-800/50 p-8 shadow-xl backdrop-blur-sm">
        {activePage === "login" ? (
          <div className="space-y-6">
            <div className="text-center">
              <h1 className="mb-2 text-3xl font-bold text-white">
                Welcome Back
              </h1>
              <p className="text-gray-400">
                Please enter your details to sign in
              </p>
            </div>

            <form className="space-y-4">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full rounded-lg border border-gray-600 bg-gray-700 px-4 py-2 text-white focus:border-transparent focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full rounded-lg border border-gray-600 bg-gray-700 px-4 py-2 text-white focus:border-transparent focus:ring-2 focus:ring-blue-500"
                  placeholder="••••••••"
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-600 bg-gray-700"
                  />
                  <span className="ml-2 text-sm text-gray-300">
                    Remember me
                  </span>
                </label>
                <button
                  type="button"
                  className="text-sm text-blue-400 hover:text-blue-300"
                >
                  Forgot password?
                </button>
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition-colors hover:bg-blue-700"
              >
                Sign In
              </button>
            </form>

            <div className="text-center">
              <p className="text-gray-400">
                Don't have an account?{" "}
                <button
                  onClick={() => setActivePage("signup")}
                  className="font-medium text-blue-400 hover:text-blue-300"
                >
                  Sign Up
                </button>
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="text-center">
              <h1 className="mb-2 text-3xl font-bold text-white">
                Create Account
              </h1>
              <p className="text-gray-400">
                Please fill in your details to register
              </p>
            </div>
            <SignUp />
            {/* <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  placeholder="••••••••"
                />
              </div>

              <div>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 bg-gray-700 border-gray-600 rounded"
                  />
                  <span className="ml-2 text-sm text-gray-300">
                    I agree to the Terms of Service and Privacy Policy
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
              >
                Create Account
              </button>
            </form> */}

            <div className="text-center">
              <p className="text-gray-400">
                Already have an account?{" "}
                <button
                  onClick={() => setActivePage("login")}
                  className="font-medium text-blue-400 hover:text-blue-300"
                >
                  Sign In
                </button>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
