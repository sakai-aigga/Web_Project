import Sidebar from "../components/Sidebar";
import { materials } from "../components/Uploads";
import { Trash2Icon} from "lucide-react";

export default function ManageUploads () {
    return (
        <div className="flex min-h-screen bg-gray-200">
            <Sidebar />
            {/* Page Contents */}
            <div className="flex flex-col p-6">
                {/* Hero Heading */}
                <div className="flex">
                    <p className="text-2xl font-bold">Uploads</p>
                    <button className="ml-50 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm shadow">
                    + Upload
                    </button>
                </div>
                {/* Materials */}
                <div className="mt-4 bg-white p-6 rounded-sm shadow-md">
                <div className="grid  gap-4">
                    {materials.map((file, index) => (
                    <div
                        key={index}
                        className="bg-gray-50 p-4 rounded-lg shadow hover:shadow-lg flex justify-between items-center"
                    >
                        <span className="text-gray-700">{file}</span>
                        <button className="bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded-lg text-sm shadow">
                        <Trash2Icon />
                        </button>
                    </div>
                    
                    ))}
                </div>
                </div>
            </div>
        </div>
    );
}