
import React, { useState } from "react";

const MentorSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality here
    console.log("Searching for:", searchTerm);
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Find Your Perfect Mentor
        </h2>
        <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
          <div className="flex">
            <input
              type="text"
              placeholder="Search by industry, skill, or job title"
              className="flex-grow px-4 py-2 rounded-l-lg border-t border-b border-l text-gray-800 border-gray-200 bg-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              type="submit"
              className="px-6 py-2 rounded-r-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition duration-300"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default MentorSearch;
