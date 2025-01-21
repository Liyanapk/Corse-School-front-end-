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
    <div className="flex flex-col items-center justify-center my-16 w-full rounded-xl  py-16 ">
      

      {/* Container for animated categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-[1200px] relative">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-400 shadow-lg px-10 py-4 rounded-full text-gray-700 text-center font-semibold cursor-pointer transition-transform duration-300 hover:scale-110 hover:shadow-xl hover:bg-purple-500 hover:text-white
              animate-fallDown animate-bounceRain`}
            style={{
              animationDelay: `${index * 0.5}s`, // staggered animation
              animationDuration: "2s", // timing for each item
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
