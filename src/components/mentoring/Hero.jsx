
import React from "react";

const Hero = () => {
  return (
    <section className="bg-blue-100 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">
          Connect with Industry Experts
        </h2>
        <p className="text-xl mb-8">
          Boost your career with personalized mentoring from experienced
          professionals
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300">
          Find a Mentor
        </button>
      </div>
    </section>
  );
};

export default Hero;
