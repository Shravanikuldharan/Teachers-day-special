import React from "react";
import { Gift, Sparkles, Heart } from "lucide-react";

function AboutPage() {
  return (
    <section id="about" className="py-12 sm:py-20 px-2 sm:px-6 w-full bg-[#f8e7f6]">
      <div className="max-w-2xl sm:max-w-3xl md:max-w-5xl mx-auto text-center">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-[#4b164c] mb-6 sm:mb-8">
          Why We Celebrate Teachers’ Day
        </h2>
        <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed mb-8 sm:mb-12">
          Teachers’ Day is a heartfelt tribute to the guiding lights of our lives. 
          It’s a day to honor their wisdom, dedication, and the positive impact they 
          leave on generations. Beyond academics, teachers inspire us with values 
          that shape our future.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
          {[
            { icon: Gift, title: "Gratitude", desc: "A day to thank our mentors for their constant support, patience, and dedication." },
            { icon: Sparkles, title: "Inspiration", desc: "Teachers inspire us not just in academics, but also in life lessons and values." },
            { icon: Heart, title: "Respect", desc: "Celebrating the invaluable role of teachers in shaping individuals and society." },
          ].map((item, idx) => (
            <div key={idx} className="p-4 sm:p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2">
              <div className="text-[#dd88cf] mb-2 sm:mb-4 flex justify-center">
                <item.icon size={40} />
              </div>
              <h3 className="text-base sm:text-xl font-semibold text-[#4b164c] mb-1 sm:mb-2">{item.title}</h3>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default AboutPage;