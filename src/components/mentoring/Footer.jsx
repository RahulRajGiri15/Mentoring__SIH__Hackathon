
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">GuideWave</h3>
            <p>
              Connecting mentees with industry experts for career growth and
              success.
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul>
              <li>
                <a href="#" className="hover:text-blue-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-300">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-300">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-300">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-2">Connect With Us</h4>
            <ul>
              <li>
                <a href="#" className="hover:text-blue-300">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-300">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-300">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-300">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 GuideWave. All rights reserved.</p>
          <br />
          
          <p>&copy; Designed by Team DevDynamos</p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
