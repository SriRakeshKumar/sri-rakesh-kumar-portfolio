import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollTo = (page: string) => {
    const projectsSection = document.getElementById(page);
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-16 md:pt-0"
    >
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800"></div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-4 md:left-10 w-16 h-16 md:w-20 md:h-20 bg-orange-400 rounded-full opacity-80 animate-pulse"></div>
      <div className="absolute bottom-20 right-4 md:right-10 w-12 h-12 md:w-16 md:h-16 bg-yellow-400 rounded-full opacity-60"></div>
      <div className="absolute top-1/2 right-1/4 w-8 h-8 md:w-12 md:h-12 bg-pink-400 rounded-full opacity-70"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Content */}
        <div className="text-white space-y-6 md:space-y-8 text-center lg:text-left order-2 lg:order-1">
          <div className="space-y-3 md:space-y-4">
            <p className="text-orange-300 text-base md:text-lg font-medium">
              Hello, I'm
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Sri Rakesh Kumar
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-blue-200 font-semibold">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-blue-200 font-semibold">
              Full-Stack Developer
            </h2>
            <p className="text-base md:text-xl text-blue-100 max-w-lg mx-auto lg:mx-0">
              Building scalable backend systems with Node.js, GraphQL,
              WebSockets plus modern UIs with React and robust data layers using
              SQL & MongoDB.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start p-1">
            <Button
              size="lg"
              onClick={() => scrollTo("projects")}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              View Projects
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollTo("contact")}
              className="border-2 border-white text-white hover:bg-white text-blue-600 px-8 py-3 rounded-full font-semibold transition-all duration-300"
            >
              Contact Me
            </Button>
          </div>
        </div>

        {/* Profile Image */}
        <div className="relative flex justify-center order-1 lg:order-2 lg:justify-end">
        <div className="relative flex justify-center order-1 lg:order-2 lg:justify-end">
          <div className="relative">
            <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-orange-400 to-yellow-500 flex items-center justify-center shadow-2xl p-2">
              <img
                src="https://i.postimg.cc/VNkYHP3X/Pic-2.png"
                alt="Sri Rakesh Kumar"
                className="w-full h-full rounded-full object-cover border-4 border-white/20"
              />
            </div>

            {/* Floating elements */}
            <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 bg-white rounded-lg p-2 md:p-3 shadow-lg animate-bounce">
              <span className="text-lg md:text-2xl">👋</span>
            <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 bg-white rounded-lg p-2 md:p-3 shadow-lg animate-bounce">
              <span className="text-lg md:text-2xl">👋</span>
            </div>
            <div className="absolute bottom-4 -left-4 md:bottom-8 md:-left-8 bg-white rounded-lg p-3 md:p-4 shadow-lg">
              <p className="text-xs md:text-sm font-semibold text-gray-800">
                1+ Years Experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
