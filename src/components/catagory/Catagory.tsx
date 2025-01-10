export default function Catagory() {
  const categories = [
    "Healthcare",
    "Beauty & Fashion",
    "Education & Travel",
    "Kitchen",
    "Medicle & Entertain",
    "Medicle & Science",
    "Tour & Travel",
    "Kitchen",
    "Featured",
    "Popular",
    "Latest",
  ];

  return (
    <div className="flex flex-col justify-center items-center my-32">
      <button className="text-sm text-[#b46bcf] mb-8 w-52 h-8 rounded-full bg-[#b46bcf44]">
        Histudy Feature Category
      </button>
      <div className="flex flex-wrap justify-center gap-y-4 gap-x-8 max-w-[800px] mx-auto mt-8">
        {categories.map((category, index) => (

        <div
        className="bg-[#f9f9f9] shadow-[0_0_15px_2px_rgba(0,0,0,0.2)] px-8 py-4 rounded-full text-base text-gray-700 cursor-pointer transition-transform duration-200 hover:bg-[#4f24b4c5] hover:text-white hover:scale-110"
        key={index}
        >
        {category}
        </div>
        ))}
      </div>
    </div>
  );
}
