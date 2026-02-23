import Navbar from './components/Navbar';
import Features from './components/landing/Features';
import HowItWorks from './components/landing/HowItWorks';
import Pricing from './components/landing/Pricing';
import Testimonials from './components/landing/Testimonials';
import FAQ from './components/landing/FAQ';
import CTA from './components/landing/CTA';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 flex items-center justify-center pt-16 px-4">
        <div className="text-center max-w-4xl">
          
          {/* Icon */}
          <div className="mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl mx-auto flex items-center justify-center shadow-2xl">
              <span className="text-5xl">📚</span>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6">
            Master Any Skill with
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> AI Mentorship</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
            From data analysis to React development, learn faster with personalized AI-powered curriculum and interactive mentorship. Your personal AI mentor available 24/7.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition shadow-lg">
              Start Learning Free
            </button>
            <button className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 transition border-2 border-gray-200">
              See How It Works
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-8 border-t border-gray-200">
            <div>
              <p className="text-3xl font-bold text-gray-900">50+</p>
              <p className="text-sm text-gray-600">Skill Templates</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">1000+</p>
              <p className="text-sm text-gray-600">Students</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">4.9⭐</p>
              <p className="text-sm text-gray-600">Average Rating</p>
            </div>
          </div>

        </div>
      </section>

      <Features />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}
