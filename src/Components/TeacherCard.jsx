import React from "react";

function TeacherCard({ teacher, onSelect }) {
  return (
    <div className="relative p-3 sm:p-5 bg-white rounded-2xl shadow-lg border border-transparent hover:border-[#dd88cf] transition transform hover:-translate-y-1 w-44 sm:w-52 md:w-60 mx-auto">
      <div className="flex flex-col items-center">
        <img
          src={teacher.img}
          alt={teacher.name}
          className="w-20 h-20 sm:w-20 sm:h-20 md:w-28 md:h-28 object-cover rounded-full border-2 border-[#4b164c] shadow-md transition-transform duration-500 group-hover:scale-110 group-hover:shadow-xl"
        />
        <h2 className="mt-3 text-base sm:text-lg font-semibold text-[#4b164c]">
          {teacher.name}
        </h2>
        <button
          onClick={() => onSelect(teacher)}
          className="mt-2 px-2.5 sm:px-4 py-1 sm:py-1.5 cursor-pointer bg-gradient-to-r from-[#dd88cf] to-[#4b164c] text-white rounded-lg hover:opacity-90 transition shadow-md text-xs sm:text-sm"
        >
          Peek Inside!
        </button>
      </div>
    </div>
  );
}

export default TeacherCard;
