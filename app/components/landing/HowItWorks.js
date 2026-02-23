export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Choose Your Skill",
      description: "Browse 50+ skill templates from React development to data analysis. Or tell us what you want to learn.",
      icon: "���"
    },
    {
      number: "02",
      title: "AI Generates Your Curriculum",
      description: "Our AI creates a personalized learning path based on your goals, experience level, and available time.",
      icon: "���"
    },
    {
      number: "03",
      title: "Learn & Build with AI Mentor",
      description: "Start learning with interactive lessons. Your AI mentor guides you through projects and answers questions 24/7.",
      icon: "���"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From zero to skilled in three simple steps. No complicated setup, no confusion.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              
              {/* Connecting Line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 left-1/2 w-full h-0.5 bg-gradient-to-r from-purple-300 to-pink-300 -z-10"></div>
              )}

              {/* Step Card */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow">
                
                {/* Step Number */}
                <div className="text-6xl font-bold text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text mb-4">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-4xl">{step.icon}</span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">Ready to start your learning journey?</p>
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition shadow-lg">
            Get Started Now - It's Free
          </button>
        </div>

      </div>
    </section>
  );
}
