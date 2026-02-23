export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "0",
      period: "forever",
      description: "Perfect for exploring and trying out the platform",
      features: [
        "3 AI-generated curriculums per month",
        "Access to 10 basic skill templates",
        "Community support",
        "Basic progress tracking",
        "Limited AI mentor interactions (50/month)"
      ],
      cta: "Start Free",
      popular: false,
      gradient: "from-gray-600 to-gray-700"
    },
    {
      name: "Pro",
      price: "29",
      period: "month",
      description: "For serious learners who want unlimited access",
      features: [
        "Unlimited AI-generated curriculums",
        "Access to all 50+ skill templates",
        "Priority support (24h response)",
        "Advanced analytics & insights",
        "Unlimited AI mentor interactions",
        "Downloadable certificates",
        "Custom learning paths"
      ],
      cta: "Start Pro Trial",
      popular: true,
      gradient: "from-purple-600 to-pink-600"
    },
    {
      name: "Enterprise",
      price: "99",
      period: "month",
      description: "For teams and organizations",
      features: [
        "Everything in Pro",
        "Up to 10 team members",
        "Team progress dashboard",
        "Custom skill templates",
        "API access",
        "Dedicated account manager",
        "White-label option",
        "Priority feature requests"
      ],
      cta: "Contact Sales",
      popular: false,
      gradient: "from-indigo-600 to-purple-700"
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Start free, upgrade when you're ready. No hidden fees, cancel anytime.
          </p>
          
          {/* Toggle (Mock - we'll make it functional later) */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className="text-gray-600 font-semibold">Monthly</span>
            <button className="relative w-14 h-7 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full">
              <div className="absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform"></div>
            </button>
            <span className="text-gray-600">
              Yearly <span className="text-green-600 font-semibold">(Save 20%)</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-6">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative rounded-3xl p-8 ${
                plan.popular 
                  ? 'bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-300 shadow-2xl scale-105' 
                  : 'bg-white border-2 border-gray-200 shadow-lg'
              } hover:shadow-2xl transition-all duration-300`}
            >
              
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    ⭐ MOST POPULAR
                  </span>
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {plan.name}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-6 min-h-[48px]">
                {plan.description}
              </p>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold text-gray-900">${plan.price}</span>
                  <span className="text-gray-600 ml-2">/{plan.period}</span>
                </div>
              </div>

              {/* CTA Button */}
              <button 
                className={`w-full py-4 rounded-full font-semibold text-lg mb-8 transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:opacity-90 shadow-lg'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}
              >
                {plan.cta}
              </button>

              {/* Features List */}
              <div className="space-y-4">
                <p className="text-sm font-semibold text-gray-900 mb-4">What's included:</p>
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-16 space-y-4">
          <p className="text-gray-600">
            All plans include a <span className="font-semibold text-purple-600">14-day money-back guarantee</span>. No questions asked.
          </p>
          <p className="text-sm text-gray-500">
            Need a custom plan? <a href="#" className="text-purple-600 hover:underline font-semibold">Contact our sales team →</a>
          </p>
        </div>

      </div>
    </section>
  );
}
