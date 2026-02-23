'use client';
import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How is this different from Udemy or Coursera?",
      answer: "Traditional platforms offer pre-recorded courses that don't adapt to you. LearnWithAI generates a personalized curriculum based on YOUR goals, experience, and pace. Plus, you get an AI mentor that answers YOUR specific questions 24/7 - not just generic Q&A forums."
    },
    {
      question: "Do I need any prior coding experience?",
      answer: "Absolutely not! Our AI adapts to complete beginners. Whether you're starting from zero or already have some experience, the curriculum adjusts to your level. We've had liberal arts majors become developers and career switchers land their first tech jobs."
    },
    {
      question: "How long does it take to complete a skill?",
      answer: "It depends on the skill and your pace. Most users complete a skill in 4-12 weeks with 5-10 hours per week. The beauty of AI-powered learning is that fast learners can speed through, while those who need more time get extra support automatically."
    },
    {
      question: "Can I really learn to code with AI help?",
      answer: "Yes! Our AI doesn't just give you answers - it teaches you to think like a developer. It breaks down complex concepts, provides instant feedback on your code, and guides you through debugging. Think of it as a patient tutor who never gets tired of your questions."
    },
    {
      question: "What if I get stuck or have questions?",
      answer: "Your AI mentor is available 24/7 in the chat interface. Ask anything - from 'what's a variable?' to 'why isn't my React component rendering?'. Unlike human tutors, there's no waiting, no judgment, and unlimited questions included in your plan."
    },
    {
      question: "Are the certificates recognized by employers?",
      answer: "Our certificates show completion and mastery of practical skills through projects. While they're not accredited like university degrees, they demonstrate hands-on experience which is what employers care about. Many of our users showcase them on LinkedIn and in job applications successfully."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes! No contracts, no commitments. Cancel with one click from your dashboard. If you're on Pro and cancel, you'll keep access until the end of your billing period. We also offer a 14-day money-back guarantee if you're not satisfied."
    },
    {
      question: "What skills can I learn?",
      answer: "We have 50+ skill templates covering: Web Development (React, Next.js, Node.js), Data Analysis (Python, SQL, Excel), Design (Figma, UI/UX), Marketing (SEO, Analytics), and more. Can't find your skill? Request a custom curriculum and our AI will create one for you."
    },
    {
      question: "How does the AI mentor work?",
      answer: "The AI mentor uses advanced language models (like Claude and GPT-4) trained on educational best practices. It understands context from your entire learning journey, remembers what you've learned, and adapts explanations to your level. It's like having a senior developer mentoring you personally."
    },
    {
      question: "Is there a community or support?",
      answer: "Yes! Free users get community support in our Discord. Pro users get priority email support with 24h response time. Enterprise users get a dedicated account manager. Plus, our AI mentor is always available - think of it as your personal 24/7 support system."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Got questions? We've got answers. Can't find what you're looking for?{' '}
            <a href="#" className="text-purple-600 hover:underline font-semibold">
              Contact us
            </a>
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-purple-200 transition-colors"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900 pr-8">
                  {faq.question}
                </span>
                <svg 
                  className={`w-6 h-6 text-purple-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Answer */}
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-8 pb-6 text-gray-700 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-16 text-center bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Our team is here to help. Get in touch and we'll respond within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition">
              Chat with Support
            </button>
            <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-50 transition border-2 border-gray-200">
              Schedule a Demo
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
