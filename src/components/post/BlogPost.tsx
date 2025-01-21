'use client';
import Image from "next/image";
import { PiArrowRightThin } from "react-icons/pi";
import { useState } from "react";

interface BlogPost {
  image: string;
  alt: string;
  title: string;
  description: string;
 
}

const blogPosts: BlogPost[] = [
  {
    image: "/images/post/PopularPost.webp",
    alt: "image",
    title: "How to Analyze Your Best Pages for SEO Performance",
    description: "It is a long established fact that a reader.",
   
  },
  {
    image: "/images/post/Popularpost_sub(1).webp",
    alt: "image",
    title: "Difficult Things About Education.",
    description: "ijijpokp",
   
  },
  {
    image: "/images/post/Popularpost_sub(1).webp",
    alt: "image",
    title: "Education Is So Famous, But Why?",
    description: "",
    
  },
  {
    image: "/images/post/Popularpost_sub(1).webp",
    alt: "image",
    title: "Understanding Modern SEO Strategies",
    description: "Modern SEO techniques for 2025.",

  },
  {
    image: "/images/post/Popularpost_sub(1).webp",
    alt: "image",
    title: "The Future of Education",
    description: "How tech is shaping education.",
 
  },
  {
    image: "/images/post/Popularpost_sub(1).webp",
    alt: "image",
    title: "Challenges in Online Education",
    description: "Barriers to online learning.",
   
  },
];

export default function BlogPost() {
  const [mainCard, setMainCard] = useState<BlogPost>(blogPosts[0]); // Main card
  const [sidePosts, setSidePosts] = useState<BlogPost[]>(blogPosts.slice(1, 3)); // Initial 2 posts for the right side
  const [extraRows, setExtraRows] = useState<BlogPost[]>(blogPosts.slice(3)); // Additional posts for the right side

  const handlePostClick = (clickedPost: BlogPost) => {
    const clickedPostIndex = [...sidePosts, ...extraRows].findIndex(
      (post) => post.title === clickedPost.title
    );

    const updatedMainCard = { ...clickedPost };
    const updatedSidePosts = [...sidePosts, ...extraRows];
    updatedSidePosts[clickedPostIndex] = { ...mainCard };

    setMainCard(updatedMainCard);
    setSidePosts(updatedSidePosts.slice(0, 2));
    setExtraRows(updatedSidePosts.slice(2));
  };

  return (
    <div className="flex flex-col items-center gap-6 bg-[#aed5f53a] mt-6 p-6">
      <div className="flex flex-col items-center text-left gap-6 w-full">
        <button className="w-[90px] h-[35px] text-[#d87093] bg-[#bb84bb1f] border-none rounded-full text-sm">
          BLOG POST
        </button>
        <h1 className="text-3xl font-extrabold flex flex-col justify-center gap-y-10 items-center">
          Post Popular Post.
        </h1>
      </div>

      <div className="flex flex-col xl:flex-row gap-6 justify-center items-center w-full">
        {/* Main box on the left side */}
        <div className="xl:w-[820px] xl:h-[500px] bg-white p-4 rounded-lg shadow-lg">
          <Image
            src={mainCard.image}
            alt={mainCard.alt}
            width={500}
            height={300}
            className="object-cover w-full h-[300px]"
          />
          <h1 className="text-xl font-bold pt-4">{mainCard.title}</h1>
          {mainCard.description && (
            <h3 className="text-sm text-gray-600">{mainCard.description}</h3>
          )}
        </div>

        {/* Right side container */}
        <div className="xl:w-[400px] h-[500px] overflow-y-auto scroll-smooth border p-4 rounded-lg">
          {[...sidePosts, ...extraRows].map((post, index) => (
            <div
              key={index}
              onClick={() => handlePostClick(post)}
              className="bg-white p-4 rounded-lg shadow-lg mb-4 cursor-pointer"
            >
              <Image
                src={post.image}
                alt={post.alt}
                width={250}
                height={150}
                className="object-cover w-full h-[150px]"
              />
              <h1 className="text-lg font-bold pt-3">{post.title}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

