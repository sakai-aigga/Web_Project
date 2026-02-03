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
                <div className="flex flex-col px-6 pb-6 max-w-lvw bg-gray-50 rounded-lg">
                    <div className="pt-4">
                        <p>Your current Username:</p>
                        <p>Your current Email:</p>
                    </div>
                    <div className="flex flex-col pt-4 gap-4">
                        <Input icon={<User />} placeholder={"Enter new name"} />
                        <Input icon={<Mail />} placeholder={"Enter new email"} />
                    </div>
                    <div>
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
              
        </div>
    );
}