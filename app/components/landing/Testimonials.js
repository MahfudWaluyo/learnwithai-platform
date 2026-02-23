export default function Testimonials() {
    const testimonials = [
      {
        name: "Sarah Chen",
        role: "Career Switcher → Data Analyst",
        avatar: "👩‍💻",
        content: "I went from zero coding knowledge to landing a data analyst job in 4 months. The AI mentor was like having a personal tutor available 24/7. Best investment I've made in my career.",
        rating: 5
      },
      {
        name: "Marcus Johnson",
        role: "Freelance Developer",
        avatar: "👨‍💼",
        content: "I've tried Udemy, Coursera, and traditional bootcamps. LearnWithAI is different - it adapts to MY pace and MY questions. Finally finished a React course without giving up halfway!",
        rating: 5
      },
      {
        name: "Priya Sharma",
        role: "Marketing Manager learning SQL",
        avatar: "👩‍🎓",
        content: "As a non-technical person, I was intimidated by SQL. The AI mentor broke down complex queries into simple steps. Now I can pull my own data without bothering the tech team.",
        rating: 5
      },
      {
        name: "Alex Rivera",
        role: "Student → Full-Stack Developer",
        avatar: "🧑‍💻",
        content: "The personalized curriculum saved me so much time. Instead of watching 40 hours of generic tutorials, I got a custom 12-week path focused exactly on what I needed to learn.",
        rating: 5
      },
      {
        name: "Jennifer Wu",
        role: "Product Designer learning to code",
        avatar: "👩‍🎨",
        content: "I never thought I could code. The AI was patient with my 'stupid' questions and explained things in a way that finally clicked. Now I can prototype my own designs!",
        rating: 5
      },
      {
        name: "David Kim",
        role: "Entrepreneur",
        avatar: "👨‍💼",
        content: "Instead of hiring a developer for $10k, I learned to build my MVP myself in 8 weeks. The AI helped me troubleshoot bugs faster than any StackOverflow search ever could.",
        rating: 5
      }
    ];
  
    return (
      <section className="py-24 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Loved by Learners Worldwide
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of people who've transformed their careers with AI-powered learning.
            </p>
          </div>
  
          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow border border-gray-100"
              >
                
                {/* Stars Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>
  
                {/* Testimonial Content */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
  
                {/* Author Info */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
  
              </div>
            ))}
          </div>
  
          {/* Bottom Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <p className="text-4xl font-bold text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text mb-2">
                4.9/5
              </p>
              <p className="text-gray-600">Average Rating</p>
              <p className="text-sm text-gray-500 mt-2">Based on 1,200+ reviews</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <p className="text-4xl font-bold text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text mb-2">
                87%
              </p>
              <p className="text-gray-600">Completion Rate</p>
              <p className="text-sm text-gray-500 mt-2">vs 15% industry average</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <p className="text-4xl font-bold text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text mb-2">
                2.5x
              </p>
              <p className="text-gray-600">Faster Learning</p>
              <p className="text-sm text-gray-500 mt-2">Compared to traditional courses</p>
            </div>
          </div>
  
        </div>
      </section>
    );
  }