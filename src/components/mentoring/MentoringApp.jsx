
import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import MentorSearch from "./MentorSearch";
import MentorList from "./MentorList";
import BookingCalendar from "./BookingCalendar";
import VideoCall from "./VideoCall";
import Footer from "./Footer";

const MentoringApp = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <MentorSearch />
        <MentorList />
        <div className="container mx-auto py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <BookingCalendar />
            <VideoCall />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};


export default MentoringApp;


