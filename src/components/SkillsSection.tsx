
import React from "react";

const skills = [
  {
    category: "Design Tools",
    items: ["Figma", "Sketch", "Adobe Creative Suite", "Framer", "Principle", "ProtoPie"]
  },
  {
    category: "Research & Testing",
    items: ["User Interviews", "Usability Testing", "A/B Testing", "Maze", "Hotjar", "Google Analytics"]
  },
  {
    category: "Development",
    items: ["HTML/CSS", "JavaScript", "React", "Tailwind CSS", "Git", "Responsive Design"]
  },
  {
    category: "Methodology",
    items: ["Design Thinking", "Agile/Scrum", "Design Systems", "Accessibility", "Lean UX", "Design Sprints"]
  }
];

const SkillsSection = () => {
  return (
    <section className="w-full py-20 bg-gray-50" id="skills">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="pulse-chip mb-4 inline-block">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">02</span>
            <span>Skills & Tools</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6">
            My Toolkit
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A comprehensive set of skills and tools I use to bring ideas to life, 
            from initial research to final implementation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-on-scroll">
          {skills.map((skillGroup, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-elegant hover:shadow-elegant-hover transition-all duration-300">
              <h3 className="text-lg font-bold mb-4 text-gray-900">{skillGroup.category}</h3>
              <ul className="space-y-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-pulse-500 rounded-full mr-3"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Process Section */}
        <div className="mt-20 animate-on-scroll">
          <h3 className="text-2xl font-bold text-center mb-12">My Design Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { step: "01", title: "Research", desc: "Understanding users and business goals" },
              { step: "02", title: "Define", desc: "Synthesizing insights into clear problems" },
              { step: "03", title: "Ideate", desc: "Generating creative solutions" },
              { step: "04", title: "Prototype", desc: "Building and testing concepts" },
              { step: "05", title: "Iterate", desc: "Refining based on feedback" }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-pulse-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h4 className="font-semibold mb-2">{process.title}</h4>
                <p className="text-sm text-gray-600">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
