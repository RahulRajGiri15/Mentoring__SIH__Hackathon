
import React from "react";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">GuideWave</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-blue-200">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-200">
                Find a Mentor
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-200">
                Become a Mentor
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-200">
                Login
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
