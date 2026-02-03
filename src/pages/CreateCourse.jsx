import Sidebar from "../components/Sidebar";
import Input from "../components/Input";

export default function CreateCourse() {
  return (
    <div className="flex min-h-screen bg-gray-200">
      <Sidebar />
      {/* Main content */}
      <div className="flex-1 p-10 flex">
        <div className="w-full max-w-full bg-white p-8 rounded-xl shadow-md">
            
          {/* Title */}
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            New Course
          </h2>

          {/* Form */}
          <div className="space-y-5">
            <Input placeholder="Course Name" />
            <Input placeholder="Course Code" />

            <textarea
              placeholder="Course Description"
              rows="4"
              className="w-full border rounded-lg p-3 outline-none"
            />

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg shadow">
              Create Course
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
