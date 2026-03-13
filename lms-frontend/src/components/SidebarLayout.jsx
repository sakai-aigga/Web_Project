import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";

export default function SidebarLayout() {
    const [userType, setUserType] = useState("teacher");

    useEffect(() => {
        const savedType = localStorage.getItem("userType");
        if (savedType) {
            setUserType(savedType);
        }
    }, []);

    return (
        <div className="flex min-h-screen bg-gray-50">
            <Sidebar userType={userType} />
            <main className="flex-1 overflow-x-hidden">
                <Outlet />
            </main>
        </div>
    );
}
