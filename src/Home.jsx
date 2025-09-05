import React, { useState } from "react";
import LandingPage from "./Components/LandingPage";
import TeacherCard from "./Components/TeacherCard";
import AboutPage from "./Components/AboutPage";
import TeacherDetail from "./Components/TeacherDetail";
import teachers from "./Config/teachers";


function Home() {
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [showSurprise, setShowSurprise] = useState(false);

  if (selectedTeacher) {
    return (
      <TeacherDetail
        teacher={selectedTeacher}
        onBack={() => setSelectedTeacher(null)}
        showSurprise={showSurprise}
        setShowSurprise={setShowSurprise}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex flex-col items-center">
      <LandingPage />

      <section id="teachers" className="py-12 sm:py-20 w-full max-w-6xl px-2 sm:px-4">
        <h2 className="text-2xl sm:text-4xl font-bold text-center text-[#4b164c] mb-8 sm:mb-14">
          Our Amazing Teachers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10">
          {teachers.map((teacher) => (
            <TeacherCard key={teacher.id} teacher={teacher} onSelect={setSelectedTeacher} />
          ))}
        </div>
      </section>

      <AboutPage />
    </div>
  );
}

export default Home;