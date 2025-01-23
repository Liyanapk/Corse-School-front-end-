export default function Category() {
  const categories = [
    "MERN",
    "AI",
    "ML",
    "FLUTTER",
    "PYTHON",
    "C#",
    "DEVOPS",
    "ANDROID",
    "ANGULAR",
    "LARAVEL",
    "JAVA",
    "RUBY"
  ];

  return (
    <div>
      <h2 className="text-blue-800 text-3xl font-bold mb-8 flex flex-col items-center justify-center my-16 w-full">
        Explore Categories
      </h2>
      <div className="flex flex-col items-center justify-center my-16 w-full rounded-xl py-16 ">
        {/* Container for animated categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-[1200px] relative">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-indigo-300 via-purple-300 to-pink-400 shadow-lg px-10 py-4 rounded-full text-gray-700 text-center font-semibold cursor-pointer transition-all duration-500
              animate-bounceIn
              hover:scale-110 hover:shadow-2xl hover:bg-purple-600 hover:text-white`}
              style={{
                animationDelay: `${index * 0.2}s`, // staggered animation for categories
              }}
            >
              {category}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
