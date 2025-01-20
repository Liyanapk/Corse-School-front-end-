export default function Category() {
  const categories = [
    "MEARN",
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

  const categories2 = [
    "DEVOPS",
    "ANDROID",
    "ANGULAR",
    "LARAVEL",
    "JAVA",
    "MEARN",
    "AI",
    "ML",
    "FLUTTER",
    "PYTHON",
    "C#",
 
  ];

  // Divide categories into rows (3 rows total)
  const row1 = categories
  const row2 = categories2
  const row3 = categories

  return (
    <div className="flex flex-col justify-center items-start my-32">
      {/* First Row: Moves left to right continuously */}
      <div className="relative w-full max-w-[800px] mt-8">
        <div className="flex animate-loopLeft w-full gap-7">
          {[...row1, ...row1].map((category, index) => (
            <div
              className="bg-[#ddd] shadow-[0_0_15px_2px_rgba(0,0,0,0.2)] px-12 py-4 rounded-full text-base text-gray-700 cursor-pointer transition-transform duration-200 hover:bg-[#4f24b4c5] hover:text-white hover:scale-110"
              key={index}
            >
              {category}
            </div>
          ))}
        </div>
      </div>

      {/* Second Row: Moves left to right continuously */}
      <div className="relative w-full max-w-[800px] mt-8">
        <div className="flex animate-loopLeft w-full gap-7">
          {[...row2, ...row2].map((category, index) => (
            <div
              className="bg-slate-300 shadow-[0_0_15px_2px_rgba(0,0,0,0.2)] px-12 py-4 rounded-full text-base text-gray-700 cursor-pointer transition-transform duration-200 hover:bg-[#4f24b4c5] hover:text-white hover:scale-110"
              key={index}
            >
              {category}
            </div>
          ))}
        </div>
      </div>

      {/* Third Row: Moves left to right continuously */}
      <div className="relative w-full max-w-[1400px] mt-8">
        <div className="flex animate-loopLeft w-full gap-7">
          {[...row3, ...row3].map((category, index) => (
            <div
              className="bg-slate-600 shadow-[0_0_15px_2px_rgba(0,0,0,0.2)] px-12 py-4 rounded-full text-base text-white cursor-pointer transition-transform duration-200 hover:bg-[#4f24b4c5] hover:text-white hover:scale-110"
              key={index}
            >
              {category}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
