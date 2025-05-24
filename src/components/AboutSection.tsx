
import React from "react";

const AboutSection = () => {
  return (
    <section className="w-full py-20 bg-white" id="about">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <div className="pulse-chip mb-4">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">03</span>
                <span>About Me</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6">
                Passionate About Creating{" "}
                <span className="text-pulse-500">Meaningful</span> Experiences
              </h2>
              
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  I'm a UI/UX designer based in San Francisco with a passion for creating 
                  digital experiences that truly matter. My journey began in graphic design, 
                  but I quickly discovered my love for understanding user behavior and 
                  solving complex problems through design.
                </p>
                
                <p>
                  Over the past 5 years, I've had the privilege of working with startups 
                  and established companies across various industries, from fintech to 
                  healthcare, always with a focus on user-centered design principles.
                </p>
                
                <p>
                  When I'm not designing, you can find me exploring new coffee shops, 
                  hiking in the Bay Area, or experimenting with new design tools and 
                  emerging technologies.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Experience</h4>
                  <p className="text-gray-600">5+ Years in UI/UX Design</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Education</h4>
                  <p className="text-gray-600">B.A. in Design, Stanford University</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Location</h4>
                  <p className="text-gray-600">San Francisco, CA</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Availability</h4>
                  <p className="text-gray-600">Open for new opportunities</p>
                </div>
              </div>
            </div>
            
            <div className="animate-on-scroll">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1559526324-593bc073d938" 
                  alt="Design workspace" 
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-pulse-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  5+
                  <span className="text-sm ml-1">Years</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
