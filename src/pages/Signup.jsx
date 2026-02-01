import { Mail, Lock, User, Users } from "lucide-react";
import Input from "../components/Input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Student"); // default
  const navigate = useNavigate();

  const handleSignup = () => {
    if (!name || !email || !password || !role) {
      alert("Please fill all fields!");
      return;
    }

    // Save user info
    localStorage.setItem("userType", role.toLowerCase()); // 'student' or 'teacher'
    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    // Redirect to dashboard
    if (role === "Student") navigate("/student-dashboard");
    else navigate("/teacher-dashboard");
  };

  return (
    <div
      className="min-h-screen bg-gray-50 flex items-center justify-center px-4"
      style={{
        backgroundImage:
          "url('https://imgs.search.brave.com/zoVq95IgsH_Np2R5KCEJQ_hZnOtnpr0gICM87AHyfLk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/d2FsbHBhcGVyc2Fm/YXJpLmNvbS85OS8z/NS9OcHhvNzkuanBn')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-white w-full max-w-md p-10 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-2">
          Create Account
        </h1>
        <p className="text-center text-gray-500 mb-6">Join the LMS and start learning</p>

        <div className="space-y-4">
          <Input value={name} onChange={e => setName(e.target.value)} icon={<User />} placeholder="Full Name" />
          <Input value={email} onChange={e => setEmail(e.target.value)} icon={<Mail />} placeholder="Email" />
          <Input value={password} onChange={e => setPassword(e.target.value)} type="password" icon={<Lock />} placeholder="Password" />

          <div className="flex items-center gap-3 border rounded-lg px-3 py-2">
            <Users className="text-gray-400" />
            <select value={role} onChange={e => setRole(e.target.value)} className="w-full outline-none">
              <option>Student</option>
              <option>Teacher</option>
            </select>
          </div>
        </div>

        <button
          onClick={handleSignup}
          className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl shadow text-center font-medium"
        >
          Sign Up
        </button>

        <p className="text-sm text-center mt-5 text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 hover:underline font-medium">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
