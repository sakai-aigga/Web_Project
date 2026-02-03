// import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import StudentDashboard from "./pages/StudentDashboard";
import TeacherDashboard from "./pages/TeacherDashboard";
import Home from "./pages/Homepage";
import CreateCourse from "./pages/CreateCourse"
import ShowProfile from "./pages/Profile";
import Courses from "./pages/MyCourses";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
        <Route path="/create-course" element={<CreateCourse />}></Route>
        <Route path="/profile" element={<ShowProfile />}></Route>
        <Route path="/my-courses" element={<Courses />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
