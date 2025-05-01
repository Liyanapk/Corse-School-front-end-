export default function Category() {
  const categories = [
    "MERN",
    "AI",
    "ML",
    "Flutter",
    "Python",
    "C#",
    "DevOps",
    "Android",
    "Angular",
    "Laravel",
    "Java",
    "Ruby",
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-16 px-6">
      <h2 className="text-4xl font-extrabold text-gray-100 text-center mb-12 tracking-wide">
        Explore Categories
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`relative bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-700 text-white rounded-xl shadow-xl p-6 flex items-center justify-center overflow-hidden 
            animate-fall infinite`}
            style={{
              animationDelay: `${index * 0.5}s`, // Staggered delay for looping animation
            }}
          >
            {/* Sparkle Effect */}
            <div className="absolute inset-0 rounded-xl overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white via-transparent to-white opacity-10 rounded-xl animate-sparkle"></div>
            </div>

            {/* Category Text */}
            <h3 className="relative z-10 text-xl font-semibold tracking-wide">
              {category}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
