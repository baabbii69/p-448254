
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

interface Project {
  title: string;
  description: string;
  image: string;
  category: string;
  tools: string[];
  slug: string;
  link: string;
  github: string;
  hasCaseStudy: boolean;
}

const projects: Project[] = [
  {
    title: "E-commerce Mobile App",
    description: "Complete redesign of a fashion e-commerce platform focusing on user journey optimization and conversion rate improvement.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
    category: "Mobile Design",
    tools: ["Figma", "Protopie", "Principle"],
    slug: "ecommerce-mobile-app",
    link: "#",
    github: "#",
    hasCaseStudy: true
  },
  {
    title: "SaaS Dashboard",
    description: "Intuitive analytics dashboard for a B2B SaaS platform with complex data visualization and real-time updates.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    category: "Web Design",
    tools: ["Sketch", "InVision", "Zeplin"],
    slug: "saas-dashboard",
    link: "#",
    github: "#",
    hasCaseStudy: true
  },
  {
    title: "Healthcare App",
    description: "Patient management system designed for healthcare professionals with emphasis on accessibility and efficiency.",
    image: "https://cdn.dribbble.com/userupload/14209812/file/original-82c573b7724a7f65a9d4d42f38efe7fc.jpg?resize=1504x1128&vertical=center",
    category: "Mobile Design",
    tools: ["Figma", "Adobe XD", "Maze"],
    slug: "healthcare-app",
    link: "#",
    github: "#",
    hasCaseStudy: true
  },
  {
    title: "Banking Platform",
    description: "Modern digital banking interface with focus on security, trust, and seamless financial transactions.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3",
    category: "Web Design",
    tools: ["Figma", "Framer", "Lottie"],
    slug: "banking-platform",
    link: "#",
    github: "#",
    hasCaseStudy: false
  },
  {
    title: "Harambee E-Student Mobile App",
    description: "Mobile app for students to access educational resources and services.",
    image: "https://i.imgur.com/MlOCdnj.jpeg",
    category: "Mobile Design",
    tools: ["Figma"],
    slug: "harambee-student-app",
    link: "https://www.figma.com/design/HnGZTy1LN1w3OFl81XBzhx/Harambee-E-Student-Mobile-App?node-id=0-1&t=CwPSx8xOi5q8bTGm-1",
    github: "#",
    hasCaseStudy: false
  }
];

const ProjectsSection = () => {
  const navigate = useNavigate();

  const handleViewCaseStudy = (slug: string) => {
    if (!slug) {
      console.error('Invalid project slug');
      return;
    }
    navigate(`/case-study/${slug}`);
  };

  const navigateToCaseStudy = (slug: string) => {
    if (!slug) {
      console.error('Invalid project slug');
      return;
    }
    window.location.href = `/case-study/${slug}`;
  };

  return (
    <section className="w-full py-20 bg-white" id="projects">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="pulse-chip mb-4 inline-block">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">01</span>
            <span>Featured Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6">Selected Projects</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A showcase of my recent work across various industries and platforms,
            demonstrating user-centered design solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-on-scroll">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden shadow-elegant transition-transform duration-300 ease-out hover:shadow-lg hover:-translate-y-1">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 ease-out group-hover:scale-102"
                  loading="lazy"
                  style={{
                    willChange: 'transform, opacity',
                    backfaceVisibility: 'hidden',
                  }}
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-gray-800">
                    {project.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map((tool, toolIndex) => (
                    <span key={toolIndex} className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-700">
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.hasCaseStudy && (
                    <Button
                      variant="default"
                      size="sm"
                      className="flex-1 bg-pulse-500 hover:bg-pulse-600 text-white"
                      onClick={() => navigateToCaseStudy(project.slug)}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Case Study
                    </Button>
                  )}
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onClick={() => window.open(project.link, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
