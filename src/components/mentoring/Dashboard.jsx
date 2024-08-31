import React from "react";

const Dashboard = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Dashboard Header */}
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-3xl font-bold">Dashboard</h1>
      </header>

      {/* Main Dashboard Content */}
      <main className="flex-grow p-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* User Overview Card */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-2xl font-semibold mb-4">User Overview</h2>
              <p>Total Users: 120</p>
              <p>Active Users: 85</p>
            </div>

            {/* Mentor Analytics Card */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-2xl font-semibold mb-4">Mentor Analytics</h2>
              <p>Total Mentors: 40</p>
              <p>Sessions Today: 15</p>
            </div>

            {/* Booking Statistics Card */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-2xl font-semibold mb-4">Booking Statistics</h2>
              <p>Bookings This Week: 75</p>
              <p>Popular Times: 10 AM - 2 PM</p>
            </div>

            {/* Recent Activity Card */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-2xl font-semibold mb-4">Recent Activity</h2>
              <ul className="list-disc list-inside">
                <li>User John booked a session with Mentor Jane.</li>
                <li>Mentor Alex completed a session with User Emily.</li>
              </ul>
            </div>

            {/* Settings Card */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-2xl font-semibold mb-4">Settings</h2>
              <p>Profile Settings</p>
              <p>Notification Preferences</p>
            </div>
          </div>
        </div>
      </main>

      {/* Dashboard Footer */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>© 2024 MentoringApp. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Dashboard;
