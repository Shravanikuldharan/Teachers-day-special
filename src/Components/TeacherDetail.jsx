import { ArrowLeft, X, Gift, Heart, Sparkles } from "lucide-react";
import teachers from "../Config/teachers";

function TeacherDetail({ teacher, onBack, showSurprise, setShowSurprise }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f5f5f5] p-4 sm:p-6">
      <div className="p-4 sm:p-8 bg-white rounded-3xl shadow-xl text-center max-w-xs sm:max-w-md md:max-w-xl animate-fade relative w-full">
        <img
          src={teacher.img}
          alt={teacher.name}
          className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-cover rounded-full mx-auto mb-6 shadow-lg border-4 border-[#dd88cf] transition-transform duration-300 hover:scale-105"
        />
        <h2 className="text-2xl sm:text-3xl font-bold text-[#4b164c] mb-4">
          {teacher.name}
        </h2>
        <p className="text-gray-700 italic text-base sm:text-lg leading-relaxed mb-6">
          “{teacher.wish}”
        </p>

        <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-8">
          {teacher.qualities.map((quality, index) => (
            <span
              key={index}
              className="px-3 py-1.5 sm:px-4 sm:py-2 bg-[#f8e7f6] text-[#4b164c] font-medium rounded-full shadow-sm hover:bg-[#dd88cf] transition text-xs sm:text-sm"
            >
              {quality}
            </span>
          ))}
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => setShowSurprise(true)}
            className="px-4 sm:px-6 py-2.5 sm:py-3 cursor-pointer bg-gradient-to-r from-[#dd88cf] to-[#4b164c] text-white rounded-xl shadow-md hover:opacity-90 transition flex items-center gap-2 text-sm sm:text-base"
          >
            <Gift size={20} /> Open Surprise Card
          </button>
        </div>
      </div>

      <div className="mt-4 sm:mt-6 flex justify-center">
        <button
          onClick={onBack}
          className="flex items-center cursor-pointer gap-2 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm bg-[#dd88cf] text-white rounded-lg shadow-md hover:opacity-90 transition"
        >
          <ArrowLeft size={16} /> Back
        </button>
      </div>

      {showSurprise && (
        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm bg-black/20 px-2">
          <div className="bg-white p-4 sm:p-8 rounded-3xl shadow-2xl max-w-xs sm:max-w-md md:max-w-lg text-center relative animate-fade border-4 border-[#4b164c] w-full">
            <button
              onClick={() => setShowSurprise(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
            <h3 className="text-xl sm:text-2xl font-bold text-[#4b164c] mb-4 flex items-center justify-center gap-2">
              <Sparkles className="text-[#dd88cf]" size={26} />
              A Special Surprise for You
              <Sparkles className="text-[#dd88cf]" size={26} />
            </h3>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Dear {teacher.name},<br />
              You have touched our hearts, shaped our minds, and inspired our dreams.
              On this Teachers’ Day, we all want to say a big{" "}
              <span className="font-bold text-[#DD88CF]">THANK YOU</span> for being the guiding
              light in our journey.
            </p>
            <p className="mt-4 text-[#4b164c] font-semibold flex items-center justify-center gap-2 text-sm sm:text-base">
              With love & respect <Heart className="text-[#DD88CF]" size={20} /> 
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default TeacherDetail;