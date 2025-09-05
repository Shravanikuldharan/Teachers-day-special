import React from "react";
function TeacherCard({ teacher, onSelect }) {
  return (
    <div className="relative p-4 sm:p-6 bg-white rounded-3xl shadow-lg border-2 border-transparent hover:border-[#dd88cf] transition transform hover:-translate-y-2">
      <div className="flex flex-col items-center">
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mb-4">
          <img
            src={teacher.img}
            alt={teacher.name}
            className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-cover rounded-full border-2 border-[#4b164c] shadow-md transition-transform duration-500 group-hover:scale-110 group-hover:shadow-xl"
          />
        </div>
        <h2 className="text-lg sm:text-xl font-semibold text-[#4b164c] mb-2 sm:mb-3">
          {teacher.name}
        </h2>
        <button
          onClick={() => onSelect(teacher)}
          className="px-3 sm:px-4 py-1.5 sm:py-2 cursor-pointer bg-gradient-to-r from-[#dd88cf] to-[#4b164c] text-white rounded-lg hover:opacity-90 transition shadow-md text-xs sm:text-sm"
        >
          Peek Inside!
        </button>
      </div>
    </div>
  );
}
export default TeacherCard;
