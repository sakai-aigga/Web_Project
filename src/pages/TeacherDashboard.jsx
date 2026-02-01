import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";
import Nav from "../components/Nav";
import { BookOpen, FileText, Download, Bell, Clock } from "lucide-react";

export default function TeacherDashboard() {
  const materials = [
    "Web Engineering - Unit 1.pdf",
    "Software Engineering - UML.pptx",
    "Database Notes.docx",
    "React Intro Video.mp4",
  ];

  const courses = [
    "Computer Science Basics",
    "Software Engineering",
    "Database Systems",
    "Web Development",
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <div className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Teacher Dashboard
            </h1>
            <p className="text-sm text-gray-500">
              Manage courses, attendance, and teaching materials
            </p>
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
          <StatCard title="Notes Uploaded" value="18" icon={<FileText />} color="bg-green-500" />
          <StatCard title="Downloads" value="9" icon={<Download />} color="bg-purple-500" />
          <StatCard title="Updates" value="3" icon={<Bell />} color="bg-orange-500" />
        </div>

        {/* Attendance Section */}
        <div className="bg-white p-6 rounded-xl shadow-md mb-10">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Mark Attendance</h2>
          <div className="flex flex-wrap gap-4">
            {courses.map((course, idx) => (
              <button
                key={idx}
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow transition-all"
              >
                {course}
              </button>
            ))}
          </div>
        </div>

        {/* Teaching Materials */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-xl font-bold text-gray-800">Teaching Materials</h2>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm shadow">
              + Upload
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {materials.map((file, index) => (
              <div
                key={index}
                className="bg-gray-50 p-4 rounded-lg shadow hover:shadow-lg flex justify-between items-center"
              >
                <span className="text-gray-700">{file}</span>
                <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded-lg text-sm shadow">
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
