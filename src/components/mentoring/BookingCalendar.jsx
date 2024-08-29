
import React, { useState } from "react";

const BookingCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setSelectedTime(null);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleBooking = () => {
    if (selectedDate && selectedTime) {
      console.log(`Booking confirmed for ${selectedDate} at ${selectedTime}`);
      // Implement booking logic here
    }
  };

  // Mock data for available dates and times
  const availableDates = ["2023-06-01", "2023-06-02", "2023-06-03"];
  const availableTimes = ["09:00", "11:00", "14:00", "16:00"];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-2xl font-bold mb-4">Book a Session</h3>
      <div className="mb-4">
        <h4 className="text-lg font-semibold mb-2">Select a Date:</h4>
        <div className="flex space-x-2">
          {availableDates.map((date) => (
            <button
              key={date}
              onClick={() => handleDateSelect(date)}
              className={`px-4 py-2 rounded ${
                selectedDate === date ? "bg-blue-600 text-white" : "bg-gray-200"
              }`}
            >
              {date}
            </button>
          ))}
        </div>
      </div>
      {selectedDate && (
        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2">Select a Time:</h4>
          <div className="flex space-x-2">
            {availableTimes.map((time) => (
              <button
                key={time}
                onClick={() => handleTimeSelect(time)}
                className={`px-4 py-2 rounded ${
                  selectedTime === time
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200"
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      )}
      <button
        onClick={handleBooking}
        disabled={!selectedDate || !selectedTime}
        className={`mt-4 px-6 py-2 rounded-lg ${
          selectedDate && selectedTime
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        } transition duration-300`}
      >
        Confirm Booking
      </button>
    </div>
  );
};

export default BookingCalendar;
