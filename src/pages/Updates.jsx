import Sidebar from "../components/Sidebar";
import { ExternalLink, Bell } from "lucide-react";


export default function Updates () {
    return(

        <div className="flex min-h-screen bg-gray-200">
            <Sidebar />
            {/* Hero Header */}
            <div className="flex flex-col p-6">
                <p className="text-2xl font-bold ">Updates and Notifications</p>
                {/* Notification Lists */}
                <div className="bg-gray-50 rounded-sm mt-6 min-w-lvg p-4 space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                        <Bell className="size-4 text-gray-600" />
                        <span>2 Students have submitted their Assignments.</span>
                        </div>
                        <ExternalLink className="size-4 ml-6" />
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                        <Bell className="size-4 text-gray-600" />
                        <span>5 Students have pending Assignments.</span>
                        </div>
                        <ExternalLink className="size-4 ml-6" />
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                        <Bell className="size-4 text-gray-600" />
                        <span>
                            You have 2 new notifications from Sajin (BTech 5th Semester).
                        </span>
                        </div>
                        <ExternalLink className="size-4 ml-6" />
                    </div>
                </div>

            </div>
        </div>
    );
}