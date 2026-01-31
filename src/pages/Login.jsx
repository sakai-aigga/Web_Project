import { Mail, Lock } from "lucide-react";
import Input from "../components/Input";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4"
    style={{
    backgroundImage: "url('https://imgs.search.brave.com/zoVq95IgsH_Np2R5KCEJQ_hZnOtnpr0gICM87AHyfLk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/d2FsbHBhcGVyc2Fm/YXJpLmNvbS85OS8z/NS9OcHhvNzkuanBn')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    }}
    >
      
      <div className="bg-white w-full max-w-md p-10 rounded-2xl shadow-lg">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-2">Welcome Back</h1>
        <p className="text-center text-gray-500 mb-6">
          Login to your LMS account
        </p>

        {/* Inputs */}
        <div className="space-y-4">
          <Input icon={<Mail />} placeholder="Email" />
          <Input icon={<Lock />} type="password" placeholder="Password" />
        </div>

        {/* Login Button */}
        <Link
          to="/student-dashboard"
          className="block w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl shadow text-center font-medium"
        >
          Login
        </Link>

        {/* Signup link */}
        <p className="text-sm text-center mt-5 text-gray-600">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline font-medium">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
