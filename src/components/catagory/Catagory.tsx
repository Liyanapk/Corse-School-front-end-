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
  ];

  return (
    <div className="flex flex-col items-center justify-center my-16 w-full bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-500 py-16">
      <h2 className="text-purple-800 text-3xl font-bold mb-8">
        Explore Categories
      </h2>

      {/* Animated Categories */}
      <div className="grid grid-cols-3 gap-6 max-w-[800px]">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`bg-zinc-200 shadow-lg px-10 py-4 rounded-full text-gray-700 text-center font-semibold cursor-pointer transition-transform duration-300 hover:scale-110 hover:shadow-xl hover:bg-purple-500 hover:text-white ${
              index % 2 === 0 ? "animate-bounceWave" : "animate-float"
            }`}
          >
            {category}
          </div>
        ))}
      </div>
    </div>
  );
}


