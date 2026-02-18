"use client"; // Memberitahu Next.js bahwa kita menggunakan interaksi (tombol, input)

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="text-center">
        {/* Logo / Icon */}
        <div className="mb-8">
          <div className="w-20 h-20 bg-indigo-600 rounded-2xl mx-auto flex items-center justify-center">
            <span className="text-4xl">🎓</span>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
          LearnWithAI
        </h1>
        
        {/* Tagline */}
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl">
          Master Any Skill with Your Personal AI Mentor
        </p>

        {/* Description */}
        <p className="text-lg text-gray-500 mb-12 max-w-xl mx-auto">
          From data analysis to React development, learn faster with personalized 
          AI-powered curriculum and interactive mentorship.
        </p>

        {/* Coming Soon Badge */}
        <div className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-semibold">
          Coming Soon 🚀
        </div>

        {/* Footer */}
        <p className="mt-12 text-sm text-gray-400">
          Built by a vibe coder with AI assistance
        </p>
      </div>
    </div>
  );
}