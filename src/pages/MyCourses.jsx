import { Globe, Book, Search } from "lucide-react";
import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";


export default function Courses () {
    return (
        <div className="flex min-h-screen bg-gray-200">
              <Sidebar />
              {/* Main content */}
              <div className="p-6 flex flex-col flex-wrap">
                <h1 className="text-2xl font-bold">Enroll Courses</h1>
                <br />
                <h1 className="font-semibold pb-3">Available Courses</h1>
                {/* {Courses available cards}*/}
                <div className="flex gap-6">
                    <div className="flex flex-col p-2 bg-blue-700 items-end rounded-lg">
                    <StatCard icon={<Globe />} title="ITEX 120" value="Web Engineering"/>
                    <button className="bg-white px-2 mx-4 mb-2 rounded-sm">Enroll</button>
                </div>
                <div className="flex flex-col p-2 bg-green-500 items-end rounded-lg">
                    <StatCard icon={<Book />} title="VPED 100" value="Instruction Design"/>
                    <button className="bg-white px-2 mx-4 mb-2 rounded-sm">Enroll</button>
                </div>
                <div className="flex flex-col p-2 bg-teal-800 items-end rounded-lg">
                    <StatCard icon={<Search />} title="EDU 120" value="Research Methodology"/>
                    <button className="bg-white px-2 mx-4 mb-2 rounded-sm">Enroll</button>
                </div>
            </div>
            {/* Enrolled Courses Listy */}
            <div className="flex flex-col bg-gray-50 mt-8 rounded-sm p-4">
                <p className="font-medium pb-4">Your Courses</p>
                <p className="">You haven't enrolled in any courses. Click Enroll on any above courses to continue.</p>
            </div>   
            </div>
        </div>
    );
}