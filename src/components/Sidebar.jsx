import {
  LayoutDashboard,
  BookOpen,
  Upload,
  User,
  FileText,
  Bell,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Sidebar({ userType = "teacher" }) {
  const [isExpanded, setIsExpanded] = useState(false);

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
    <>
      {/* Placeholder to reserve space in the flex layout */}
      <div className="w-20 flex-shrink-0 transition-all duration-300" />

      <aside
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
        className={`fixed top-0 left-0 h-full bg-blue-700 text-white flex flex-col z-50
        transition-all duration-300 ease-in-out shadow-xl
        ${isExpanded ? "w-64" : "w-20"}`}
      >
        {/* Header */}
        <div className={`flex items-center p-5 mb-4 ${isExpanded ? "justify-between" : "justify-center"}`}>
          <Link to="/teacher-dashboard" className="text-2xl font-bold flex items-center gap-2">
            <div className="bg-white text-blue-700 min-w-10 h-10 rounded-lg flex items-center justify-center font-black">
              L
            </div>
            {isExpanded && <span className="whitespace-nowrap">LMS</span>}
          </Link>
        </div>

        {/* Menu scrollable area */}
        <ul className="flex-1 space-y-2 px-3 overflow-y-auto overflow-x-hidden custom-scrollbar">
          {menuItems[userType].map((item, idx) => (
            <li key={idx}>
              <Link
                to={item.link}
                className={`flex items-center gap-4 px-3 py-3 rounded-xl
                hover:bg-blue-600 transition-all duration-200 group
                ${!isExpanded && "justify-center"}`}
                title={!isExpanded ? item.title : ""}
              >
                <div className={`transition-transform duration-200 ${!isExpanded && "group-hover:scale-110"}`}>
                  {item.icon}
                </div>
                {isExpanded && (
                  <span className="whitespace-nowrap font-medium animate-fadeIn">
                    {item.title}
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Footer / User info could go here */}
      </aside>
    </>
  );
}
