import {
  LayoutDashboard,
  BookOpen,
  Upload,
  User,
  FileText,
  Bell,
  MenuIcon,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Sidebar({ userType = "teacher" }) {
  const [isOpen, setIsOpen] = useState(true);

  const menuItems = {
    student: [
      { title: "Dashboard", icon: <LayoutDashboard size={20} />, link: "/student-dashboard" },
      { title: "My Courses", icon: <BookOpen size={20} />, link: "/student-courses" },
      { title: "Notes", icon: <FileText size={20} />, link: "/student-notes" },
      { title: "Profile", icon: <User size={20} />, link: "/profile" },
    ],
    teacher: [
      { title: "Dashboard", icon: <LayoutDashboard size={20} />, link: "/teacher-dashboard" },
      { title: "My Courses", icon: <BookOpen size={20} />, link: "/my-courses" },
      { title: "Create Course", icon: <BookOpen size={20} />, link: "/create-course" },
      { title: "Manage Uploads", icon: <Upload size={20} />, link: "/manage-uploads" },
      { title: "Updates", icon: <Bell size={20} />, link: "/teacher-updates" },
      { title: "Profile", icon: <User size={20} />, link: "/profile" },
    ],
  };

  return (
    <aside
      className={`min-h-screen bg-blue-700 text-white flex flex-col
      transition-all duration-300
      ${isOpen ? "w-64" : "w-16"}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-5">
        {isOpen && (
          <Link to="/teacher-dashboard" className="text-2xl font-bold">
            LMS
          </Link>
        )}

        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={22} /> : <MenuIcon size={22} />}
        </button>
      </div>

      {/* Menu */}
      <ul className="flex-1 space-y-2 px-2">
        {menuItems[userType].map((item, idx) => (
          <li key={idx}>
            <Link
              to={item.link}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg
              hover:bg-blue-600 transition-colors
              ${!isOpen && "justify-center"}`}
              title={!isOpen ? item.title : ""}
            >
              {item.icon}
              {isOpen && <span className="whitespace-nowrap">{item.title}</span>}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
