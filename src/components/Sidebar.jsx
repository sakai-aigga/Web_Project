import { LayoutDashboard, BookOpen, Upload, User, FileText, Bell } from "lucide-react";
import { Link } from "react-router-dom";

export default function Sidebar({ userType = "teacher" }) {
  // Define menu items for student vs teacher
  const menuItems = {
    student: [
      { title: "Dashboard", icon: <LayoutDashboard size={18} />, link: "/student-dashboard" },
      { title: "My Courses", icon: <BookOpen size={18} />, link: "/student-courses" },
      { title: "Notes", icon: <FileText size={18} />, link: "/student-notes" },
      { title: "Profile", icon: <User size={18} />, link: "/profile" },
    ],
    teacher: [
      { title: "Dashboard", icon: <LayoutDashboard size={18} />, link: "/teacher-dashboard" },
      { title: "My Courses", icon: <BookOpen size={18} />, link: "/my-courses" },
      { title: "Create Course", icon: <BookOpen size={18} />, link: "/create-course" },
      { title: "Manage Uploads", icon: <Upload size={18} />, link: "/uploads" },
      { title: "Updates", icon: <Bell size={18} />, link: "/teacher-updates" },
      { title: "Profile", icon: <User size={18} />, link: "/profile" },
    ],
  };

  return (
    <div className="w-64 min-h-screen bg-blue-700 text-white p-5 flex flex-col">
      <h1 className="text-2xl font-bold mb-10">LMS</h1>

      <ul className="flex-1 space-y-4">
        {menuItems[userType].map((item, idx) => (
          <li key={idx}>
            <Link
              to={item.link}
              className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              {item.icon}
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
