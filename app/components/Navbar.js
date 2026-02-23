'use client';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
              <span className="text-2xl">📚</span>
            </div>
            <span className="text-xl font-bold text-gray-900">LearnWithAI</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('features')} className="text-gray-600 hover:text-gray-900 transition">
              Features
            </button>
            <button onClick={() => scrollToSection('how-it-works')} className="text-gray-600 hover:text-gray-900 transition">
              How It Works
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-gray-600 hover:text-gray-900 transition">
              Pricing
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-gray-600 hover:text-gray-900 transition">
              FAQ
            </button>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full font-semibold hover:opacity-90 transition">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-600 hover:text-gray-900"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <button onClick={() => scrollToSection('features')} className="block text-gray-600 hover:text-gray-900 transition">
              Features
            </button>
            <button onClick={() => scrollToSection('how-it-works')} className="block text-gray-600 hover:text-gray-900 transition">
              How It Works
            </button>
            <button onClick={() => scrollToSection('pricing')} className="block text-gray-600 hover:text-gray-900 transition">
              Pricing
            </button>
            <button onClick={() => scrollToSection('faq')} className="block text-gray-600 hover:text-gray-900 transition">
              FAQ
            </button>
            <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full font-semibold hover:opacity-90 transition">
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}