export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-purple-600 to-pink-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Icon */}
        <div className="mb-8">
          <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl mx-auto flex items-center justify-center">
            <span className="text-5xl">���</span>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Transform Your Career?
        </h2>
        
        {/* Subheading */}
        <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
          Join thousands of learners who've unlocked new skills and opportunities with AI-powered mentorship. Start your journey today - it's free!
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition shadow-lg">
            Start Learning for Free
          </button>
          <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition border-2 border-white/30">
            Watch Demo Video
          </button>
        </div>

        {/* Trust Badges */}
        <p className="text-white/80 text-sm">
          ✓ No credit card required  •  ✓ 14-day money-back guarantee  •  ✓ Cancel anytime
        </p>

      </div>
    </section>
  );
}
