
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="w-full py-20 bg-gray-50" id="contact">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <div className="pulse-chip mb-4 inline-block">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">04</span>
              <span>Get In Touch</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6">
              Let's Work Together
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              I'm always excited to work on new projects and collaborate with amazing people. 
              Feel free to reach out if you'd like to discuss your next project.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-on-scroll">
              <div className="bg-white p-8 rounded-2xl shadow-elegant">
                <h3 className="text-2xl font-bold mb-6">Send me a message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name</label>
                      <Input placeholder="John" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name</label>
                      <Input placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input type="email" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <Input placeholder="Project Discussion" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea 
                      placeholder="Tell me about your project..."
                      className="min-h-[120px]"
                    />
                  </div>
                  <Button className="w-full button-primary">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="animate-on-scroll">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-pulse-100 rounded-full flex items-center justify-center mr-4">
                        <Mail className="w-5 h-5 text-pulse-500" />
                      </div>
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-gray-600">hello@example.com</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-pulse-100 rounded-full flex items-center justify-center mr-4">
                        <Phone className="w-5 h-5 text-pulse-500" />
                      </div>
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-gray-600">+1 (555) 123-4567</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-pulse-100 rounded-full flex items-center justify-center mr-4">
                        <MapPin className="w-5 h-5 text-pulse-500" />
                      </div>
                      <div>
                        <p className="font-medium">Location</p>
                        <p className="text-gray-600">San Francisco, CA</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold mb-4">Follow Me</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center hover:bg-pulse-500 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center hover:bg-pulse-500 transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center hover:bg-pulse-500 transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-purple-500 to-blue-600 p-6 rounded-2xl text-white">
                  <h4 className="text-xl font-bold mb-2">Ready to start a project?</h4>
                  <p className="mb-4 opacity-90">
                    I'm currently available for freelance work and new opportunities.
                  </p>
                  <Button variant="secondary" className="bg-white text-gray-900 hover:bg-gray-100">
                    Schedule a Call
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
