import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";
import { BookOpen, FileText, Download, Bell, Clock } from "lucide-react";

export default function StudentDashboard() {
  const materials = [
    { name: "Web Engineering - Unit 1.pdf", type: "pdf" },
    { name: "Software Engineering - UML.pptx", type: "ppt" },
    { name: "Database Notes.docx", type: "doc" },
    { name: "React Intro Video.mp4", type: "video" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <div className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Student Dashboard</h1>
            <p className="text-gray-500 mt-1">Welcome back! Check your courses and updates.</p>
          </div>
          <button
            onClick={() => {
              localStorage.clear();         // remove all saved user data
              window.location.href = "/login"; // redirect to login page
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow"
          >
            Logout
          </button>

        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <StatCard title="My Courses" value="4" icon={<BookOpen />} color="bg-blue-500" />
          <StatCard title="Available Notes" value="18" icon={<FileText />} color="bg-green-500" />
          <StatCard title="Downloads" value="9" icon={<Download />} color="bg-purple-500" />
          <StatCard title="Updates" value="3" icon={<Bell />} color="bg-orange-500" />
        </div>

        {/* Learning Materials */}
        <h2 className="text-xl font-bold text-gray-800 mb-4">Learning Materials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {materials.map((file, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition-shadow duration-200 flex flex-col justify-between"
            >
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">{file.name}</h3>
                <span className="text-sm text-gray-500 flex items-center gap-1">
                  <Clock size={16} /> Uploaded 2 days ago
                </span>
              </div>
              <button className="mt-4 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg shadow">
                Download
              </button>
            </div>
          ))}
        </div>

        {/* Quick Links */}
        <div className="mt-10">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Quick Links</h2>
          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow">
              My Courses
            </button>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg shadow">
              My Notes
            </button>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg shadow">
              Updates
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg shadow">
              Downloads
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
