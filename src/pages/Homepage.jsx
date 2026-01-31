import { Link } from "react-router-dom";
import { BookOpen, Users, FileText } from "lucide-react";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">

      {/* Navbar */}
        <Nav />

      {/* Hero */}
      <div className="flex-1 flex flex-col justify-center items-center text-center px-6">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">
          Simple Learning Management System
        </h2>

        <p className="text-gray-500 max-w-xl mb-8">
          Access courses, download notes, manage materials and track your learning easily.
        </p>

        <Link
          to="/login"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700"
        >
          Get Started
        </Link>
      </div>
      <br />

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10 pb-16">
        <Feature icon={<BookOpen size={28} />} title="Courses" desc="Access all your subjects easily" />
        <Feature icon={<FileText size={28} />} title="Notes" desc="Download learning materials anytime" />
        <Feature icon={<Users size={28} />} title="Teachers" desc="Connect with instructors quickly" />
      </div>
    </div>
  );
}


function Feature({ icon, title, desc }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow text-center">
      <div className="flex justify-center text-blue-600 mb-3">{icon}</div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-500">{desc}</p>
    </div>
  );
}
