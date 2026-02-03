import Sidebar from "../components/Sidebar";
import Input from "../components/Input";
import { Mail, User } from "lucide-react";


export default function ShowProfile () {
    return (
        <div className="flex min-h-screen bg-gray-200">
              <Sidebar />
              {/* Main content */}
              <div className="p-6 flex flex-col">
                <h1 className="text-2xl font-bold">Hello User,</h1>
                <br />
                <h1 className="font-semibold pb-3">You can edit your profile information here.</h1>
                {/* Edit Profile form */}
                <div className="p-4 max-w-lvw bg-gray-50 rounded-lg">
                    Your current Username:
                    <Input icon={<User />} placeholder={"Enter new name"} />
                    <br />
                    Your current Email:
                    <Input icon={<Mail />} placeholder={"Enter new email"} />
                    <button
                    className="w-50 mt-4 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl shadow text-center font-medium">
                        Save Changes
                    </button>
                    <button
                    className="ml-3 w-50 mt-4 bg-gray-300 hover:bg-gray-400 text-black py-3 rounded-xl shadow text-center font-medium">
                        Cancel
                    </button>
                </div>
                
              </div>
              
        </div>
    );
}