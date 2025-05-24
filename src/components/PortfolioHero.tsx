
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

const PortfolioHero = () => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-blue-50 pt-16">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1494790108755-2616b612b1e5" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="pulse-chip mb-4">
              <span>UI/UX Designer</span>
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 text-gray-900 animate-fade-in stagger-1">
            Creating Digital Experiences That{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Inspire
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8 animate-fade-in stagger-2">
            I'm a passionate UI/UX designer with 5+ years of experience crafting user-centered 
            digital solutions that bridge the gap between beautiful design and seamless functionality.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in stagger-3">
            <Button className="button-primary group">
              View My Work
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" className="button-secondary group">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>
          
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto animate-fade-in stagger-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">50+</div>
              <div className="text-gray-600 text-sm">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">5+</div>
              <div className="text-gray-600 text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">20+</div>
              <div className="text-gray-600 text-sm">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHero;
