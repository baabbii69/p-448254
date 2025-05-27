import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CaseStudyData {
  title: string;
  category: string;
  thumbnail: string;
  coverImage: string;
  tools: string[];
  overview: string;
  challenges: string[];
  solutions: Array<{
    title: string;
    description: string;
    image: string;
  }>;
  results: string[];
}

const caseStudies: Record<string, CaseStudyData> = {
  "ecommerce-mobile-app": {
    title: "E-commerce Mobile App",
    category: "Mobile Design",
    thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
    coverImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
    tools: ["Figma", "Protopie", "Principle"],
    overview: "Complete redesign of a fashion e-commerce platform focusing on user journey optimization and conversion rate improvement.",
    challenges: [
      "Improving user navigation and discovery",
      "Optimizing checkout flow for higher conversion rates",
      "Enhancing product visualization and comparison",
      "Creating a seamless mobile-first experience"
    ],
    solutions: [
      {
        title: "Streamlined Navigation",
        description: "Implemented a bottom tab navigation with quick access to key features, reducing user effort by 40%.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d"
      },
      {
        title: "Smart Product Discovery",
        description: "Created an AI-powered product recommendation system that increased average session duration by 35%.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d"
      },
      {
        title: "Optimized Checkout Flow",
        description: "Reduced checkout abandonment rate by 25% through a simplified, single-page checkout process.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d"
      }
    ],
    results: [
      "Increased conversion rate by 30%",
      "Reduced bounce rate by 25%",
      "Improved user satisfaction score by 40%",
      "Achieved 50% faster loading times"
    ]
  },
  "saas-dashboard": {
    title: "SaaS Dashboard",
    category: "Web Design",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    tools: ["Sketch", "InVision", "Zeplin"],
    overview: "Intuitive analytics dashboard for a B2B SaaS platform with complex data visualization and real-time updates.",
    challenges: [
      "Visualizing complex data in an intuitive way",
      "Creating real-time data updates without performance issues",
      "Designing for different user roles and permissions",
      "Ensuring scalability for future features"
    ],
    solutions: [
      {
        title: "Data Visualization",
        description: "Implemented interactive charts and graphs using D3.js for better data understanding.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
      },
      {
        title: "Real-time Updates",
        description: "Created a WebSocket-based system for instant data updates without page refresh.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
      },
      {
        title: "Role-based UI",
        description: "Designed dynamic layouts that adapt based on user permissions and roles.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
      }
    ],
    results: [
      "95% user satisfaction with data visualization",
      "Real-time updates with <100ms latency",
      "99.9% system uptime",
      "80% faster data loading times"
    ]
  },
  "healthcare-app": {
    title: "Healthcare App",
    category: "Mobile Design",
    thumbnail: "https://cdn.dribbble.com/userupload/14209812/file/original-82c573b7724a7f65a9d4d42f38efe7fc.jpg?resize=1504x1128&vertical=center",
    coverImage: "https://cdn.dribbble.com/userupload/14209812/file/original-82c573b7724a7f65a9d4d42f38efe7fc.jpg?resize=1504x1128&vertical=center",
    tools: ["Figma", "Adobe XD", "Maze"],
    overview: "Patient management system designed for healthcare professionals with emphasis on accessibility and efficiency.",
    challenges: [
      "Creating an accessible interface for all users",
      "Implementing HIPAA-compliant data handling",
      "Designing for various medical workflows",
      "Ensuring data privacy and security"
    ],
    solutions: [
      {
        title: "Accessible Design",
        description: "Implemented WCAG 2.1 compliant design with voice commands and screen reader support.",
        image: "https://cdn.dribbble.com/userupload/14209812/file/original-82c573b7724a7f65a9d4d42f38efe7fc.jpg?resize=1504x1128&vertical=center"
      },
      {
        title: "Secure Architecture",
        description: "Built a multi-layer security system with end-to-end encryption and regular audits.",
        image: "https://cdn.dribbble.com/userupload/14209812/file/original-82c573b7724a7f65a9d4d42f38efe7fc.jpg?resize=1504x1128&vertical=center"
      },
      {
        title: "Modular Workflow",
        description: "Created a flexible system that can be customized for different medical specialties.",
        image: "https://cdn.dribbble.com/userupload/14209812/file/original-82c573b7724a7f65a9d4d42f38efe7fc.jpg?resize=1504x1128&vertical=center"
      }
    ],
    results: [
      "98% user satisfaction with accessibility features",
      "100% HIPAA compliance achieved",
      "Reduced patient wait times by 45%",
      "Improved medical staff efficiency by 30%"
    ]
  }
};

const CaseStudy = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const caseStudy = caseStudies[id];

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Case Study Not Found</h2>
          <Button
            variant="outline"
            onClick={() => navigate('/projects')}
            className="px-6 py-2"
          >
            Back to Projects
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Back Button */}
      <div className="container px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate('/projects')}
            className="flex items-center hover:text-pulse-500 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Button>
          <div className="flex flex-col items-end">
            <h1 className="text-3xl sm:text-4xl font-display font-bold mb-2">{caseStudy.title}</h1>
            <span className="text-sm text-gray-500">{caseStudy.category}</span>
          </div>
        </div>
      </div>

      {/* Cover Image */}
      <div className="relative w-full h-[600px] overflow-hidden">
        <img
          src={caseStudy.coverImage}
          alt={caseStudy.title}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-white text-center mb-4">
            {caseStudy.title}
          </h2>
          <p className="text-xl text-white/90 max-w-2xl text-center">
            {caseStudy.overview}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container px-4 sm:px-6 lg:px-8 py-16">
        {/* Project Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-4">Project Overview</h3>
            <p className="text-gray-600 leading-relaxed">{caseStudy.overview}</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Tools & Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {caseStudy.tools.map((tool, index) => (
                <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Challenges */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6">Challenges</h3>
          <div className="space-y-4">
            {caseStudy.challenges.map((challenge, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-pulse-500/20 mr-4 mt-1"></div>
                <p className="text-gray-600">{challenge}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Solutions */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6">Solutions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudy.solutions.map((solution, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-bold mb-4">{solution.title}</h4>
                <p className="text-gray-600 mb-4">{solution.description}</p>
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-64 object-cover rounded-lg"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6">Results</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudy.results.map((result, index) => (
              <div key={index} className="flex items-center">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-pulse-500/20 mr-4"></div>
                <p className="text-gray-600">{result}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
