"use client";

import Image from "next/image";
import { useState } from "react";

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const features = [
    {
      title: "AI Resume Builder",
      description: "Create a professional resume tailored to your career goals using our AI-powered resume generator.",
      image: "/images/resume-builder.png",
    },
    {
      title: "The Interview Vault",
      description: "Excel in your interviews with expert-crafted Q&A across technical, behavioral, and industry topics.",
      image: "/images/interview-vault.png",
    },
    {
      title: "Roadmap",
      description: "Practice your interviewing skills with our structured interview roadmap and resources.",
      image: "/images/roadmap.png",
    },
  ];

  const testimonials = [
    {
      name: "Amit Verma",
      image: "/images/user-1.jpeg", 
      rating: 5,
      feedback: "InterviewAdda made my job search seamless and stress-free.",
    },
    {
      name: "Priya Sharma",
      image: "/images/user-2.jpeg",
      rating: 5,
      feedback: "The mock interviews boosted my confidence significantly.",
    },
    {
      name: "Rahul Iyer",
      image: "/images/user-3.jpg",
      rating: 5,
      feedback: "Fantastic platform for job seekers with excellent resources.",
    },
  ];
  

  return (
    <div className="text-gray-900">
      {/* Navbar */}
      <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
        <h1 className="text-2xl font-bold text-indigo-600">InterviewAdda</h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 justify-center space-x-6">
          <a href="#" className="hover:text-indigo-600">The Interview Vault</a>
          <a href="#" className="hover:text-indigo-600">Resume Generator</a>
          <a href="#" className="hover:text-indigo-600">Roadmap</a>
          <a href="#" className="hover:text-indigo-600">Mock Interview</a>
          <a href="#" className="hover:text-indigo-600">About Us</a>
        </nav>

        {/* Login / Signup */}
        <div className="hidden md:flex space-x-4">
          <button className="px-4 py-2 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-600 hover:text-white">
            Login
          </button>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
            Signup
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden w-10 h-10 flex items-center justify-center">
          <Image src={menuOpen ? "/images/close.svg" : "/images/menu.svg"} width={24} height={24} alt="Menu" />
        </button>
      </header>

      {/* Mobile Menu */}
      <nav className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform ${menuOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out md:hidden`}>
        <button onClick={toggleMenu} className="absolute top-4 right-4">
          <Image src="/images/close.svg" width={24} height={24} alt="Close" />
        </button>
        <ul className="mt-16 space-y-6 text-lg px-6">
        <li className="mt-4">
            <button className="w-full px-4 py-2 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-600 hover:text-white">
              Login
            </button>
          </li>
          <li>
            <button className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
              Signup
            </button>
          </li>
          <li><a href="#" className="block text-gray-900 hover:text-indigo-600">The Interview Vault</a></li>
          <li><a href="#" className="block text-gray-900 hover:text-indigo-600">Resume Generator</a></li>
          <li><a href="#" className="block text-gray-900 hover:text-indigo-600">Roadmap</a></li>
          <li><a href="#" className="block text-gray-900 hover:text-indigo-600">Mock Interview</a></li>
          <li><a href="#" className="block text-gray-900 hover:text-indigo-600">About Us</a></li>
          
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 bg-white gap-10  mt-12 md:mt-0">
        {/* Left Content */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6 mb-10 md:mb-0">
          <h2 className="text-5xl font-bold text-gray-900 leading-tight">
            Ace Your Interviews with <span className="text-indigo-600">InterviewAdda!</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Get ready with AI-powered resume building, The Interview Vault, structured roadmaps, and much more...
          </p>
          <button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700">
            Get Started
          </button>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 flex justify-center relative">
          <img
            src="/images/cover.jpg"
            alt="Interview Preparation"
            className="max-w-md sm:max-w-md md:max-w-sl lg:max-w-xl xl:max-w-2xl h-auto transform -translate-y-40 md:-translate-y-10"
          />
        </div>
      </section>


      {/* Unique Features */}
      <section className="text-center py-10">
        <h2 className="text-3xl font-bold text-gray-900">Unique Features</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-20">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-white shadow-lg rounded-lg">
             
              <div className="w-full flex justify-center">
                <img src={feature.image} alt={feature.title} className="w-35 h-35 object-contain" />
              </div>
              <h3 className="text-xl font-semibold mt-4">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-30 px-6">
        <div className="bg-indigo-100 bg-opacity-20 p-8 rounded-lg max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold">Start Your Journey Today!</h2>
          <p className="mt-4 text-gray-600">
            Sign up now for exclusive early access to InterviewAdda and unlock your potential with tailored interview preparation resources.
          </p>
          <button className="mt-6 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700">
            Join Now
          </button>
        </div>
      </section>


      {/* Testimonial Section */}
        <section className="text-center py-10">
          <h2 className="text-3xl font-bold text-gray-900">Hear from our awesome users!</h2>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-20">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-gray-300"
                />
                <h3 className="text-lg font-semibold mt-3">{testimonial.name}</h3>
                <div className="flex mt-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <img key={i} src="/images/star.png" alt="⭐" className="w-5 h-5 md:w-6 md:h-6" />
                  ))}
                </div>
                <p className="mt-3 text-gray-600 text-sm md:text-base text-center">{testimonial.feedback}</p>
              </div>
            ))}
          </div>
        </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 mt-20">
        <div className="container mx-auto px-6 md:px-20">
          {/* Footer Links */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6  md:ml-32 sm:ml-0 text-center md:text-left  ">
            <div>
              <h3 className="text-lg font-bold text-white">Product</h3>
              <ul className="mt-2 space-y-2 text-gray-400">
                <li><a href="#">Features</a></li>
                <li><a href="#">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Resources</h3>
              <ul className="mt-2 space-y-2 text-gray-400">
                <li><a href="#">Blog</a></li>
                <li><a href="#">User guides</a></li>
                <li><a href="#">Webinars</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Company</h3>
              <ul className="mt-2 space-y-2 text-gray-400">
                <li><a href="#">About us</a></li>
                <li><a href="#">Contact us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Plans & Pricing</h3>
              <ul className="mt-2 space-y-2 text-gray-400">
                <li><a href="#">Personal</a></li>
                <li><a href="#">Start up</a></li>
                <li><a href="#">Organization</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="text-center mt-10">
            <h2 className="text-2xl font-bold">InterviewAdda</h2>
            <p className="mt-2 text-gray-400">Subscribe to our newsletter</p>
            <div className="mt-4 flex justify-center">
              <input type="email" placeholder="Enter your email" className="px-4 py-2 rounded-l-md border-none outline-none" />
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-r-md">Subscribe</button>
            </div>
          </div>

          {/* Bottom Links */}
          <div className="mt-10 flex justify-center space-x-8 text-gray-400 text-sm">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
