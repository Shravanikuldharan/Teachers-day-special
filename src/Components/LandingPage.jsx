import img4 from "../assets/hero-img.png";

function LandingPage() {
  return (
    <section className="min-h-[100vh] flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 md:px-16 gap-8 md:gap-12 w-full">
      <div className="flex-1 flex justify-center animate-slide-left w-full md:w-auto">
        <img
          src={img4}
          className="w-64 h-64 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] max-w-full max-h-[600px] rounded-2xl object-cover mx-auto"
        />
      </div>

      <div className="flex-1 text-center md:text-left animate-slide-right w-full md:w-auto">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#4b164c] drop-shadow-lg">
          <div className="mb-2 sm:mb-3.5">Happy</div> 
          <div>Teacher's</div>
          <div className="mt-2 sm:mt-3.5">Day!</div>
        </h1>
        <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-700 max-w-md sm:max-w-xl mx-auto md:mx-0">
          A special day to celebrate the mentors who shape our lives with wisdom and care.
        </p>
        <div className="mt-6 sm:mt-8 flex gap-4 sm:gap-6 justify-center md:justify-start">
          <a
            href="#teachers"
            className="px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-[#dd88cf] to-[#4b164c] text-white font-semibold rounded-full shadow-md hover:opacity-90 transition transform hover:scale-105 text-sm sm:text-base"
          >
            Meet Our Teachers
          </a>
          <a
            href="#about"
            className="px-4 sm:px-6 py-2.5 sm:py-3 bg-[#f8e7f6] text-[#4b164c] font-semibold rounded-full border border-[#dd88cf] shadow-md hover:opacity-90 transition transform hover:scale-105 text-sm sm:text-base"
          >
            About the Day
          </a>
        </div>
      </div>
    </section>
  );
}

export default LandingPage;