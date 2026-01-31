export default function Input({ icon, type = "text", placeholder }) {
    return (
        <div className="flex items-center gap-3 border rounded-lg px-3 py-2">
            <span className="text-gray-400">{icon}</span>
            <input
                type={type}
                placeholder={placeholder}
                className="w-full outline-none"
            />
        </div>
    );
}

