const Nav = () => {
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-white shadow">
      {/* Logo / Brand */}
      <div className="text-xl font-bold">
        <a href="/homepage" className= "text-blue-600">
          LMS
        </a>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center gap-6">
        <a href="/homepage" className="text-gray-600 hover:text-black">
          Home
        </a>
        <a href="#" className="text-gray-600 hover:text-black">
          About
        </a>
        <a href="#" className="text-gray-600 hover:text-black">
          Contact
        </a>
      </div>

      {/* Action Button */}
      <div className="flex gap-3">
      <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        <a href="/login">
          Login
        </a>
      </button>
      <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        <a href="/signup">
          Sign Up
        </a>
      </button>
      </div>
    </div>
  );
};

export default Nav;
