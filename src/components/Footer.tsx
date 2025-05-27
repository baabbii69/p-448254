
import React from "react";
import { Mail, Instagram, Twitter, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white py-16">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Newsletter Signup */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Stay Updated</h3>
            <p className="text-gray-600">
              Subscribe to my newsletter for updates on new projects and insights.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pulse-500"
              />
              <button className="px-6 py-2 bg-pulse-500 text-white rounded-lg hover:bg-pulse-600 transition-colors">
                Subscribe
              </button>
            </form>
          </div>

          {/* Social Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Connect with Me</h3>
            <div className="flex gap-6">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pulse-500 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pulse-500 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pulse-500 transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pulse-500 transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <div className="flex flex-col gap-4">
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-gray-600 hover:text-pulse-500 transition-colors cursor-pointer"
              >
                About
              </a>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-gray-600 hover:text-pulse-500 transition-colors cursor-pointer"
              >
                Projects
              </a>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-gray-600 hover:text-pulse-500 transition-colors cursor-pointer"
              >
                Skills
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-gray-600 hover:text-pulse-500 transition-colors cursor-pointer"
              >
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-12 border-t border-gray-100 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Yohanes Alemu. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
