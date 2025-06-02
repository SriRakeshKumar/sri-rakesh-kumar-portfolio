
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-orange-400 rounded-full opacity-80 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-yellow-400 rounded-full opacity-60"></div>
      <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-pink-400 rounded-full opacity-70"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="text-white space-y-8">
          <div className="space-y-4">
            <p className="text-orange-300 text-lg font-medium">Hello, I'm</p>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Sri Rakesh Kumar
            </h1>
            <h2 className="text-2xl lg:text-3xl text-blue-200 font-semibold">
              Full-Stack Developer
            </h2>
            <p className="text-xl text-blue-100 max-w-lg">
              Crafting scalable web solutions with React, Node.js, GraphQL & more.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              View Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-full font-semibold transition-all duration-300"
            >
              Contact Me
            </Button>
          </div>
        </div>

        {/* Profile Image Placeholder */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-orange-400 to-yellow-500 flex items-center justify-center shadow-2xl">
              <div className="w-72 h-72 lg:w-88 lg:h-88 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <span className="text-6xl lg:text-7xl text-white font-bold">RK</span>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-lg p-3 shadow-lg animate-bounce">
              <span className="text-2xl">👋</span>
            </div>
            <div className="absolute bottom-8 -left-8 bg-white rounded-lg p-4 shadow-lg">
              <p className="text-sm font-semibold text-gray-800">5+ Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
