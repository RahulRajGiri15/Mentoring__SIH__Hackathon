
import React from "react";

const mentors = [
  {
    id: 1,
    name: "Rahul Kumar Giri",
    expertise: "Software Engineering",
    availability: "Mon, Wed, Fri",
  },
  {
    id: 2,
    name: "Shaista Khan",
    expertise: "Data Science",
    availability: "Tue, Thu, Sat",
  },
  {
    id: 3,
    name: "Harsh Gupta",
    expertise: "Front-end Developer",
    availability: "Tue, Thu, sun ,Mon",
  },
  {
    id: 4,
    name: "Rashmi Nishad",
    expertise: "Data Analysis",
    availability: "Tue, Thu, Sat",
  },
  {
    id: 5,
    name: "Utkarsh Gupta",
    expertise: "Product Management",
    availability: "Mon, Tue, Wed",
  },
  {
    id: 6,
    name: "Mike Johnson",
    expertise: "Management",
    availability: "Mon, Tue, Wed",
  },
  {
    id: 7,
    name: "Shubham Gusain",
    expertise: "Leardership",
    availability: "Mon, Tue, Wed , Sat",
  },
];

const MentorList = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Available Mentors
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mentors.map((mentor) => (
            <div key={mentor.id} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">{mentor.name}</h3>
              <p className="text-gray-600 mb-2">
                Expertise: {mentor.expertise}
              </p>
              <p className="text-gray-600 mb-4">
                Available: {mentor.availability}
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                Book Session
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MentorList;
