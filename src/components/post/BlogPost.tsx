import Image from "next/image";
import { PiArrowRightThin } from "react-icons/pi";

const blogPosts = [
  {
    image: "/images/post/PopularPost.webp",
    alt: "image",
    title: "How to Analyze Your Best Pages for SEO Performance",
    description: "It is a long established fact that a reader.",
    link: "/learn-more"
  },
  {
    image: "/images/post/Popularpost_sub(1).webp",
    alt: "image",
    title: "Difficult Things About Education.",
    description: "",
    link: "/read-article"
  },
  {
    image: "/images/post/Popularpost_sub(1).webp",
    alt: "image",
    title: "Education Is So Famous, But Why?",
    description: "",
    link: "/read-article"
  },
 
];

export default function BlogPost() {
  return (
    <div className="flex flex-col items-center gap-6 bg-[#aed5f53a] mt-[-4rem] p-6">
      <div className="flex flex-col items-center text-left gap-6 w-full">
        <button className="w-[90px] h-[35px] text-[#d87093] bg-[#bb84bb1f] border-none rounded-full text-sm">
          BLOG POST
        </button>
        <h1 className="text-3xl font-extrabold flex flex-col justify-center gap-y-10 items-center">
          Post Popular Post.
          <button className="text-sm w-[130px] h-[45px] text-white bg-gradient-to-r from-blue-500 to-violet-500 font-bold rounded-xl flex items-center justify-center gap-1">
            See All Articles <PiArrowRightThin />
          </button>
        </h1>
      </div>

      <div className="flex flex-col xl:flex-row gap-6 justify-center items-center w-full">
        {/* Main box on the left side */}
        <div className="xl:w-[820px] h-[500px] md:h-[530px] sm:h-[450px] xl:h-[500px] bg-white p-4 rounded-lg shadow-lg">
          <Image
            src={blogPosts[0].image}
            alt={blogPosts[0].alt}
            width={500}
            height={300}
            className="object-cover w-full h-[300px]"
          />
          <h1 className="text-xl font-bold pt-4">{blogPosts[0].title}</h1>
          {blogPosts[0].description && (
            <h3 className="text-sm text-gray-600">{blogPosts[0].description}</h3>
          )}
          <p className="text-sm font-normal text-black py-3 flex items-center gap-2">
            {blogPosts[0].link.includes("learn-more") ? "Learn More" : "Read Article"}{" "}
            <PiArrowRightThin />
          </p>
        </div>

        {/* Right side container with three posts */}
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-1 md:grid-cols-1">
          {blogPosts.slice(1).map((post, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-lg w-full sm:w-[250px] md:w-[350px] h-[250px] sm:h-[250px] md:h-[250px] xl:[120px]  "
            >
              <Image
                src={post.image}
                alt={post.alt}
                width={250}
                height={150}
                className="object-cover w-full h-[150px]"
              />
              <h1 className="text-lg font-bold pt-3">{post.title}</h1>
              {post.description && (
                <h3 className="text-sm text-gray-600">{post.description}</h3>
              )}
              <p className="text-sm font-normal text-black py-3 flex items-center gap-2">
                {post.link.includes("learn-more") ? "Learn More" : "Read Article"}{" "}
                <PiArrowRightThin />
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
