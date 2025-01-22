export default function OneCard() {
  const courseData = [
    {
      id: 1,
      title: "The Complete Histudy 2024: From Zero to Expert!",
      description:
        "Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games, and apps!",
      badge: "Bestseller",
      rating: 4.8,
      reviews: 2153,
      students: 6169,
      startDate: "12/2024",
      endDate: "2/2025",
      language: "AI",
      certified: true,
      price: 70,
      originalPrice: 200,
      videoUrl: "https://www.youtube.com/watch?v=4jmsHaJ7xEA",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-indigo-100 to-purple-50 h-svh flex pt-20 justify-center overflow-hidden">
      <div className="w-[1200px]">
        {/* Breadcrumb */}
        <div className="mb-4 text-gray-600 p-6">
          Home <span className="mx-1">›</span> Course
        </div>

        {courseData.map((course) => (
          <div key={course.id} className="mb-10">
            {/* Content with Card in Row */}
            <div className="flex flex-col md:flex-row sm:flex-col xl:flex-row gap-6 p-6">
              {/* Left: Heading and Description */}
              <div className="md:w-2/3">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                  {course.title}
                </h1>
                <p className="text-lg text-gray-600 mb-6">
                  {course.description}
                </p>

                {/* Course Meta Info */}
                <div className="flex flex-wrap gap-4 items-center text-gray-700 mb-6">
                  <span className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-sm">
                    {course.badge}
                  </span>
                  <span className="flex items-center gap-1">
                    ⭐ {course.rating} <span>({course.reviews} ratings)</span>
                  </span>
                  <span>{course.students} students</span>
                </div>

                <div className="text-sm text-gray-500">
                  Starting From: {course.startDate} |{" "}
                  {course.certified && "Certified Course"}
                </div>
              </div>

              {/* Right: Price Card */}
              <div className="md:w-1/3 bg-white shadow-lg rounded-lg p-6">
                {/* Price Information */}
                <div className="text-2xl font-bold text-gray-800 mb-2">
                  ${course.price}{" "}
                  <span className="text-gray-500 line-through">
                    ${course.originalPrice}
                  </span>
                </div>

                {/* Video Preview */}
                <div className="mb-4">
                  <div className="bg-gray-200 w-full h-40 flex items-center justify-center rounded-lg overflow-hidden">
                    <a
                      href={course.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-700 text-white px-6 py-2 rounded-full text-lg"
                    >
                      ▶ Watch Preview
                    </a>
                  </div>
                </div>

                {/* Buttons */}
          
                <div className="text-sm text-gray-500 flex flex-col gap-3">
                  <p>Starting Date : {course.startDate} </p>
                  <p>Ending Date : {course.endDate} </p>
                  <p>Language : {course.language} </p>
                  <button className=" w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600 transition">
                  Buy Now
                </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
